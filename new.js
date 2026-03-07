// const pBtn=document.getElementById("PBtn");
// const fBtn=document.getElementById("FBtn");
// const Pform=document.getElementById("Pform");
// const Fform=document.getElementById("Fform");
// pBtn.addEventListener("click",()=>{
//     Pform.classList.toggle("hidden")
//     if(!Pform.classList.contains("hidden")){
//         pBtn.textContent="hide information"
//     }
//     else{   
//         pBtn.textContent="Personal Information"
//     }
//     // Pform.classList.remove("hidden")
//     // Pform.classList.add("flex");
   
// })

// fBtn.addEventListener("click",()=>{
//     // Fform.classList.remove("hidden");
//     // Fform.classList.add("flex")
//     Fform.classList.toggle("hidden")
//     if(!Fform.classList.contains("hidden")){
//         fBtn.textContent="Hide Information"
//     }
//     else{
//         fBtn.textContent="Family Information"
//     }
// })







// // today's H.W
//  class Human{
//     // Name
//     setName(name){
//       if(isNaN(name) && name.length>=3){
//            this.name=name
//       }
//       else{
//         console.log("the name is not validated")
//       }
//     }
//     getName(){
//       return this.name;
//     }
//     // Age
//  setAge(age){
//     if(!isNaN(age)&& age>=1){
//         this.age=age;
//     }
//     else{
//         console.log("the age should be a number and greater than 1")
//     }
//  }
//  getAge(){
//     return this.age;
//  }
// //  Email
//   setEmail(email){
//     if(email.includes("@gmail.com") && isNaN(email)){
//         this.email= email;
//     }
//     else{
//         console.log("your email is not validated")
//     }
//   }
// getEmail(){
//     return this.email;
// }

//  }
// //  instanciation
// const person1=new Human();
// person1.setAge(45);
// person1.setEmail("Fatima@gmail.com  ");
// console.log(person1.getEmail());
// person1.setAge(23);
// person1.setName("Ali Reza");
// console.log(person1.getName());

// const person2=new Human();
// const person3=new Human();









//  Saturday's HomeWork
// class Animal{
//     name;
//     age;
//     weight;
//     constructor(name,age,weight){
//         this.name=name;
//         this.age=age;
//         this.weight=weight;
//     }
//     eat(){
//         console.log(`${this.name} can eat something`);

//     }
//     sound(){
//         console.log(`${this.name} can make sound`)
//     }
// }
// class Human extends Animal{
//     lastName;
//     constructor(lsName,name,age,weight){
        
//         super(Animal)
//      this.lastName=lsName;
//      this.name=name;
//      this.age=age;
//      this.weight=weight;
//     }
//     static work(){
//               console.log("Human can work")
//     }
//     think(){
//         console.log("Human can think")
//     }
// }
// const user1=new Human("Ahmad",23,60,"Ahmadi");
// user1.eat();
// const working=Human.work();
// Human.eat();
// Human.sound();










// const section= document.querySelector("section");
// section.style.cssText="border: 1px solid black; border-reduice:9px; height:300px; width:80%; margin:0 auto";
// const h1=document.createElement("h1");
//  section.append(h1);
//  h1.textContent="In The Name Of Allah";
// //  h1.style.cssText=""
// // h1.setAttribute("class","a")
// h1.classList.add("a");
// const p=document.createElement("p");
// p.innerHTML="Hello Good Morning";
// section.appendChild(p);
// p.setAttribute("class","b");




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






// Today's HomeWork
// abstraction
class Human{
  name;
  age;
  email;
  constructor(name,age,email){
    this.name=name;
    this.age=age;
    this.email=email;
  }
  getAge(){
    console.log(`${(this.name).toUpperCase()} is ${this.age} years old`)
  }
  talk(){
    console.log(`${this.name} can talk`)
  }
       
}
const person1=new Human("Ahmad", 23,"ahmad@example.com");
person1.getAge();



class Weather{
    constructor(degree){
        this.degree=degree;
    }
    celciusToFaranhite(){
        const convert=this.degree*9/5 +32;
        return convert;
    }

}


const currentWeather=  new Weather(23);
const result=currentWeather.celciusToFaranhite();



class Animal{
    name;
    age;
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    move(){
        return this.name + "can walk"
    }
}
// const Dog=new Animal("Dog",4);
// console.log(Dog.move());
// const Cat=new Animal("Cat",2)
// console.log(Cat.move());
// const person2=new Animal("John",45)
// console.log(person2.move());


class Cat extends Animal{
   isPet;
   constructor(name,age,isPet){
    super(Animal);
    this.name=name;
    this.age=age;
    this.isPet=isPet;
   }
   move(){
    return `${this.name} moves with four legs`
   }
}
