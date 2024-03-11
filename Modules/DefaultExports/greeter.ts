export default function greet(name: string): string {
  return `Hello from default export ${name}!`;
}

export function greetTwo(name: string): string {
  return `Hello from export ${name}!`;
}
