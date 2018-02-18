import Student from "./Student";

const Лёха = new Student(
    { name: 'Alexey', age: 36 },
    { marks: [5, 4, 5, 3, 3, 2] }
);
const Макс = new Student(
    { name: 'Max', age: 22 },
    { marks: [5, 5, 5, 5, 4, 5] }
);

console.log(`Лёха.averageMark: ${Лёха.averageMark}`);
console.log(`Макс.averageMark: ${Макс.averageMark}`);
console.log(`Макс.birthday: ${Макс.birthday}`);
