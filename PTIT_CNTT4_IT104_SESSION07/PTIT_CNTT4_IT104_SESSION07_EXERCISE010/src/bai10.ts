class MenuItem {
  public id: number;
  public name: string;
  public price: number;

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class Table {
  public id: number;
  public capacity: number;
  public available: boolean;

  constructor(id: number, capacity: number) {
    this.id = id;
    this.capacity = capacity;
    this.available = true;
  }
}

class Reservation {
  public id: number;
  public customerName: string;
  public tableId: number;

  constructor(id: number, customerName: string, tableId: number) {
    this.id = id;
    this.customerName = customerName;
    this.tableId = tableId;
  }
}

class Order {
  public id: number;
  public tableId: number;
  public items: MenuItem[];

  constructor(id: number, tableId: number, items: MenuItem[]) {
    this.id = id;
    this.tableId = tableId;
    this.items = items;
  }

  getTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}

class Restaurant {
  public menu: MenuItem[];
  public tables: Table[];
  public reservations: Reservation[];
  public orders: Order[];

  constructor() {
    this.menu = [];
    this.tables = [];
    this.reservations = [];
    this.orders = [];
  }

  addMenuItem(item: MenuItem): void {
    this.menu.push(item);
    console.log(`Đã thêm món "${item.name}" vào menu.`);
  }

  addTable(table: Table): void {
    this.tables.push(table);
    console.log(`Đã thêm bàn #${table.id} với sức chứa ${table.capacity} người.`);
  }

  makeReservation(customerName: string, tableId: number): void {
    const table = this.tables.find(t => t.id === tableId);
    if (!table) {
      console.log(`Không tìm thấy bàn #${tableId}.`);
      return;
    }
    if (!table.available) {
      console.log(`Bàn #${tableId} đã được đặt.`);
      return;
    }
    const reservationId = this.reservations.length + 1;
    this.reservations.push(new Reservation(reservationId, customerName, tableId));
    table.available = false;
    console.log(`Khách "${customerName}" đã đặt bàn #${tableId}.`);
  }

  placeOrder(tableId: number, itemIds: number[]): void {
    const table = this.tables.find(t => t.id === tableId);
    if (!table) {
      console.log(`Không tìm thấy bàn #${tableId}.`);
      return;
    }
    if (table.available) {
      console.log(`Bàn #${tableId} chưa được đặt, không thể đặt món.`);
      return;
    }
    const items = itemIds.map(id => {
      const menuItem = this.menu.find(m => m.id === id);
      if (!menuItem) throw new Error(`Không tìm thấy món #${id}`);
      return menuItem;
    });
    const orderId = this.orders.length + 1;
    this.orders.push(new Order(orderId, tableId, items));
    console.log(`Bàn #${tableId} đã đặt ${items.length} món.`);
  }

  generateBill(tableId: number): void {
    const ordersForTable = this.orders.filter(o => o.tableId === tableId);
    if (ordersForTable.length === 0) {
      console.log(`Không có đơn hàng nào cho bàn #${tableId}.`);
      return;
    }
    const total = ordersForTable.reduce((sum, order) => sum + order.getTotal(), 0);
    console.log(`Tổng hóa đơn cho bàn #${tableId} là: ${total.toLocaleString()} VND`);
    // Sau khi thanh toán, bàn trống lại
    const table = this.tables.find(t => t.id === tableId);
    if (table) table.available = true;
    // Xóa các đơn hàng của bàn này
    this.orders = this.orders.filter(o => o.tableId !== tableId);
  }
}

// ======= TEST DEMO =======
const restaurant = new Restaurant();

// Thêm món ăn vào menu
restaurant.addMenuItem(new MenuItem(1, "Phở Bò", 50000));
restaurant.addMenuItem(new MenuItem(2, "Bún Chả", 45000));
restaurant.addMenuItem(new MenuItem(3, "Cà Phê", 20000));

// Thêm bàn vào nhà hàng
restaurant.addTable(new Table(1, 4));
restaurant.addTable(new Table(2, 2));

// Đặt bàn
restaurant.makeReservation("Nguyễn Văn A", 1);

// Đặt món
restaurant.placeOrder(1, [1, 3]);
restaurant.placeOrder(1, [2]);

// Tính tiền
restaurant.generateBill(1);
