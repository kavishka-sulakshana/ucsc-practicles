let textName = document.getElementById('txt1');
let textTown = document.getElementById('txt2');

document.getElementById('btn1').addEventListener('click',function(){
    let fullTxt = textName.value+" "+textTown.value; 
    console.log(fullTxt)
    alert(fullTxt);
})