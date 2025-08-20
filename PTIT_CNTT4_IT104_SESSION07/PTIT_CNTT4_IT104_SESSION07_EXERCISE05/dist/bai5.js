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
const user1 = new userAcc("001", "nguyenvana", "123456", "user", "active");
const user2 = new userAcc("002", "tranthib", "abcdef", "user", "banned");
console.log("== User 1 ==");
user1.login("123456"); // Đăng nhập thành công
user1.logOut(); // Đăng xuất thành công
console.log("== User 2 ==");
user2.login("abcdef"); // Tài khoản đã bị khóa
