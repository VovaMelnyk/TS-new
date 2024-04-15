### Task 1 Basic Types in TypeScript

Create a TypeScript function named formatOrder that takes an order object as an argument. The order object should have the following properties: orderId (number), customerName (string), and isDelivered (boolean). The function should return a string summarizing the order.

```
type Order = {
    orderId: number;
    customerName: string;
    isDelivered: boolean;
};

function formatOrder(order: Order): string {
    return `Order ${order.orderId}: ${order.customerName} - ${order.isDelivered ? 'Delivered' : 'Pending'}`;
}

// Example usage:
const order1 = {
    orderId: 101,
    customerName: "John Doe",
    isDelivered: false
};

console.log(formatOrder(order1));  // Output: "Order 101: John Doe - Pending"
```

### Task 2 Object Typisation in TypeScript

```
Create a TypeScript function named displayUserProfile that takes a user profile object as an argument. The user profile object should have the following properties: username (string), age (number), and isActive (boolean). The function should return a string summarizing the user's profile details.

type UserProfile = {
    username: string;
    age: number;
    isActive: boolean;
};

function displayUserProfile(profile: UserProfile): string {
    return `${profile.username} is ${profile.age} years old and is currently ${profile.isActive ? 'active' : 'inactive'}.`;
}

// Example usage:
const userProfile = {
    username: "alice123",
    age: 28,
    isActive: true
};

console.log(displayUserProfile(userProfile));  // Output: "alice123 is 28 years old and is currently active."
```

### Task 3 Array Typisation in TypeScript

Write a TypeScript function named calculateTotal that takes an array of numbers and returns their sum. This function should strictly accept only an array of numbers.

```
function calculateTotal(numbers: number[]): number {
    return numbers.reduce((acc, current) => acc + current, 0);
}

// Example usage:
const numbersArray = [10, 20, 30, 40];
console.log(calculateTotal(numbersArray));  // Output: 100
```

### Task 4 Using the any Type in TypeScript

Create a TypeScript function named logDetails that takes a single parameter. The function should accept any type of value and simply print this value along with its type to the console. Demonstrate how the function can be used with different types of inputs.

```
function logDetails(value: any): void {
    console.log(`Value: ${value}, Type of value: ${typeof value}`);
}

// Example usage:
logDetails("Hello, TypeScript!");  // Output: Value: Hello, TypeScript!, Type of value: string
logDetails(42);                    // Output: Value: 42, Type of value: number
logDetails(true);                  // Output: Value: true, Type of value: boolean
```

### Task 5 Using the unknown Type in TypeScript

Write a TypeScript function named safelyParseJson that attempts to parse a JSON string and return the result. The function should use the unknown type to handle the parsed data safely, verifying the type of the parsed object before returning it. If the object is not of the expected type, the function should return null.

```
function safelyParseJson(jsonString: string): unknown {
    try {
        const result: unknown = JSON.parse(jsonString);
        if (typeof result === "object" && result !== null) {
            return result;  // Type is verified as an object (non-null)
        }
    } catch (error) {
        console.error("Failed to parse JSON:", error);
    }
    return null;  // Return null if parsing fails or type is incorrect
}

// Example usage:
const correctJson = '{"name":"John", "age":30}';
console.log(safelyParseJson(correctJson));  // Output: { name: 'John', age: 30 }

const incorrectJson = "this is not a json";
console.log(safelyParseJson(incorrectJson));  // Output: null
```

### Task 6 Understanding Enums in TypeScript
Create a TypeScript enum to represent various vehicle types such as cars, trucks, and motorcycles. Then, write a function named getVehicleType that takes an enum member as an argument and returns a string describing the vehicle type.

```
enum VehicleType {
    Car = "Car",
    Truck = "Truck",
    Motorcycle = "Motorcycle"
}

function getVehicleType(vehicle: VehicleType): string {
    return `The vehicle type is: ${vehicle}.`;
}

// Example usage:
console.log(getVehicleType(VehicleType.Car));        // Output: "The vehicle type is: Car."
console.log(getVehicleType(VehicleType.Motorcycle)); // Output: "The vehicle type is: Motorcycle."
```
### Task 7 Exploring Union Types in TypeScript

Write a TypeScript function named formatInput that accepts a union type parameter (string | number). The function should return a formatted string. If the input is a number, it should format it as a fixed decimal point number; if it's a string, it should return it in uppercase.

```
function formatInput(input: string | number): string {
    if (typeof input === 'number') {
        return input.toFixed(2); // Formats the number to two decimal places
    } else {
        return input.toUpperCase(); // Converts the string to uppercase
    }
}

// Example usage:
console.log(formatInput("hello")); // Output: "HELLO"
console.log(formatInput(123.456)); // Output: "123.46"
```
### Task 8: Literal Types in TypeScript

Define a function configureServer that takes a parameter environment which can only be one of the following literal strings: 'development', 'staging', 'production'. The function should print a message according to the environment.
```
function configureServer(environment: 'development' | 'staging' | 'production'): void {
    console.log(`Configuring server for the ${environment} environment.`);
}

// Example usage:
configureServer('production');  // Output: "Configuring server for the production environment."
```

### Task 9: Return Types in TypeScript

Write a TypeScript function getUserId that takes a username (string) and returns the user's ID as a number. Explicitly annotate the function’s return type.

```
function getUserId(username: string): number {
    // Dummy implementation: return the length of the username as the ID
    return username.length;
}

// Example usage:
console.log(getUserId("alice"));  // Output: 5

```

### Task 10 Void Types in TypeScript

Create a function logMessage that takes a string message and logs it to the console. Ensure that the function explicitly has a void return type, indicating it does not return anything.

```
function logMessage(message: string): void {
    console.log(message);
}

// Example usage:
logMessage("Hello, TypeScript!");  // Output: "Hello, TypeScript!"

```

### Task 11 Never Type in TypeScript

Write a function errorHandler that takes a message string and throws an error with that message. Use the never type to indicate that this function does not successfully complete its execution.

```
function errorHandler(message: string): never {
    throw new Error(message);
}

// Example usage:
errorHandler("Critical error occurred!");  // Throws an Error with the provided message

```

### Task 12 Optional Parameters in an Interface

Create a TypeScript interface named Product that represents details of a product. The interface should have the following properties: id (number), name (string), and price (number). Additionally, include an optional property description (string). Write a function displayProduct that takes a Product object and prints information about the product. Demonstrate this function with a product object that does not include the optional description.

```
interface Product {
    id: number;
    name: string;
    price: number;
    description?: string; // Optional property
}

function displayProduct(product: Product): void {
    console.log(`Product ID: ${product.id}`);
    console.log(`Name: ${product.name}`);
    console.log(`Price: $${product.price.toFixed(2)}`);
    if (product.description) {
        console.log(`Description: ${product.description}`);
    } else {
        console.log("No description available.");
    }
}

// Example usage:
const apple = { id: 1, name: "Apple", price: 0.75 };
displayProduct(apple);

```

### Task 13 Method in an Interface

Define a TypeScript interface called Calculator that includes a method add that takes two parameters, both numbers, and returns a number. Implement a class SimpleCalculator that implements this interface.

```
interface Calculator {
    add(x: number, y: number): number;
}

class SimpleCalculator implements Calculator {
    add(x: number, y: number): number {
        return x + y;
    }
}

// Example usage:
const myCalculator = new SimpleCalculator();
console.log(myCalculator.add(5, 3));  // Output: 8

```