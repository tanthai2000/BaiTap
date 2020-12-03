let salary=document.querySelector('#salary');
document.querySelector('.bamnut').addEventListener('click',function(event){
    event.preventDefault();
    let att=document.querySelectorAll('.jars');
    if(!isNaN(salary.value)){
        att[0].innerHTML=(Math.floor(parseFloat(salary.value)*0.55)).toString();
        att[1].innerHTML=(Math.floor(parseFloat(salary.value)*0.1)).toString();
        att[2].innerHTML=(Math.floor(parseFloat(salary.value)*0.05)).toString();
        att[3].innerHTML=(Math.floor(parseFloat(salary.value)*0.1)).toString();
        att[4].innerHTML=(Math.floor(parseFloat(salary.value)*0.1)).toString();
        att[5].innerHTML=(Math.floor(parseFloat(salary.value)*0.1)).toString();
    }
    
});