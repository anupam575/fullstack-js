// Abstract base class
class BankAccount {
  constructor(accountNumber, owner, balance = 0) {
    if (new.target === BankAccount) {
      throw new Error("Cannot instantiate abstract class directly");
    }
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    throw new Error("Method 'deposit()' must be implemented in subclass");
  }

  withdraw(amount) {
    throw new Error("Method 'withdraw()' must be implemented in subclass");
  }

  getBalance() {
    return this.balance;
  }

  getAccountInfo() {
    return {
      accountNumber: this.accountNumber,
      owner: this.owner,
      balance: this.balance
    };
  }
}

// Savings Account class
class SavingsAccount extends BankAccount {
  constructor(accountNumber, owner, balance = 0) {
    super(accountNumber, owner, balance);
    this.interestRate = 0.03; // 3% interest
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`₹${amount} deposited to Savings. Balance: ₹${this.balance}`);
    }
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`₹${amount} withdrawn from Savings. Balance: ₹${this.balance}`);
    } else {
      console.log("Insufficient balance in Savings.");
    }
  }

  applyInterest() {
    const interest = this.balance * this.interestRate;
    this.balance += interest;
    console.log(`Interest ₹${interest.toFixed(2)} added. New Balance: ₹${this.balance}`);
  }
}

// Current Account class
class CurrentAccount extends BankAccount {
  constructor(accountNumber, owner, balance = 0) {
    super(accountNumber, owner, balance);
    this.overdraftLimit = 10000; // Overdraft limit
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`₹${amount} deposited to Current. Balance: ₹${this.balance}`);
    }
  }

  withdraw(amount) {
    if (amount <= this.balance + this.overdraftLimit) {
      this.balance -= amount;
      console.log(`₹${amount} withdrawn from Current. Balance: ₹${this.balance}`);
    } else {
      console.log("Overdraft limit exceeded.");
    }
  }
}

// Testing the code
const savings = new SavingsAccount("111", "Aman", 5000);
savings.deposit(1000);
savings.withdraw(2000);
savings.applyInterest();
console.log("Savings Account Info:", savings.getAccountInfo());

const current = new CurrentAccount("222", "Neha", 2000);
current.deposit(3000);
current.withdraw(6000);
current.withdraw(8000); // Should hit overdraft limit
console.log("Current Account Info:", current.getAccountInfo());
