class OrderItem {
    constructor(price, qty) {
        this.price = price;
        this.qty = qty;
    }

    getTotal() {
        return this.price * this.qty;
    }
}

class Order {
    constructor(items, country) {
        this.items = items;
        this.country = country.toUpperCase();
    }

    calculateSubtotal() {
        let subtotal = 0;

        this.items.forEach(item => {
            subtotal += item.getTotal();
        });

        return subtotal;
    }

    applyTax(subtotal) {
        let taxRate = 0;

        if ("DE" === this.country) {
            taxRate = 0.19;
        }

        if ("IT" === this.country) {
            taxRate = 0.22;
        }

        return subtotal * (1 + taxRate);
    }

    getTotal() {
        const subtotal = this.calculateSubtotal();
        const total = this.applyTax(subtotal);
        return total;
    }
}

const orderItems = [
    new OrderItem(5.49, 2),
    new OrderItem(9.99, 3)
];

orderItems.forEach((item, index) => {
    console.log(`Line Item #${index + 1} total: ${item.getTotal()}`);    
});

const order = new Order(orderItems, 'IT');
console.log(`Order total incl. ${order.country} tax: ${order.getTotal()}`);
