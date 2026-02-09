// const number=[1,2,3,4,5];
// number.push(6,7);
// number.pop();

// const num=[70,80,90];
// num.filter(0,23);
// const pushed=num.unpush("9090");
const studentList={
    name: "Ali",
    lastName: "Alizada",
    age: 24,
    greet: function(){
        console.log(`Your name is ${this.name} your score is ${this.score} and your age is ${this.age}`)
    }
}
studentList.name="Ali Reza";
studentList["score"]=90;
delete studentList.lastName;