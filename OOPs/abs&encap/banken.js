class BankAccount {
  #accountNumber;
  #balance;
  #owner;

  constructor(accountNumber, owner, initialBalance = 0) {
    this.#accountNumber = accountNumber;
    this.#owner = owner;
    this.#balance = initialBalance;
  }

  // Getter for balance
  getBalance() {
    return this.#balance;
  }

  // Deposit method
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited ₹${amount}. New balance: ₹${this.#balance}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  // Withdraw method
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew ₹${amount}. Remaining balance: ₹${this.#balance}`);
    } else {
      console.log("Invalid withdraw amount or insufficient funds.");
    }
  }

  // Account summary
  getAccountInfo() {
    return {
      accountNumber: this.#accountNumber,
      owner: this.#owner,
      balance: this.#balance
    };
  }
}

// Usage example
const myAccount = new BankAccount("1234567890", "Aman", 5000);

myAccount.deposit(1500);
myAccount.withdraw(2000);
console.log("Account Info:", myAccount.getAccountInfo());

// Trying to access private field (will throw error if you try)
//console.log(myAccount.#balance); // ❌ Error: Private field
console.log(myAccount.getAccountInfo());

