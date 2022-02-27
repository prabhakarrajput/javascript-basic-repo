function Student(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
    // this.getFullName = function(){
    //     return this.firstName + ' ' + this.lastName 
    // }
}

Student.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastName 
}

Student.prototype.city = "Boston"

var student1 = new Student('Scott', 'Desatnick')
console.log(student1)
console.log(student1.getFullName())

