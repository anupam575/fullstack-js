// Step 1: Define an empty cart array
let cart = [];

// Step 2: Define arrow function to add item to cart
const addItem = (name, price, quantity = 1) => {
    const item = {
        name,
        price,
        quantity
    };
    cart.push(item);
    console.log(`✅ Added ${quantity} x ${name} @ ₹${price} each to cart.`);
};

// Step 3: Arrow function to calculate total price
const calculateTotal = () => {
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
    });
    return total;
};

// Step 4: Arrow function to apply tax (e.g., 18%)
const applyTax = (total, taxRate = 0.18) => total + (total * taxRate);

// Step 5: Arrow function to apply discount (e.g., ₹100 off if total > ₹1000)
const applyDiscount = total => {
    return total > 1000 ? total - 100 : total;
};

// Step 6: Arrow function to display cart
const showCart = () => {
    console.log("\n🛒 Your Shopping Cart:");
    cart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - ₹${item.price} x ${item.quantity}`);
    });
};

// Step 7: Arrow function to checkout
const checkout = () => {
    showCart();
    let total = calculateTotal();
    console.log(`\n🧮 Subtotal: ₹${total}`);
    
    total = applyDiscount(total);
    console.log(`🎁 After Discount: ₹${total}`);
    
    total = applyTax(total);
    console.log(`💰 After Tax (18%): ₹${total.toFixed(2)}`);

    console.log("\n✅ Thank you for shopping!");
};

// ✅ Let's add some items
addItem("T-shirt", 500, 2);
addItem("Jeans", 1200, 1);
addItem("Shoes", 1500, 1);
addItem("Cap", 200, 3);
addItem("T-shirt", 500, 4);


// 🧾 Checkout the cart
checkout();
