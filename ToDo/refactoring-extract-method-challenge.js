//
// Apply the Extract Method technique to refactor the following code
//

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

    getTotal() {
        let total = 0;

        this.items.forEach(item => {
            total += item.getTotal();
        });

        if ("DE" === this.country) {
            total += total * 0.19;
        }

        if ("IT" === this.country) {
            total += total * 0.22;
        }

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