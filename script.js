class Product {


    constructor(namee, price) {
        this.name = namee
        this.price = price
    }
}
const cart = {
    items: [],
    getItems() {
        return this.items
    },
    getTotalPrice() {
        let total = 0;
        if (this.items.length === 0) {
            return 'you have not chosen anything yet'
        }
        for (const item of this.items) {
            let price = item.price
            if (item.quantity >= 10) {
                price = price * 0.5;
            }
            total += price * item.quantity;
        }
        return total
    },
    addItem(object, quantity) {
        if (quantity === undefined) {
            quantity = 1
        }
        const newObject = {
            ...object,
            quantity: quantity
        }
        for (const item of this.items) {
            if (item.name === newObject.name) {
                return item.quantity += quantity

            }
        }
        this.items.push(newObject)
    },
    removeItem(name) {
        this.items = this.items.filter(element => element.name !== name)
    },
    updateCart() {
        this.items = [];
    },
    increase(name, quantity) {
        if (quantity === undefined) {
            quantity = 1
        }
        for (const item of this.items) {
            if (item.name === name) {
                if (item.quantity >= 1) {
                    item.quantity += quantity
                }
            }
        }
    },
    decrease(name, quantity) {
        if (quantity === undefined) {
            quantity = 1
        }
        for (const item of this.items) {
            if (item.name === name) {
                if (item.quantity > quantity) {
                    return item.quantity -= quantity
                } else {
                    this.removeItem(name)
                }
            }
        }
    }

}

const lemone = new Product('lemone', 100)
const strawberry = new Product('strawberry', 200)
