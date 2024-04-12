// function sum(a,b){
//     return a+b;
// }
// console.log(sum(1,2));
// console.log(sum(1));
// console.log(sum(1,2,3,4,5));

// dynamic function of sum ------------

// function sum(){
//     let total=0;
//     for(let value of arguments)
//         total=total+value;
//     return total;
// }
// console.log(sum(2,5,6,8,10));

// rest oprator ----------------

// function sum(num,value,...args){
//     console.log(args);
// }
// sum(1,2,3,4,5,6);

// default parameter 
// function intrest(p,r=6,y=10){
//     return p* r * y / 100;
// }
// console.log(intrest(1000));

// function intrest(p,r=6,y){
//     return p* r * y / 100;
// }
// console.log(intrest(1000,undefined,8));






// let person={
//     fname:"aryan",
//     lname:"arya"
// };
// function fullname(){
//     return `${person.fname}  ${person.lname}`;
// }
// console.log(fullname());


// using getter and setter  ---------------------
// let person={
//     fname:"aryan",
//     lname:"arya",
//     get fullName(){
//         return `${person.fname}   ${person.lname}`;
//     },
//     set fullName(value){
//         let parts=value.split(' ');
//         this.fname=parts[0];
//         this.lname=parts[1];
//     }
// };



// // console.log(person.fullname);
// person.fullName='Rahul kumar';
// console.log(person.fullName);


// error handling by using try and catch -------------

// let person={
//     fname:"aryan",
//     lname:"arya",
//     get fullName(){
//         return `${person.fname}   ${person.lname}`;
//     },
//     set fullName(value){
//         if(typeof value !== String){
//             throw new Error("you have not send a string");
//         }
//         let parts=value.split(' ');
//         this.fname=parts[0];
//         this.lname=parts[1];
//     }
// };
// try{
//     person.fullName= true;
// }
// catch (e) {
//     alert(e);
// }

// console.log(person.fullName);

// reducing a array ------------------
// let arr=[1,2,3,4,5];
// let totalSum=arr.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
// console.log(totalSum);