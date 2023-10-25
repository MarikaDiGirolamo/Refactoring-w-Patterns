//
// Apply the Strategy Pattern to refactor the following code
//

class CartItem {
    constructor(price, qty) {
        this.price = price;
        this.qty = qty;
    }

    getTotal() {
        return this.price * this.qty;
    }    
}

class Cart {
    constructor(items) {
        this.items = items;
    }

    getTotal() {
        let total = 0;

        this.items.forEach(item => {
            total += item.getTotal();
        });

        return total;
    }

    pay(paymentMethod) {
        const amountToPay = this.getTotal();
        
        if ('PayPal' === paymentMethod) {
            console.log(`Processing payment of ${amountToPay} with PayPal`);
            // some strategy happens here
            return;
        }

        if ('CreditCard' === paymentMethod) {
            console.log(`Processing payment of ${amountToPay} with CreditCard`);
            // some strategy happens here
            return;
        }

        console.log(`Unknown payment method: ${paymentMethod}`);
    }
}

const cartItems = [
    new CartItem(5.99, 1),
    new CartItem(7.99, 2)
];

cartItems.forEach((item, index) => {
    console.log(`Cart Item #${index + 1} total: ${item.getTotal()}`);    
});

const cart = new Cart(cartItems);
console.log(`Cart total: ${cart.getTotal()}`);

cart.pay('PayPal');
cart.pay('CreditCard');
cart.pay('BankTransfer');