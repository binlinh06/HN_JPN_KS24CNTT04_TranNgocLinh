class Account {
    constructor(id, userName, passWord, role) {
        this.id = id;
        this.userName = userName;
        this.passWord = passWord;
        this.isLogin = false;
        this.role = role;
    }
    login(passWord) {
        if (this.passWord === passWord) {
            this.isLogin = true;
            console.log("Đăng nhập thành công");
        }
        else {
            console.log("Sai mật khẩu");
        }
    }
    logOut() {
        if (this.isLogin === true) {
            this.isLogin = false;
            console.log("Đăng xuất thành công");
        }
    }
}
class userAcc extends Account {
    constructor(id, userName, passWord, role, status) {
        super(id, userName, passWord, role);
        this.status = status;
    }
    login(passWord) {
        if (this.status === "banned") {
            console.log("Tài khoản đã bị khóa");
            return;
        }
        super.login(passWord);
    }
}
class adminAcc extends Account {
    banUser(user) {
        user.status = "banned";
        console.log(`Người dùng ${user.userName} đã bị khóa.`);
    }
}
// --- Test ---
const user1 = new userAcc("001", "nguyenvana", "123456", "user", "active");
const admin1 = new adminAcc("admin01", "admin", "adminpass", "admin");
// User đăng nhập
console.log("== User 1 ==");
user1.login("123456"); // Đăng nhập thành công
// Admin khóa user1
console.log("== Admin hành động ==");
admin1.banUser(user1);
// User bị khóa đăng nhập lại
console.log("== User 1 sau khi bị khóa ==");
user1.login("123456"); // Tài khoản đã bị khóa
