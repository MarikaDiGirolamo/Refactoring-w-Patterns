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

    execute(command){
        command.execute();
    }
}

class PlaceOrderCommand{ 
    //creo una classe per singola responsabilità.
    constructor(orders, order){
        this.orders = orders;
        this.order= order;
    }
    execute() {
        this.orders.push(this.order);
        console.log(`Order ${this.order.id} was placed`);
    }
}

class DescribeOrderCommand{ 
    //creo una classe per singola responsabilità.
    constructor(orders, order){
        this.orders = orders;
        this.id = order.id;
    }
    execute() {
        if (!this.orders.some((order) => order.id === this.id)) {
            console.error(`Order ${id} not found!`);
            return;
        }

        let order = this.orders.filter(order => {
            return order.id === this.id;
        })[0];

        console.log(`Order ${order.id} was placed on ${order.date} by ${order.customerEmail}`);
    }
}

class CancelOrderCommand{ 
    //creo una classe per singola responsabilità.
    constructor(orders, order){
        this.orders = orders;
        this.id= order.id;
    }
    execute() {
        if (!this.orders.some((order) => order.id === this.id)) {
            console.error(`Order ${this.id} not found!`);
            return;
        }     
        
        console.log(`Order ${this.id} was canceled`);
    }
}

const order = new Order(
    1,
    '2023-09-29',
    'john@snow.com'
);

const orderManager = new OrderManager();

const placeOrderCommand = new PlaceOrderCommand(orderManager.orders, order);
const describeOrderCommand = new DescribeOrderCommand( orderManager.orders, order);
const cancelOrderCommand = new CancelOrderCommand( orderManager.orders, order);

orderManager.execute(placeOrderCommand);
orderManager.execute(describeOrderCommand);
orderManager.execute(cancelOrderCommand);


// console.log(describeOrderCommand);