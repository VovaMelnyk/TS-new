### Task 1 Index properties

```js
interface Dictionary {
  [key: string]: number;
}

let fruits: Dictionary = {
  apples: 10,
  bananas: 5,
  oranges: 8,
};

let electronics: Dictionary = {
  phones: 25,
  laptops: 10,
  tablets: 7,
};

let books: Dictionary = {
  fiction: 15,
  history: 20,
  fantasy: 9,
};
```

### Task #2 Simple generic

```js
function getFirstElement<T>(array: T[]): T | undefined {
  return array[0];
}

// Example usage:
const numberArray = [10, 20, 30];
const stringArray = ["hello", "world", "typescript"];
const objectArray = [{ name: "Alice" }, { name: "Bob" }];

console.log(getFirstElement(numberArray)); // Output: 10
console.log(getFirstElement(stringArray)); // Output: "hello"
console.log(getFirstElement(objectArray)); // Output: { name: "Alice"
```

```js
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// Example usage:
const person = {
    name: "John",
    age: 30,
    occupation: "Engineer"
};

const name = getProperty(person, "name"); // Output: "John"
const age = getProperty(person, "age"); // Output: 30
// const errorExample = getProperty(person, "salary"); // This line would cause a compile-time error

console.log(name); // "John"
console.log(age);  // 30
```

### Task 3 Partial in generic

```js
interface UserProfile {
  username: string;
  email: string;
  age: number;
}

function updateProfile(profile: UserProfile, updates: Partial<UserProfile>): UserProfile {
  return { ...profile, ...updates };
}

// Example usage:
const originalProfile: UserProfile = {
  username: "johndoe",
  email: "john.doe@example.com",
  age: 28,
};

const updatedProfile = updateProfile(originalProfile, { email: "new.john.doe@example.com", age: 29 });
console.log(updatedProfile);
```

### Task 4 Readonly<T>

```js
interface User {
  id: number;
  name: string;
}

function displayUser(user: Readonly<User>): void {
  console.log(`User ID: ${user.id}, Name: ${user.name}`);
  // Attempt to modify the properties (this should cause a TypeScript error)
  // user.id = 102; // Error: Cannot assign to 'id' because it is a read-only property.
  // user.name = "Alice"; // Error: Cannot assign to 'name' because it is a read-only property.
}

// Example usage:
const user: Readonly<User> = {
  id: 101,
  name: "John",
};

displayUser(user);
// Attempt to modify outside the function (should also cause a TypeScript error)
// user.name = "Changed Name"; // Error: Cannot assign to 'name' because it is a read-only property.
```

### Task 5 Pick<T, K>

```js
interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  hireDate: Date;
}

function displayEmployeeInfo(employee: Employee): Pick<Employee, "name" | "email"> {
  return {
    name: employee.name,
    email: employee.email,
  };
}

// Example usage:
const fullEmployeeInfo: Employee = {
  id: 101,
  name: "John Doe",
  email: "john.doe@example.com",
  department: "Engineering",
  hireDate: new Date("2020-01-10"),
};
console.log(displayEmployeeInfo(fullEmployeeInfo));
```

```js
interface ApiResponse {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
}

function displayPost(post: ApiResponse): Pick<ApiResponse, "title" | "content"> {
  return {
    title: post.title,
    content: post.content,
  };
}
```

### Task 6 Omit<T,K>
```js
interface User {
    id: number;
    name: string;
    email: string;
    age: number;
    password: string; // Sensitive information
}

function createContactInfo(user: Omit<User, 'password'>): Omit<User, 'password'> {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        age: user.age
    };
}

// Example usage:
const fullUserInfo: User = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30,
    password: "s3cr3t" // This should not be included in contact info
};

const contactInfo = createContactInfo(fullUserInfo);
console.log(contactInfo);
```

### Task 7 Record<K, T>

```js
function recordTemperatures(temps: number[]): Record<string, number> {
    let temperatureRecord: Record<string, number> = {};

    temps.forEach((temp, index) => {
        temperatureRecord[`day${index + 1}`] = temp;
    });

    return temperatureRecord;
}

// Example usage:
const weeklyTemps = [22, 24, 23, 25, 24, 26, 27];
const tempRecord = recordTemperatures(weeklyTemps);
console.log(tempRecord);
// Output: { day1: 22, day2: 24, day3: 23, day4: 25, day5: 24, day6: 26, day7: 27 }
```
