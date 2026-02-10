// const number=[1,2,3,4,5];
// number.push(6,7);
// number.pop();

// const num=[70,80,90];
// num.filter(0,23);
// const pushed=num.unpush("9090");
// const studentList={
//     name: "Ali",
//     lastName: "Alizada",
//     age: 24,
//     greet: function(){
//         console.log(`Your name is ${this.name} your score is ${this.score} and your age is ${this.age}`)
//     }
// }
// studentList.name="Ali Reza";
// studentList["score"]=90;
// delete studentList.lastName;

const computeInfo={
    name: "Dell",
    model: "Latedude",
    monitor: "HD 120098",
    RAM: "120GB",
    hardDisc: "1024GB"
}
for(key in computeInfo){
    console.log(computeInfo[key])
}

const result = Object.keys(computeInfo);
const result2 = Object.values(computeInfo);
const result3 = Object.entries(computeInfo);
const result4 = Object.fromEntries(result3);

