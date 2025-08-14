class Customer {
  static nextId = 1;
  id: number;
  name: string;
  email: string;
  shippingAddress: string;
  constructor(
    id: number,
    name: string,
    email: string,
    shippingAddress: string
  ) {
    this.id = Customer.nextId++;
    this.name = name;
    this.email = email;
    this.shippingAddress = shippingAddress;
  }
  getDetails(): void {
    console.log(`ID : ${this.id}
            Name: ${this.name}
            Email:${this.email}
            ShippingAddress: ${this.shippingAddress}`);
  }
}
abstract class Product {
  static nextId = 1;
  id: number;
  name: string;
  price: number;
  stock: number;
  constructor(name: string, price: number, stock: number) {
    this.id = Product.nextId++;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
  sell(quantity: number): void {
    if (quantity <= 0) {
      console.log("Số lượng bán phải lớn hơn 0!");
      return;
    }
    if (quantity > this.stock) {
      console.log("Không đủ hàng trong kho!");
      return;
    }
    this.stock -= quantity;
    console.log(
      `Đã bán ${quantity} sản phẩm. Số lượng tồn kho còn lại: ${this.stock}`
    );
  }
  restock(quantity: number): void {
    if (quantity <= 0) {
      console.log("Số lượng thêm vào kho phải lớn hơn 0!");
      return;
    }
    this.stock += quantity;
    console.log(
      `Đã nhập thêm ${quantity} sản phẩm. Tồn kho hiện tại: ${this.stock}`
    );
  }
  abstract getProductInfo(): string;
  abstract getShippingCost(distance: number): number;
  abstract getCategory(): string;
}
class ElectronicsProduct extends Product {
  warrantyPeriod: number;
  constructor(
    name: string,
    price: number,
    stock: number,
    warrantyPeriod: number
  ) {
    super(name, price, stock);
    this.warrantyPeriod = warrantyPeriod;
  }
  getProductInfo(): string {
    return `ID: ${this.id}
            Tên: ${this.name}
            Giá: ${this.price} VND
            Tồn kho: ${this.stock}
            Bảo hành: ${this.warrantyPeriod} tháng`;
  }
  getShippingCost(distance: number): number {
    return 50000; // cố định 50k
  }
  getCategory(): string {
    return "Điện tử";
  }
}

class ClothingProduct extends Product {
  size: string;
  color: string;
  constructor(
    name: string,
    price: number,
    stock: number,
    size: string,
    color: string
  ) {
    super(name, price, stock);
    this.size = size;
    this.color = color;
  }
  getProductInfo(): string {
    return `ID: ${this.id}
            Tên: ${this.name}
            Giá: ${this.price} VND
            Tồn kho: ${this.stock}
            Kích cỡ: ${this.size}
            Màu sắc: ${this.color}`;
  }
  getShippingCost(distance: number): number {
    return 25000; // cố định 25k
  }
  getCategory(): string {
    return "Quần Áo";
  }
}

class Order {
  static nextId = 1;
  orderId: number;
  customer: Customer;
  products: { product: Product; quantity: number }[];
  totalAmount: number;
  constructor(
    customer: Customer,
    products: { product: Product; quantity: number }[]
  ) {
    this.orderId = Order.nextId++;
    this.customer = customer;
    this.products = products;
    this.totalAmount = this.calculateTotalAmount();
  }
  calculateTotalAmount(): number {
    let total = 0;
    for (const item of this.products) {
      total +=
        item.product.price * item.quantity + item.product.getShippingCost(0);
    }
    return total;
  }
  getDetails(): string {
    let details = `Order ID :${this.orderId}\n`;
    details += `Customer:${this.customer.getDetails()}\n`;
    details += `Products:\n`;
    for (const item of this.products) {
      details += `-${item.product.getProductInfo()}x ${item.quantity}\n`;
    }
    details += `Total Amount: ${this.totalAmount.toLocaleString()} VND\n`;
    return details;
  }
}

class Store {
  products: Product[] = [];
  customers: Customer[] = [];
  orders: Order[] = [];
  addProduct(product: Product): void {
    this.products.push(product);
  }
  addCustomer(name: string, email: string, address: string): void {
    const newCustomer = new Customer(
      this.customers.length + 1,
      name,
      email,
      address
    );
    this.customers.push(newCustomer);
    console.log(`Khách hàng "${name}" đã được thêm thành công!`);
  }
  createOrder(
    customerId: number,
    productQuantities: { productId: number; quantity: number }[]
  ): Order | null {
    const customer = this.customers.find((c) => c.id === customerId);
    if (!customer) {
      console.log(`Không tìm thấy khách hàng có ID ${customerId}`);
      return null;
    }
    const orderItems: { product: Product; quantity: number }[] = [];
    for (const pq of productQuantities) {
      const product = this.products.find((p) => p.id === pq.productId);
      if (!product) {
        console.log(`Sản phẩm ID ${pq.productId} không tồn tại, bỏ qua.`);
        continue;
      }
      if (product.stock < pq.quantity) {
        console.log(
          `Sản phẩm "${product.name}" không đủ hàng. Chỉ còn ${product.stock}.`
        );
        continue;
      }
      product.stock -= pq.quantity;
      orderItems.push({ product, quantity: pq.quantity });
      if (orderItems.length === 0) {
        console.log("Không có sản phẩm hợp lệ để tạo đơn hàng.");
        return null;
      }
      const newOrder = new Order(customer, orderItems);
      this.orders.push(newOrder);
      console.log(
        `Đơn hàng ID ${newOrder.orderId} đã được tạo cho khách hàng "${customer.name}"`
      );
      return newOrder;
    }
  }
  cancelOrder(orderId: number): void {
    const orderIndex = this.orders.findIndex((o) => o.orderId === orderId);
    if (orderIndex === -1) {
      console.log(`Không tìm thấy đơn hàng có ID ${orderId}`);
      return;
    }
    const order = this.orders[orderIndex];

    order.products.forEach((item: { product: Product; quantity: number }) => {
      const product = this.products.find((p) => p.id === item.product.id);
      if (product) {
        product.stock += item.quantity;
      }
    });
    this.orders.splice(orderIndex, 1);
    console.log(`Đơn hàng ${orderId} đã được hủy và hoàn trả hàng vào kho.`);
  }
  listAvailableProducts(): void {
    const availableProducts = this.products.filter(
      (product) => product.stock > 0
    );

    if (availableProducts.length === 0) {
      console.log("Không có sản phẩm nào còn hàng.");
      return;
    }

    console.log("Danh sách sản phẩm còn hàng:");
    availableProducts.forEach((product) => {
      console.log(
        `- ${product.name} | Giá: ${product.price} | Tồn kho: ${product.stock}`
      );
    });
  }
  listCustomerOrders(customerId: number): void {
    const customerOrders = this.orders.filter(
      (order) => order.customer.id === customerId
    );

    if (customerOrders.length === 0) {
      console.log(
        `Không tìm thấy đơn hàng nào của khách hàng ID: ${customerId}`
      );
      return;
    }

    console.log(`Danh sách đơn hàng của khách hàng ID: ${customerId}`);
    customerOrders.forEach((order) => {
      console.log(`- Đơn hàng ID: ${order.orderId}`);
      order.products.forEach((item) => {
        console.log(`   • ${item.product.name} - Số lượng: ${item.quantity}`);
      });
    });
  }
  calculateTotalRevenue(): number {
    return this.orders.reduce((total, order) => {
      const orderTotal = order.products.reduce((sum, item) => {
        return sum + item.product.price * item.quantity;
      }, 0);
      return total + orderTotal;
    }, 0);
  }

