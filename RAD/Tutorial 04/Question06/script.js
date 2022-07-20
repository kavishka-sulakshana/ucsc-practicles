document.getElementById('btn').addEventListener('click',()=>{
    let root = Math.sqrt(document.getElementsByTagName('input')[0].value);
    document.getElementById('ans').textContent="Answer : "+root;
})