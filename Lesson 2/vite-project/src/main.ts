import "./style.css";

// let name = "John";
// A) let name: string = 'John';
// B) let name: number = 'John';
// C) let name: boolean = 'John';
// D) let name = 'John';

// let scores = [1, 2, 3];
// A) let scores: number[] = [1, 2, 3];
// B) let scores = [1, 2, 3];
// C) let scores: array = [1, 2, 3];
// D) let scores: [number] = [1, 2, 3];

// let id;
// A) let id: string | number;
// B) let id: string;
// C) let id: number;
// D) let id: any;

// function calculateDistance() {
//   return 42;
// }
// A) function calculateDistance(): number { return 42; }
// B) function calculateDistance(): void { return 42; }
// C) function calculateDistance(): any { return 42; }
// D) function calculateDistance() { return 42; }

// function logMessage(message) {
//   console.log(message);
// }
// A) function logMessage(message: string): void { console.log(message); }
// B) function logMessage(message: string): string { console.log(message); }
// C) function logMessage(message: any): void { console.log(message); }
// D) function logMessage(message: string) { console.log(message); }

// Admin', 'User', 'Gues

// a) enum UserRole {
//   Admin = "Admin"
//   User = "User"
//   Guest = "Guest"
// }

// b) enum UserRole {
//     Admin = 1,
//     User = 2,
//     Guest = 3
// }

// c) const UserRole = {
//     Admin: 0,
//     User: 1,
//     Guest: 2
// };

// d) let UserRole = ['Admin', 'User', 'Guest'];

// let name:string = 'BOB'

// const numbers = [1,2,3]

// Поясніть, будь ласка, цей приклад. Це тема Custom Types. У яких випадках доцільно
// використовувати такий опис на практиці?

// enum AnimalIds {
//   cat = 'cat',
//   dog = 'dog',
//   fish = 'fish',
// }

// type Animal = {
//   [AnimalIds.cat]: {
//     meow: () => string;
//   };
//   [AnimalIds.dog]: {
//     bark: () => string;
//   };
//   [AnimalIds.fish]: {
//     swim: () => undefined;
//   };
// };

// // type Animal = {
// //   cat: {
// //     meow: () => string;
// //   };
// //   dog: {
// //     bark: () => string;
// //   };
// //   fish: {
// //     swim: () => undefined;
// //   };
// // };

// type Cat = {
//   meow: () => string;
// };

// type Dog = {
//   bark: () => string;
// };

// type Fish = {
//   swim: () => undefined;
// };

// // Створення об'єктів типу Animal
// let cat: Cat = {
//   meow: () => "Meow! I am a cat"
// };

// // let cat: Animal[AnimalIds.cat] = {
// //   meow: () => "Meow! I am a cat",
// // };

// let dog: Dog = {
//   bark: () => 'Woof! I am a dog',
// };

// let fish: Fish = {
//   swim: () => undefined,
// };

// interface List {
//   [key:string]: number | null
// }

// type Fruits = {
//   apples: number;
//   banana: number;
//   oranges: number;
// };

// const fruits: List = {
//   apples: 10,
//   banana: 15,
//   oranges: 25,
//   pinaple: 10,
//   peach: null
// };

// const electrinic: List = {
//   phones: 20,
//   tablets: 10,
//   monitors: 23,
// };

// function getFirstElement<T>(array: T[]): T | undefined {
//   return array[0];
// }

// numberArray
// function getFirstElement<T>(array: number[]) : number {
//   return array[0];
// }

// stringArray
// function getFirstElement<T>(array: string[]) : string {
//   return array[0];
// }

// objectArray
// function getFirstElement<T>(array: { name: string }[]): { name: string } {
//   return array[0];
// }

// const numberArray = [10, 20, 30];
// const stringArray = ["hello", "world", "typescript"];
// const objectArray = [{ name: "Alice" }, { name: "Bob" }];

// console.log(getFirstElement(numberArray));
// console.log(getFirstElement(stringArray));
// console.log(getFirstElement(objectArray));

// function getProperty<ObjectType, K extends keyof ObjectType>(obj: ObjectType, key: K): ObjectType[K] {
//   return obj[key];
// }

