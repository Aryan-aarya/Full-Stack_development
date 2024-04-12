//? promise---------

// let newPromise=new Promise(function (resolve,reject){
//     setTimeout(function () {
//         console.log('this is a promise');
//     },4000);
//     //* resolve(1);
//     //* reject(new Error('Error'))
// });
// console.log('pahela');

//* newPromise.then((value) => {console.log(value)});

//* newPromise.catch((error) => {console.log('recived an error')});


// let waada=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log('waada no 1');
//     },2000);
//     resolve(true);
// })
// let output=waada.then(()=>{
//     let waada2=new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log('waada no 2');
//         },3000);
//         resolve('waada 2 resolved');
//     })
//     return waada2;
// })
// output.then((value)=>console.log(value));



// async function utility(){
//     let content=await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let output=await content.json();
//     console.log(output);
// }
// utility();

