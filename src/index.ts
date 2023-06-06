interface User {
  id: number;
  name: string;
  genre: "Masculino" | "Feminino" | "M" | "F";
  age: number;
};

const users: User[] = [
  {
    id: 1,
    name: "Fernando de Barros",
    genre: "Masculino",
    age: 18,
  },
  {
    id: 2,
    name: "Paulo",
    genre: "Masculino",
    age: 20,
  },
  {
    id: 3,
    name: "Gabriel",
    genre: "Masculino",
    age: 32,
  },
  {
    id: 4,
    name: "Fernanda",
    genre: "Feminino",
    age: 19,
  },
  {
    id: 5,
    name: "Taiane",
    genre: "Feminino",
    age: 45,
  }
];

users.forEach(user => console.log(user));