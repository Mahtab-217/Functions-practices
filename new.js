const section= document.querySelector("section");
section.style.cssText="border: 1px solid black; border-rediuce:8px; height:300px; width:90%; margin:0 auto"
const h1=document.createElement("h1");
 section.append(h1);
 h1.textContent="In the name of allah";
h1.setAttribute("class","a")

// const pList=document.querySelector("div > p");
// const btn=document.querySelector("button");
// const image=document.querySelector("img");
// function changer(){
// image.setAttribute("src","https://plus.unsplash.com/premium_photo-1676166013233-8c398ea1f50c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJlYXV0aWZ1bHxlbnwwfHwwfHx8MA%3D%3D")
// }
// btn.addEventListener("click",changer);

// // for(let p of pList){
// //     p.classList.add("b")
// // }
// for(let i= 0; i< pList.length; i++){
//     if(i%2!==0){    
//         pList[i].classList.add("b");
//     }
// }


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

// const computeInfo={
//     name: "Dell",
//     model: "Latedude",
//     monitor: "HD 120098",
//     RAM: "120GB",
//     hardDisc: "1024GB"
// }
// for(key in computeInfo){
//     console.log(computeInfo[key])
// }

// const result = Object.keys(computeInfo);
// const result2 = Object.values(computeInfo);
// const result3 = Object.entries(computeInfo);
// const result4 = Object.fromEntries(result3);

// const personOne={
//     name: "Fatima",
//     lastName: "Alizada",

// }
// const personOneExtraInfo={
//     dob: "12/12/1212",
//     score: "90"
// } 
//  personOneFamilyInfo={
//     fName: "Muhammad Reza",
//     familyName: "Qurbani"
//  }
// Object.assign(personOne,personOneExtraInfo,personOneFamilyInfo);


//  const newPerson=Object.create(null,{
//     name: {
//         value: "Ali",
//     writable: true,
//     enumerable: true,
//     },
//     lastName: {
//         value: "Ahmadi",
//         writable: true,
//         enumerable: false

//     },

//  });

//  const personInfo={
// name: "Ahmad",
// lastName: "Alizada",
// age: 23,
// score: 100

//  }
//  const result=Object.freeze(personInfo);
//  personInfo.fatherName="Nadir Ali";
//  const result1=Object.isFrozen(personInfo);

//  if(!Object.isFrozen(personInfo)){
//     personInfo.name="Qadir"
//  }
// else{
//     console.log("The variable is frozed")
// }

// const computeInfo={
//     name: "Dell",
//     model: "Latedude",
//     monitor: "HD 120098",
//     RAM: "120GB",
//     hardDisc: "1024GB"
// }
// Object.seal(computeInfo)
// computeInfo.name="Apple",
// computeInfo.color="Black"

// if(Object.isSealed(computeInfo)){
//     computeInfo.monitor="Not HD"
// }
// else{
//     console.log("this field is sealed");
// }
