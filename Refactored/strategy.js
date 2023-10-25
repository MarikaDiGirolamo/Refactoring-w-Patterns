class CartItem {
    constructor(price, qty) {
        this.price = price;
        this.qty = qty;
    }

    getTotal() {
        return this.price * this.qty;
    }    
}

class Payable {
    pay(amount) {
    }
}

class PayPalPayment extends Payable {
    pay(amount) {
        console.log(`Processing payment of ${amount} with PayPal`);
    }
}

class CreditCardPayment extends Payable {
    pay(amount) {
        console.log(`Processing payment of ${amount} with CreditCard`);
        
    }
}

class BankTransferPayment extends Payable {
    pay(amount) {
        console.log(`Processing payment of ${amount} with Bank Transfer`);
        
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

    pay(Payable) {
        const amountToPay = this.getTotal();
        Payable.pay(amountToPay);
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

const paypalPayment = new PayPalPayment();
const creditCardPayment = new CreditCardPayment();
const bankTransferPayment = new BankTransferPayment();

cart.pay(paypalPayment);
cart.pay(creditCardPayment);
cart.pay(bankTransferPayment); 
