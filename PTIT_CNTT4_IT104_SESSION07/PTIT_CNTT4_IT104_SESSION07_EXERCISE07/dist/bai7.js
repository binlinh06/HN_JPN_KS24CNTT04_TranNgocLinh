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
        console.log(`Lịch sử giao dịch tài khoản ${this.accountNumber}:`);
        this.history.forEach((item) => console.log(item));
    }
    getBalance() {
        return this.balance;
    }
}
class SavingAccount extends Account {
    constructor(accountNumber, balance, interesRate) {
        super(accountNumber, balance);
        this.interestRate = interesRate;
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Số tiền rút phải > 0");
            return;
        }
        if (this.balance <= 0) {
            console.log("Không thể rút, số dư = 0");
            return;
        }
        if (amount >= this.balance) {
            console.log(`Rút hết ${this.balance}, tài khoản về 0`);
            this.history.push(`Rút: -${this.balance}, Số dư: 0`);
            this.balance = 0;
            return;
        }
        this.balance -= amount;
        this.history.push(`Rút: -${amount}, Số dư: ${this.balance}`);
        console.log(`Rút thành công: ${amount}`);
    }
}
const savingAcc = new SavingAccount("123456", 5000, 0.05);
console.log(`Tài khoản hiện tại:${savingAcc.getBalance()}`);
savingAcc.deposit(2000);
savingAcc.withdraw(1000);
savingAcc.withdraw(8000); // Rút hết tiền về 0
savingAcc.showHistory();