// const person = {
//   name: "John",
//   age: 30,
//   occupation: "Engineer",
//   gender: "male"
// };

// const name = getProperty(person, "name"); // Output: "John"
// const age = getProperty(person, "age"); // Output: 30
// const gender = getProperty(person, "gender"); // undefined

// interface UserProfile {
//   username: string;
//   email: string;
//   age: number;
// }

// const originalProfile: UserProfile = {
//   username: "johndoe",
//   email: "john.doe@example.com",
//   age: 28,
// };

// function updateProfile(profile: UserProfile, updates: Partial<UserProfile>) {
//   return { ...profile, ...updates };
// }

// const updatedProfile = updateProfile(originalProfile, { age: 29 });

// interface User {
//   id: number;
//   name: string;
// }

// const user: Readonly<User> = {
//   id: 100,
//   name: "Bob",
// };

// user.id = 201;
// user.name = "John";

// Pick <T, K>

// interface Employee {
//   id: number;
//   name: string;
//   email: string;
//   department: string;
//   hireDate: Date;
// }

// const fullEmployeeInfo: Employee = {
//   id: 101,
//   name: "John Doe",
//   email: "john.doe@example.com",
//   department: "Engineering",
//   hireDate: new Date("2020-01-10"),
// };

// function displayInfo(fullEmployeeInfo: Employee): Pick<Employee, "name" | "email"> {
//   return {
//     name: fullEmployeeInfo.name,
//     email: fullEmployeeInfo.email,
//   };
// }

// // interface BasicInfo {
// //   name: string;
// //   email: string;
// // }

// // function displayInfo(fullEmployeeInfo: Employee): BasicInfo {
// //   return {
// //     name: fullEmployeeInfo.name,
// //     email: fullEmployeeInfo.email,
// //   };
// // }

// interface Employee {
//   id: number;
//   name: string;
//   email: string;
//   department: string;
//   hireDate: Date; // hide info
// }

// const fullEmployeeInfo: Employee = {
//   id: 101,
//   name: "John Doe",
//   email: "john.doe@example.com",
//   department: "Engineering",
//   hireDate: new Date("2020-01-10"),
// };

// function displayInfo(fullEmployeeInfo: Employee): Omit<Employee, "hireDate" | "name"> {
//   return {
//     name: fullEmployeeInfo.name,
//     email: fullEmployeeInfo.email,
//     department: fullEmployeeInfo.department,
//     id: fullEmployeeInfo.id,
//   };
// }

// interface List {
//   [key:string]: number | null
// }

// Record<string, number>;

// function recordTemperatures(temps: number[]): Record<string, number> {
//   let temperatureRecord: Record<string, number> = {};

//   temps.forEach((temp, index) => {
//     temperatureRecord[`day${index + 1}`] = temp;
//   });

//   return temperatureRecord;
// }

// // Example usage:
// const weeklyTemps = [22, 24, 23, 25, 24, 26, 27];
// const tempRecord = recordTemperatures(weeklyTemps);
// console.log(tempRecord);

// [{ 'day1': 22 }, { 'day2': 24 }]

// interface Employee {
//   id: number;
//   name: string;
//   email: string;
//   department: string;
//   hireDate: Date; // hide info
// }

// type EmployeeBasicInfo = Omit<Employee, "hireDate">;

interface User {
  id: number;
  name: string;
  email: string;
}

// async function fetchUser(): Promise<User> {
//   try {
//     const response = await fetch("https://api.user.com");
//     const user = await response.json();
//     return user;
//   } catch (error) {
//     console.log("fetch error");
//     throw error;
//   }
// }

// async function fetchUser<T>(url: string): Promise<T> {
//   try {
//     const response = await fetch(url);
//     const user: T = await response.json();
//     return user;
//   } catch (error) {
//     console.log("fetch error");
//     throw error;
//   }
// }


// async function fetchUser<T>(url: string): Promise<T> {
//   try {
//     const response: T = await axios.get(url);
//     return response;
//   } catch (error) {
//     console.log("fetch error");
//     throw error;
//   }
// }

// const user = {
//   id: 1,
//   name: "Bob",
//   email: "user@gmail.com",
// };
