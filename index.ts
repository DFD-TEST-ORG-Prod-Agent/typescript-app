interface User {
    id: number;
    name: string;
    email: string;
}

function greet(name: string): string {
    return `Hello, ${name}!`;
}

function calculateSum(a: number, b: number): number {
    return a + b;
}

function createUser(id: number, name: string, email: string): User {
    return { id, name, email };
}

const user = createUser(1, "John", "john@example.com");
console.log(greet(user.name));
console.log(`Sum: ${calculateSum(10, 20)}`);
