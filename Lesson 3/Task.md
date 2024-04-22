``` tsx 
async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
}

async function getPosts() {
  try {
    const posts: Post[] = await fetchData<Post[]>('https://api.example.com/posts');
    console.log('Fetched posts:', posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}


```

``` tsx 
// Define an interface for the user data
interface User {
  id: number;
  name: string;
  email: string;
}


async function fetchUsers(): Promise<User[]> {
  try {
    const response = await fetch('https://api.example.com/users');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const users: User[] = await response.json();
    return users;
  } catch (error) {
    // Error handling
    console.error("Failed to fetch users:", error);
    throw error; // Rethrowing the error after logging it
  }
}

``` 