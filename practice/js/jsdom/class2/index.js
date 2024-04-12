// document.addEventListener("click",function(){
//     console.log('i have clicked on doc');
// });

// let content=document.querySelector('h2');
// content.addEventListener("click",function(){
//     content.style.background='blue';
// })


// const content=document.querySelector('#wrapper');
// content.addEventListener('click',function(event){
//     console.log(event);
// });



// let links=document.querySelectorAll('a');
// let thirdlink=links[2];
// thirdlink.addEventListener('click',function(event){
//     event.preventDefault();
//     console.log('maza aya');
// });


// let myDiv=document.createElement('div');
// for(let i=1;i<=100;i++){
//     let newElement=document.createElement('p');
//     newElement.textContent='this is a para'+i;

//     newElement.addEventListener('click',function(){
//         console.log('i have clicked on para'+i);
//     });
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);


// let myDiv=document.createElement('div');
// function paraStatus(event){
//     console.log('para' + event.target.textContent);
// }
// myDiv.addEventListener('click',paraStatus);

// for(let i=1;i<=100;i++){
//     let newElement=document.createElement('p');
//     newElement.textContent='this is a para'+i;
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);


// let element= document.querySelector('#wrap');
// element.addEventListener('click',function(event){
//     if (event.target.nodeName=='SPAN') {
//         console.log('span pr click kiya hai '+ event.target.textContent);        
//     }
// });

