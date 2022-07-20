let answer = document.getElementById('ans')
document.getElementById('btn').addEventListener('click',()=>{
    let width = document.getElementById('width').value;
    let height = document.getElementById('height').value;

    if((width!=="") && (height!==""))
        answer.innerHTML = `Area of the rectangle is ${width*height} cm<sup>2</sup>`;
    else
        answer.textContent = `Please fill data`;   
})