  // 2. Đếm số lượng sản phẩm thuộc mỗi danh mục
  countProductsByCategory(): void {
    const categoryCount = this.products.reduce<Record<string, number>>(
      (acc, product) => {
        const category = product.getCategory();
        acc[category] = (acc[category] || 0) + 1;
        return acc;
      },
      {}
    );

    console.log("Số lượng sản phẩm theo danh mục:", categoryCount);
  }
  // 3. Cập nhật số lượng tồn kho sản phẩm
  updateProductStock(productId: number, newStock: number): void {
    const index = this.products.findIndex((p) => p.id === productId);
    if (index !== -1) {
      this.products[index].stock = newStock;
      console.log(
        `Đã cập nhật tồn kho cho sản phẩm ID ${productId} thành ${newStock}`
      );
    } else {
      console.log(`Không tìm thấy sản phẩm ID ${productId}`);
    }
  }
}
function printfMenu(store: Store): void {
  let choice: number;
  do {
    console.log("\n===== MENU =====");
    console.log("1.Thêm khách hàng mới");
    console.log("2.Thêm sản phẩm mới");
    console.log("3.Tạo đơn hàng mới");
    console.log("4.Hủy đơn hàng");
    console.log("5.Hiển thị danh sách sản phẩm còn hàng trong kho ");
    console.log("6.Hiển thị danh sách đơn hàng của một khách hàng");
    console.log("7.Tính và hiển thị tổng doanh thu của cửa hàng");
    console.log("8.Thống kê sản phẩm theo danh mục");
    console.log("9.Cập nhật tồn kho cho một sản phẩm ");
    console.log("10.Tìm kiếm và hiển thị thông tin bằng ID");
    console.log("11.Xem thông tin chi tiết ");
    console.log("12.Thoát chương trình");
    console.log("Moi ban chon:");
    const input = prompt("Mời bạn nhập lựa chọn: ");
    choice = Number(input);
    if (isNaN(choice)) {
      console.log("Vui lòng nhập một số hợp lệ!");
      choice = 0;
    }
    switch (choice) {
      case 1: {
        const name = prompt("Nhập tên khách hàng: ") || "";
        const email = prompt("Nhập email: ") || "";
        const address = prompt("Nhập địa chỉ: ") || "";
        store.addCustomer(name, email, address);
        break;
      }
      case 2: {
        const type = prompt("Nhập loại sản phẩm (1: Điện tử, 2: Quần áo): ");
        const name = prompt("Tên sản phẩm: ") || "";
        const price = Number(prompt("Giá sản phẩm: "));
        const stock = Number(prompt("Số lượng tồn kho: "));
        if (type === "1") {
          const warranty = Number(prompt("Thời gian bảo hành (tháng): "));
          store.addProduct(
            new ElectronicsProduct(name, price, stock, warranty)
          );
        } else {
          const size = prompt("Kích cỡ: ") || "";
          const color = prompt("Màu sắc: ") || "";
          store.addProduct(
            new ClothingProduct(name, price, stock, size, color)
          );
        }
        break;
      }
      case 3: {
        const customerId = Number(prompt("Nhập ID khách hàng: "));
        const numProducts = Number(prompt("Nhập số loại sản phẩm trong đơn: "));
        const productQuantities: { productId: number; quantity: number }[] = [];
        for (let i = 0; i < numProducts; i++) {
          const pid = Number(prompt(`ID sản phẩm thứ ${i + 1}: `));
          const qty = Number(prompt("Số lượng: "));
          productQuantities.push({ productId: pid, quantity: qty });
        }
        store.createOrder(customerId, productQuantities);
        break;
      }
      case 4: {
        const orderId = Number(prompt("Nhập ID đơn hàng cần hủy: "));
        store.cancelOrder(orderId);
        break;
      }
      case 5:
        store.listAvailableProducts();
        break;
      case 6: {
        const customerId = Number(prompt("Nhập ID khách hàng: "));
        store.listCustomerOrders(customerId);
        break;
      }
      case 7:
        console.log("Tổng doanh thu:", store.calculateTotalRevenue(), "VND");
        break;
      case 8:
        store.countProductsByCategory();
        break;
      case 9: {
        const pid = Number(prompt("Nhập ID sản phẩm cần cập nhật: "));
        const newStock = Number(prompt("Nhập số lượng tồn kho mới: "));
        store.updateProductStock(pid, newStock);
        break;
      }
      case 10: {
        const pid = Number(prompt("Nhập ID sản phẩm: "));
        const product = store.products.find((p) => p.id === pid);
        if (product) {
          console.log(product.getProductInfo());
        } else {
          console.log("Không tìm thấy sản phẩm.");
        }
        break;
      }
      case 11: {
        const cid = Number(prompt("Nhập ID khách hàng: "));
        const customer = store.customers.find((c) => c.id === cid);
        if (customer) {
          customer.getDetails();
        } else {
          console.log("Không tìm thấy khách hàng.");
        }
        break;
      }
      case 12:
        console.log("Thoát chương trình...");
        break;
      default:
        console.log("Lựa chọn không hợp lệ!");
    }
  } while (choice !== 12);
}
const myStore = new Store();
printfMenu(myStore);
