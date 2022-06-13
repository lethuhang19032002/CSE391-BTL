const btnRate1 = document.querySelector('.btn_rate_1');
const btnRate2 = document.querySelector('.btn_rate_2');
const upDownPer1 = document.querySelector('.percentage_1');
const upDownPer2 = document.querySelector('.percentage_2');
const value1=document.querySelector('.value_1');
const value2=document.querySelector('.value_2');
let sum=10;
btnRate1.addEventListener('click', () =>{
    upDownPer1.value =parseInt(upDownPer1.value) + 1;
    sum=sum+parseInt(upDownPer1.value);
    value1.innerHTML=parseInt(upDownPer1.value);

})

btnRate2.addEventListener('click', () =>{
    upDownPer2.value =parseInt(upDownPer2.value) + 1;
    sum=sum+parseInt(upDownPer2.value).value;
    value2.innerHTML=parseInt(upDownPer2.value)*100/sum;
})