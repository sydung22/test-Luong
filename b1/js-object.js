const student = {
    firstName: 'Quang',
    lastName: 'Tran',
    age: 26,
    'special': '123123',
    fullName: function() {
        return this.firstName + ' ' + this.lastName
    }
}
console.log(student.special);
console.log(student['age']);
console.log(student.fullName());