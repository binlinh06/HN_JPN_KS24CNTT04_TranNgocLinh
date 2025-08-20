type ProductItem = {
  name: string;
  price: number;
  discount: number;
  quantity: number;
  bulkDiscount?: {
    minQuantity: number;
    extraDiscount: number;
  };
};

type InvoiceDetail = {
  id: number;
  products: ProductItem[];
};

type CustomerInvoice = {
  customerName: string;
  customerId: string;
  invoices: InvoiceDetail[];
};

function calculateInvoiceTotall(invoice: InvoiceDetail): number {
  let totalAmount = 0;

  for (const product of invoice.products) {
    let productTotal = product.price * product.quantity;
    let discountAmount = productTotal * product.discount;

    if (product.bulkDiscount && product.quantity >= product.bulkDiscount.minQuantity) {
      discountAmount += productTotal * product.bulkDiscount.extraDiscount;
    }

    totalAmount += productTotal - discountAmount;
  }

  return totalAmount;
}

function calculateCustomerTotal(customer: CustomerInvoice): number {
  let grandTotal = 0;

  for (const invoice of customer.invoices) {
    grandTotal += calculateInvoiceTotall(invoice);
  }

  return grandTotal;
}

// Ví dụ dữ liệu sử dụng
const customerData: CustomerInvoice = {
  customerName: "Nguyễn Văn A",
  customerId: "KH001",
  invoices: [
    {
      id: 101,
      products: [
        { name: "Áo thun", price: 100000, discount: 0.1, quantity: 2 },
        { name: "Quần jean", price: 200000, discount: 0.15, quantity: 1, bulkDiscount: { minQuantity: 2, extraDiscount: 0.05 } },
      ],
    },
    {
      id: 102,
      products: [
        { name: "Giày", price: 500000, discount: 0.05, quantity: 1 },
      ],
    },
  ],
};

// Gọi hàm tính tổng tiền của khách hàng
const totalCustomerAmount = calculateCustomerTotal(customerData);
console.log("Tổng tiền khách hàng phải trả:", totalCustomerAmount.toLocaleString("vi-VN"), "VND");
