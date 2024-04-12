// const t1 = performance.now();
// for(let i=1;i<=100;i++){
//     let newElement=document.createElement('p');
//     newElement.textContent='this is a para '+ i;

//     document.body.appendChild(newElement);
// }
// const t2 = performance.now();
// console.log((t2-t1)+' ms');


// ? after optimizing----------------- 


// const t3 = performance.now();
// let mydiv=document.createElement('div');

// for(let i=1;i<=100;i++){
//     let element=document.createElement('p');
//     element.textContent='this is a para '+ i;

//     mydiv.appendChild(element);
// }
// document.body.appendChild(mydiv);
// const t4 = performance.now();
// console.log((t4-t3)+' ms');


//? using fragment------------------

// let t1=performance.now();
// let fragment =document.createDocumentFragment();
// for(let i=1;i<=100;i++){
//     let newElement=document.createElement('p');
//     newElement.textContent='this is para' +i;
//     fragment.appendChild(newElement);
// }
// document.body.appendChild(fragment);
// let t2=performance.now();
// console.log((t2-t1)+' ms'); // *1 reflow and 1 repaint

// ? Stringle threading----------------

// function addPara(){
//     let para=document.createElement('p');
//     para.textContent='Js is single';
//     document.body.appendChild(para);
// }

// function appendNewMessage(){
//     let para=document.createElement('p');
//     para.textContent='new line';
//     document.body.appendChild(para);
// }

// addPara();
// appendNewMessage();



//? setTimeout(function(){
//?     console.log('hi');
//? },5000);

