export const products = [
  { id: 1, name: "Wireless Mouse", category: "electronics", price: 799, inStock: true, rating: 4.2 },
  { id: 2, name: "Mechanical Keyboard", category: "electronics", price: 3499, inStock: false, rating: 4.6 },
  { id: 3, name: "Yoga Mat", category: "fitness", price: 599, inStock: true, rating: 4.0 },
  { id: 4, name: "Running Shoes", category: "fitness", price: 2999, inStock: true, rating: 4.5 },
  { id: 5, name: "Bluetooth Speaker", category: "electronics", price: 1899, inStock: true, rating: 3.9 },
  { id: 6, name: "Desk Lamp", category: "home", price: 899, inStock: false, rating: 4.1 }
];

export const users = [
  { id: 1, name: "Vilok", roles: ["developer", "admin"], age: 24, isActive: true },
  { id: 2, name: "Anita", roles: ["developer"], age: 27, isActive: true },
  { id: 3, name: "Ravi", roles: ["admin", "manager"], age: 31, isActive: false },
  { id: 4, name: "Priya", roles: ["developer", "manager"], age: 29, isActive: true }, { id: 3, name: "Ravi", roles: ["admin", "manager"], age: 31, isActive: false }, { id: 3, name: "Ravi", roles: ["admin", "manager"], age: 31, isActive: false },

];

export const todos = [
  { id: 1, text: "Finish DevFlow bug fix", completed: false, priority: "high" },
  { id: 2, text: "Review resume", completed: true, priority: "low" },
  { id: 3, text: "Practice closures", completed: false, priority: "high" },
  { id: 4, text: "Apply to 3 jobs", completed: true, priority: "medium" }
];


export  const TABS = [
  { label: "Overview", content: "React is a UI library." },
  { label: "Install", content: "Use Vite: npm create vite@latest" },
  { label: "Docs", content: "Read the official react.dev docs." },
];
