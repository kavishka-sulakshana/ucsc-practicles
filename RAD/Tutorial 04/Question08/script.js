let inp = document.getElementById('number');

inp.addEventListener('mouseout',()=>{
    let profit = (+inp.value)*20/100;
    document.getElementById('profit').textContent = profit;
    document.getElementById('total').textContent = `${inp.value}+${profit}=${(+inp.value)+profit}`;

})