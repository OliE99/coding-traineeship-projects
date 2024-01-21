const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },

    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }
    },

    get appetizers() {
        return this._courses.appetizers;
    },

    set appetizers(appetizersIn) {
        this._courses.appetizers = appetizers;
    },

    get mains() {
        return this._courses.mains;
    },

    set mains(mainsIn) {
        this._courses.mains = mainsIn;
    },

    get desserts() {
        return this._courses.desserts;
    },

    set desserts(dessertsIn) {
        this._courses.desserts = desserts;
    },

    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        };
        return this._courses[courseName].push(dish);
    },

    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },

    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name} and the total price is ${totalPrice}`;
    },
};

menu.addDishToCourse('appetizers', 'Caesar Salad', 1.25);
menu.addDishToCourse('appetizers', 'Chicken Wings', 5.25);
menu.addDishToCourse('appetizers', 'Onion Rings', 2.25);

menu.addDishToCourse('mains', 'Butter Chicken', 6.25);
menu.addDishToCourse('mains', 'Mutton Roast', 8.25);
menu.addDishToCourse('mains', 'Garlic Bread', 2.25);

menu.addDishToCourse('desserts', 'Pancakes', 2.20);
menu.addDishToCourse('desserts', 'Vanilla Icecream', 3.50);
menu.addDishToCourse('desserts', 'Chocolate Cake', 1.75);

const meal = menu.generateRandomMeal();

console.log(meal);