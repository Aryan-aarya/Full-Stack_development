console.log("chaliye suru kartehai");

// object ----------------

// let ractangle={
//     length:1,
//     breath:3,

//     // methord (function defined in a obj)
//     draw: function(){
//         console.log("draw");
//     }
// }; 




// factory function ----------------

// function creatingRactangle(l,b){
//     return ractangle={
//         length:l,
//         breath:b,
    
//         draw: function(){
//             console.log("draw");
//         }
//     };
// }

// function call ----------
// let ractangleobj1=creatingRactangle(2,3);






// costructure function -----------------
// function Ractangle(){
//     this.l=1;
//     this.b=2;
//     this.draw=function(){
//         console.log("drawing");
//     }
// }

// object creation using constructure ----------
// let ractangleobj=new Ractangle();

// dynamically add and delete values------------- 

// ractangleobj.color="yellow";
// console.log(ractangleobj);
// delete ractangleobj.color;
// console.log(ractangleobj);




// function----------------

// let Ractangle1=new Function(
// `this.l=5;
// this.b=8;
// this.draw=function(){
//     console.log("drawing");
// }`);

// object creation using Ractangle1 
// let ract=new Ractangle1();
// console.log(ract);




// primitive-----
// let a=10;
// let b=a;
// a++;
// console.log(a);
// console.log(b);

// reference -------
// let a={value: 10};
// let b = a;
// a.value++;
// console.log(a.value);
// console.log(b.value);





// pass by value ------------
// let a=10;
// function inc(a){
//     a++;
// }
// inc(a);
// console.log(a);





// let ractangle={
//     length:2,
//     breath:4
// };

// for-in loop 

// for(let key in ractangle){
//     // keys are reflected to key variable 
//     // values are reflected to ractangle[key] 
//     console.log(key,ractangle[key]);
// }


// for-of loop 
// for(let key of Object.entries(ractangle)){
//     console.log(key);
// }


// if else statement --------------

// if("length" in ractangle){
//     console.log("present");
// }
// else{
//     console.log("Absent");
// }



// object clone--------------

// let src={
//     a:10,
//     b:20,
//     c:30
// };

// by itration ---

// let dest={};
// for(let key in src){
//     dest[key]=src[key];
// }

// console.log(dest);
// src.a++;
// console.log(dest);

// by Assine ---


// let src2={value:25};
// let dest=Object.assign({},src,src2);
// console.log(dest);


// by spread ---
// let dest={...src};
// console.log(dest);