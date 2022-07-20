const getElmnt = (id) => document.getElementById(`${id}`);
const getVal = (id) => getElmnt(id).textContent;
let total = 0;
let display = getElmnt('display');
let lastOp = '';

// All numbers
const numClick = (id) => {
    getElmnt(id).addEventListener('click',()=>{
        if(display.textContent==0)
            display.textContent = '';
        display.textContent = `${display.textContent}${getVal(id)}`;
    })
}
numClick('num1');
numClick('num2');
numClick('num3');
numClick('num4');
numClick('num5');
numClick('num6');
numClick('num7');
numClick('num8');
numClick('num9');
numClick('dot');

// All operators
getElmnt('plus').addEventListener('click',()=>{
    if(lastOp !== '=')
        total = total + +display.textContent;
    display.textContent = '0';
    lastOp = getVal('plus');
})
getElmnt('minus').addEventListener('click',()=>{
    if(lastOp !== '=')
        total = total - +display.textContent;
    display.textContent = '0';
    lastOp = getVal('minus');
})
getElmnt('mul').addEventListener('click',()=>{
    total = (total === 0)?1:total;
    if(lastOp !== '=')
        total = total * +display.textContent;
    display.textContent = '0';
    lastOp = getVal('mul');
})
getElmnt('div').addEventListener('click',()=>{
    if(lastOp !== '=')
        total = total / +display.textContent;
    display.textContent = '0';
    lastOp = getVal('div');
})


// All clear
getElmnt('ac').addEventListener('click',()=>{
    total = 0;
    display.textContent = '0';
    lastOp = getVal('ac');
})

// Equal
getElmnt('eql').addEventListener('click',()=>{
    if(lastOp === '+'){
        total = total + +display.textContent;
    }
    else if(lastOp === '-'){
        total = total - +display.textContent;
    }
    else if(lastOp === 'x'){
        total = (total === 0)?1:total;
        total = total* +display.textContent;
    }
    else if(lastOp === '/'){
        total = total/ +display.textContent;
    }
    display.textContent = total;
    lastOp = getVal('eql')
})