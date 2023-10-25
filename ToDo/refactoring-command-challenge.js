//
// Apply the Command Pattern to refactor the following code
// Nice To Have: implement undo for PlaceOrderCommand
//

class Order {
    constructor(id, date, customerEmail) {
        this.id = id;
        this.date = date;
        this.customerEmail = customerEmail;
    }
}

class OrderManager {
    constructor() {
        this.orders = [];
    }

    placeOrder(order) {
        this.orders.push(order);
    }

    describeOrder(id) {
        if (!this.orders.some((order) => order.id === id)) {
            console.error(`Order ${id} not found!`);
            return;
        }

        let order = this.orders.filter(order => {
            return order.id === id;
        })[0];

        console.log(`Order ${order.id} was placed on ${order.date} by ${order.customerEmail}`);
    }

    cancelOrder(id) {
        if (!this.orders.some((order) => order.id === id)) {
            console.error(`Order ${id} not found!`);
            return;
        }     
        
        console.log(`Order ${id} was canceled`);
    }
}

const order = new Order(
    1,
    '2023-09-29',
    'john@snow.com'
);

const orderManager = new OrderManager();

orderManager.placeOrder(order);

orderManager.describeOrder(1);

orderManager.cancelOrder(1);

orderManager.describeOrder(2);

orderManager.cancelOrder(3);