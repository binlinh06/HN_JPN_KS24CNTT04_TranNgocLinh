class Account {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = [];
        this.status = "active";
    }
    deposit(amount) {
        if (amount <= 0) {
            console.log("Số tiền nạp phải > 0");
            return;
        }
        this.balance += amount;
        this.history.push(`Nạp: +${amount}, Số dư: ${this.balance}`);
        console.log(`Nạp thành công: ${amount}`);
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Số tiền rút phải > 0");
            return;
        }
        if (amount > this.balance) {
            console.log("Số dư không đủ để rút");
            return;
        }
        this.balance -= amount;
        this.history.push(`Rút: -${amount}, Số dư: ${this.balance}`);
        console.log(`Rút thành công: ${amount}`);
    }
    showHistory() {
        console.log(`\nLịch sử giao dịch tài khoản ${this.accountNumber}:`);
        this.history.forEach((item) => console.log(item));
    }
    getBalance() {
        return this.balance;
    }
}
class CheckingAccount extends Account {
    constructor(accountNumber, balance, overdraftLimit) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Số tiền rút phải > 0");
            return;
        }
        // Cho phép rút đến âm (overdraftLimit)
        if (this.balance - amount < -this.overdraftLimit) {
            console.log(`Không thể rút. Giới hạn thấu chi là ${this.overdraftLimit}, số dư hiện tại: ${this.balance}`);
            return;
        }
        this.balance -= amount;
        this.history.push(`Rút: -${amount}, Số dư: ${this.balance}`);
        console.log(`Rút thành công: ${amount}`);
    }
}
const checkingAcc = new CheckingAccount("987654", 2000, 1000); // Số dư 2000, có thể rút đến -1000
console.log(`Số dư ban đầu: ${checkingAcc.getBalance()}`);
checkingAcc.deposit(500);
checkingAcc.withdraw(2200); // Vượt số dư nhưng trong hạn mức
checkingAcc.withdraw(2000); // Quá hạn mức overdraft
checkingAcc.showHistory();
