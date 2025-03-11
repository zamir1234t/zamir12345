// let age =20;

// if (age % 3==0){
//     console.log("true")
// }else{
//     console.log("false")
// }

// alert('привет')
// alert('пока')

// let number =0;

// if (number  % 2===10){
//     console.log("yes")
// }else{
//     console.log("no")
// }

// const pi =23;
// console.log(pi)

// let times = 4;

//    if (times > 3) {
//     let hello = "say Hello instead";      
//         console.log(hello);
//     }
//    console.log(hello) 


// let n = 5; 
// let result = 1;

// for (let i = 2; i <= n; i++) { 
//   result *= i;
//   console.log(`${n}! = ${result}`); 
// }



// let sum = 0;

// for (let i = 2; i <= 20; i += 2) { 
//   sum += i; 
//   console.log(sum); 
// }

  // let p = 5;
  // let party = 1;

  // for (let i = 1; i <=p; i++ ){
  //   party *=i;
  // }
  // // console.log(`${p}!  ${party}`)
  // console.log(party);


  // let sum =0;
  
  // for(let i = 2; i <=20; i+=2 ){
  //   sum+=i
  // }
  // console.log(sum)



// const array = [24,12,2,1,5];


// let number = 4;


// for (let i = 0; i <array.length; i++) {
//   if (array [i] % 10===2) { 
//     number += array[i]; 
//   }
// }
// console.log(number);


// let number =112
// let num =0

// while(number > 1){
//   number =number / 10
//   num++;
// }

// console.log(num)  



// const array =[24,12,2,1,5];

// let number = array[0];

// for(let i = 0; i < array.length; i++){
//  if(array > number){
//   number = array;
// }
// }
// console.log(array)

// alert('welcom to my project')

// let from = "20"
// let num = "hello"

// for(let key of from){
//   num = key
//   console.log(num)
// }

// let number ="30"
// let num = "30"

// for(let i=0; i <number; i++){
//   number %= num
//  num++
// }

// console.log(num)

// debugger;
// let p=2
// for (let i=0; i < p; i++ ){ 
//  p === i
// }
// console.log(p)
// let h1=document.getElementById("h1")
// h1.innerText ="hello 2009"
// h1.style.backgroundColor = "red"
// h1.style.color="blue"
// let getByTagname = document.getElementsByTagName("span")
// console.log(getByTagname)

// let h2=document.getElementById("h2")
// h2.innerHTML ="hello 555"
// h2.style.color ="red"


// const number =10
//  if(number === 0){
//   console.log(true)
//  }else if(number > 0){
//   console.log(true)
//  }else{
//   console.log(false)
//  }


// let lg=window.document.getElementsByClassName("wrapper")

// let pg=document.getElementById("pg")
// pg.innerText ="hello 209"

// let mat=[
//   [1,2,3],
//   [4,5],
// ];

// mat.push([7,8,9]);
// console.log(mat)
// let click = 0;
// debugger;
// const tap = document.getElementById("button");
// const loc = document.getElementById("counter");

// let loci=document.getElementsByClassName("loci")
//  for (let i = 0; i < loci.length; i++) {
//   loci[i].innerHTML="click me"
// }



// tap.addEventListener("click", () => {
//   if (click < 50) {
//     click++;
//     loc.innerHTML = click; 
//   }

//   if (click >= 50) {
//     tap.disabled = true; 
//     alert("остоновитесь?");
//   }
// });


// let number=  [3,6,9,12,15]

// let p =number.map(num => num *2)

// let a =p.filter(number => number > 10)

// console.log(...a)


// let uzer = [
//   {id: 1, name: "дантист"},
//   {id: 2, name: "антон"},
//   {id: 3, name: "алина"}
// ];

// uzer.push({id:4, name: "кирил"});
// console.log(uzer)


// let uzerName =uzer.find(uzer => uzer.id ===2)


// console.log(uzerName)


// let  remove = uzer.filter(uzer=> uzer.id !==3)
// console.log(...remove)




// const people = [
//   { name: "Alice", age: 25, city: "New York" },
//   { name: "Bob", age: 17, city: "Los Angeles" },
//   { name: "Charlie", age: 30, city: "Chicago" },
//   { name: "Daisy", age: 16, city: "Houston" }
// ];

// people.sort((g,c) => g.age - c.age)
// console.log(people)



const people = [
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 17, city: "Los Angeles" },
  { name: "Charlie", age: 30, city: "Chicago" },
  { name: "Daisy", age: 16, city: "Houston" }
];

// people.forEach(people => {
//   people.age = people.age >= 18
//   people.age1 = people.age1 >= 18
//   people.age2 =people.age2 >= 18
//   people.age3 = people.age3 >= 18 
// });
// console.log(people)

  
let sum = 0;
for(let i=0; i< people.length; i++){
  sum +=people[i].age
}

const num = sum + people.length

console.log(num)