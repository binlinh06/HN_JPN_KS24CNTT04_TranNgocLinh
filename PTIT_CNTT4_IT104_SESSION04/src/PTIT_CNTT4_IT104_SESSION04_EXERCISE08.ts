type Productts = {
  readonly id: string;
  name: string;
  price: number;
};

type OrderItem = {
  product: Productts;
  quantity: number;
};

type Order = {
  orderId: string;
  customerName: string;
  items: OrderItem[];
  note?: string;
};

function calculateOrderTotal(order: Order): number {
  return order.items.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);
}
function printOrder(order: Order): void {
  console.log(`Đơn hàng: #${order.orderId}`);
  console.log(`Khách hàng: ${order.customerName}`);
  console.log(`Sản phẩm:`);

  order.items.forEach((item) => {
    const itemTotal = item.product.price * item.quantity;
    console.log(
      `- ${item.product.name} × ${item.quantity} → ${itemTotal.toLocaleString()} VND`
    );
  });

  const total = calculateOrderTotal(order);
  console.log(`Tổng cộng: ${total.toLocaleString()} VND`);

  if (order.note) {
    console.log(`Ghi chú: ${order.note}`);
  }
}
const shirt: Productts = {
  id: "P001",
  name: "Áo sơ mi",
  price: 250000,
};

const pants: Productts = {
  id: "P002",
  name: "Quần tây",
  price: 400000,
};

const orderExample: Order = {
  orderId: "ORD001",
  customerName: "Nguyễn Văn A",
  items: [
    { product: shirt, quantity: 2 },
    { product: pants, quantity: 1 },
  ],
  note: "Giao sau 18h",
};

printOrder(orderExample);
