let students = ['Dung', 'Lan', 'Duong', 'Thien'];
let number = [1,2,3,4,5,6,7,8];
let studentCustom = [{
    name:'Ngoc',
    age: 18,
    favorite: 'read book'
},
{
    name:'Lan',
    age: 20,
    favorite: 'ride bike'
}
];

console.log(students[0], students[1]);
console.log(studentCustom[0], studentCustom[1]);

students[0] = 'Vy';
console.log(students[0]);
console.log(students);

console.log(students.length);
console.log(number.length);
console.log(studentCustom.length);

console.log(students.toString());

console.log(students.join(", "));

console.log(students.pop(), students);

console.log(students.push('Thang'), students);

console.log(students.shift(), students);

console.log(students.unshift('Giang'), students);

// console.log(delete students[2], students);

console.log(students.splice(2, 0, 'Dung'), students);

console.log(students.splice(2,1), students);



const newArray = students.concat(number, studentCustom)
console.log('-----------');
console.log(students.concat(number, studentCustom));


console.log(students.sort());
console.log([2,3,1,4,5,8,7,6,100,200].sort());
const soft = [2,3,1,4,5,8,7,6,100,200].sort(function(a,b){
    return a - b;

})
console.log(soft);


console.log(students.reverse());