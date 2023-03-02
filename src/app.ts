// const pizzas = [{ name: "Pepperoni", toppings: ["pepperoni"] }];

// const mappedPizzas = pizzas.map((pizza) => pizza.name.toUpperCase());

// console.log(mappedPizzas);

// const pizza = {
//   name: "Blazing Infero",
//   getName: function () {
//     console.log(this.name)
//   }
// };

// console.log(pizza.getName());


// function sumAll(...arr) {
//   return arr.reduce((prev, next) => prev + next)
// };

// const sum = sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

// console.log(sum)


// Implicit v Explicit

// let implicitCoupon = 'pizza25';
// let explicitCoupon: string;
// explicitCoupon = 'pizza25';

// let selectedTopping: string = 'pepperoni';

// function selectTopping(topping: string) {
//   selectedTopping = topping;
// }

// selectTopping('bacon');

// console.log(selectedTopping);


// Never type
// function orderError(error: string) {
//   throw new Error(error);
//   // never going to return a value
// }

// orderError('Something went wrong');


// Null, Undefined, Strict Null
// let coupon: string | null = 'pizza25';

// function removeCoupon(): void {
//   coupon = null;
// }

// console.log(coupon);

// removeCoupon();

// console.log(coupon);


// Union & Literal Types
// let pizzaSize: string = 'small';

// function selectSize(size: 'small' | 'medium' | 'large'): void {
//   pizzaSize = size;
// }
// // Typescript picks up huge is not defined
// selectSize('huge');

// console.log(`Pizza size: ${pizzaSize}`)

// Function Types
// // Define function with args 
// let sumOrder: (price: number, quantity: number) => number;
// // Hover over sumOrder - will show defined function types from above
// sumOrder = (x, y) => x * y;

// const sum = sumOrder(25, 2);

// console.log(`Total sum: ${sum}`);


// Functions & Optional Arguments
// // Add ? to quantity as it may not be definite
// let sumOrder: (price: number, quantity?: number) => number;

// sumOrder = (x, y) => {
//   if (y) {
//   return x * y;
//   }
//   return x;
// }

// const sum = sumOrder(25);

// console.log(`Total sum: ${sum}`);


// Typed Functions & Default
// let sumOrder: (price: number, quantity?: number) => number;
// // Assign y = 1 to use if no y value is provided
// sumOrder = (x, y = 1) => x * y;

// const sum = sumOrder(25, 5);

// console.log(`Total sum: ${sum}`);



// Object Types
// let pizza: { name: string, price: number, getName(): string } =
//   {
//   name: 'Plain Old Pepperoni',
//   price: 20,
//   getName() {
//     return pizza.name;
//   }
// };

// console.log(pizza.getName());


// Array Types and Generics
// let sizes: number[]
// sizes = [1, 2, 3];
// // <string> is a generic type
// let toppings: Array<string>;
// toppings = ['pepperoni', 'tomato', 'cheese']


// Tuple Types for Arrays
// let pizza: [string, number, boolean];
// // Must be assigned in this order, true at place 0 will cause error
// pizza = ['Pepperoni', 20, true];


// Type Aliases
// type Size = 'small' | 'medium' | 'large';
// type Callback = (size: Size) => void;

// let pizzaSize: Size = 'small';

// const selectSize: Callback = (x) => {
//   pizzaSize = x
// }

// selectSize('medium');


// Type Assertions
// type Pizza = { name: string, toppings: number };

// const pizza: Pizza = { name: 'Blazing Inferno', toppings: 5 }

// const serialized = JSON.stringify(pizza);

// // adding type to end of JSON will allow properties to be acccessed as it is a ref
// function getNameFromJSON(obj: string) {
//   return (JSON.parse(obj) as Pizza).name;
// }

// getNameFromJSON(serialized)


// Creating Interfaces
// interface allows you to define structure of particular object
// interface Pizza {
//   name: string,
//   sizes: string[]
// };
// // You can use an interface with another to interact together
// interface Pizzas {
//   data: Pizza[]
// }

// let pizza: Pizza;

// function createPizza(name: string, sizes: string[]): Pizza {
//   return {
//     name,
//     sizes,
//   };
// }

// pizza = createPizza('Pepperoni', ['small', 'medium']);


// Interfacets with Function ty...
// interface Pizza {
//   name: string,
//   sizes: string[]
//   // interface uses colon to denote return type
//   getAvailableSizes(): void;
// };
// // type can use function to denote return type
// type getAvailableSizes = () => void;

// let pizza: Pizza;

// function createPizza(name: string, sizes: string[]) {
//   return {
//     name,
//     sizes,
//     getAvailableSizes() {
//       return this.sizes;
//     }
//     // implied at end of function
//   } as Pizza;
// }

// pizza = createPizza('Pepperoni', ['small', 'medium']);



// Extending Interfaces
// interface Sizes {
//   sizes: string[];
// }

// extend Sizes to gain access to Sizes
// interface Pizza extends Sizes {
//   name: string,
//   getAvailableSizes(): void;
// };

// type getAvailableSizes = () => void;

// let pizza: Pizza;

// function createPizza(name: string, sizes: string[]) {
//   return {
//     name,
//     sizes,
//     getAvailableSizes() {
//       return this.sizes;
//     }
//   } as Pizza;
// }

// pizza = createPizza('Pepperoni', ['small', 'medium']);



// Interfaces and Optional Pro...
// interface Sizes {
//   sizes: string[];
// }

// interface Pizza extends Sizes {
//   name: string,
//   // ? denotes optional property
//   toppings?: number;
//   getAvailableSizes(): void;
//   // Allows you to treat our data structures as indexes
//   [key: number]: string;
// };

// type getAvailableSizes = () => void;

// let pizza: Pizza;

// function createPizza(name: string, sizes: string[]): Pizza {
//   return {
//     name,
//     sizes,
//     getAvailableSizes() {
//       return this.sizes;
//     }
//   } as Pizza;
// }

// pizza = createPizza('Pepperoni', ['small', 'medium']);
// pizza[1] = 'xyz';
// pizza.toppings = 1;


// Understanding Classes and...

// class and constructor do exactly the same thing as Pizza below
class Pizza2 {
  name: string;
  toppings: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addTopping(topping: string) {
    this.toppings.push(topping);
  }
}

// class and constrctor above do exactly the same as the code below
function Pizza(name: string) {
  this.name = name;
  this.toppings = [];
}

Pizza.prototype.addTopping = function addTopping (topping: string) {
  this.toppings.push(topping);
}

const pizza = new Pizza2('Pepperoni');

pizza.addTopping('pepperoni');

console.log(pizza);

