type Productss = {
  readonly id: string;
  name: string;
  price: number;
};

type OrderItemm = {
  product: Productss;
  quantity: number;
  note?: string;
};

type Orderr = {
  orderId: string;
  customerName: string;
  items: OrderItemm[];
  deliveryAddress: string;
  isPaid: boolean;
};

type Invoice = {
  invoiceId: string;
  orders: Orderr[];
  createdAt: Date;
};

function calculateInvoiceTotal(invoice: Invoice): number {
  return invoice.orders.reduce((total, order) => {
    const orderTotal = order.items.reduce((sum, item) => {
      return sum + item.product.price * item.quantity;
    }, 0);
    return total + orderTotal;
  }, 0);
}

function getUnpaidOrders(invoice: Invoice): Orderr[] {
  return invoice.orders.filter(order => !order.isPaid);
}

function printInvoice(invoice: Invoice): void {
  console.log(`HÓA ĐƠN: #${invoice.invoiceId} - Ngày tạo: ${invoice.createdAt.toISOString().split("T")[0]}`);
  console.log('------------------------------');

  invoice.orders.forEach(order => {
    console.log(`\nĐƠN HÀNG: #${order.orderId} - ${order.customerName}`);
    let orderTotal = 0;

    order.items.forEach(item => {
      const itemTotal = item.product.price * item.quantity;
      orderTotal += itemTotal;
      const noteText = item.note ? ` (note: ${item.note})` : '';
      console.log(`- ${item.product.name} × ${item.quantity} → ${itemTotal.toLocaleString()} VND${noteText}`);
    });

    console.log(`\nTổng đơn: ${orderTotal.toLocaleString()} VND`);
    console.log(`\nTrạng thái: ${order.isPaid ? "ĐÃ THANH TOÁN" : "CHƯA THANH TOÁN"}`);
  });

  const invoiceTotal = calculateInvoiceTotal(invoice);
  console.log(`\n>> Tổng cộng hóa đơn: ${invoiceTotal.toLocaleString()} VND`);
}

const product1: Productss = { id: "P001", name: "Áo sơ mi", price: 250000 };
const product2: Productss = { id: "P002", name: "Quần jean", price: 400000 };
const product3: Productss = { id: "P003", name: "Váy hoa", price: 700000 };

const order1: Orderr = {
  orderId: "ORD001",
  customerName: "Nguyễn Văn A",
  deliveryAddress: "Hà Nội",
  isPaid: true,
  items: [
    { product: product1, quantity: 2 },
    { product: product2, quantity: 1 }
  ]
};

const order2: Orderr = {
  orderId: "ORD002",
  customerName: "Trần Thị B",
  deliveryAddress: "Hồ Chí Minh",
  isPaid: false,
  items: [
    { product: product3, quantity: 1, note: "size M" }
  ]
};

const invoice: Invoice = {
  invoiceId: "INV001",
  createdAt: new Date("2024-05-14"),
  orders: [order1, order2]
};

printInvoice(invoice);
