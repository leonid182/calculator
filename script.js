
let del = document.getElementById('del');

let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');

let first = document.getElementById('first');
let second = document.getElementById('second');
let third = document.getElementById('third');



plus.addEventListener('click', ()=>{
   third.value = parseInt(second.value)+parseInt(first.value);
   
})
minus.addEventListener('click', ()=>{
    third.value = parseInt(first.value)-parseInt(second.value);
})
multiply.addEventListener('click', ()=>{
    third.value = parseInt(first.value)*parseInt(second.value);
})
divide.addEventListener('click', ()=>{
    
    third.value = parseInt(first.value)/parseInt(second.value);

})
del.addEventListener('click', ()=>{
    first.value = '';
    second.value = '';
    third.value = '';
   
})
















