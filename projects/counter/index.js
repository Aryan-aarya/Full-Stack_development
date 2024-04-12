let countValue=document.getElementById('count');

function increment(){
    let value=parseInt(countValue.innerText);
    value=value+1;
    countValue.innerText=value;
    
}
function decrement(){
    let value=parseInt(countValue.innerText);
    if (value!=0) {
        value=value-1;  
    } 
    countValue.innerText=value;

}
function reset(){
    countValue.innerText=0;
}