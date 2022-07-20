const getElmt = (id) => document.getElementById(`${id}`);

let check1 = getElmt('chk1');
let check2 = getElmt('chk2');
let check3 = getElmt('chk3');
let check4 = getElmt('chk4');
let label1 = getElmt('lbl1');
let label2 = getElmt('lbl2');
let label3 = getElmt('lbl3');
let label4 = getElmt('lbl4');

function disableChks(){
    check1.disabled = true;
    check2.disabled = true;
    check3.disabled = true;
    check4.disabled = true;
}
function activeChks(){
    check1.disabled = false;
    check2.disabled = false;
    check3.disabled = false;
    check4.disabled = false;
}
function toggleLbls(){
    label1.classList.add('disabled');
    label2.classList.add('disabled');
    label3.classList.add('disabled');
    label4.classList.add('disabled');
}
function activeLbls(){
    label1.classList.remove('disabled');
    label2.classList.remove('disabled');
    label3.classList.remove('disabled');
    label4.classList.remove('disabled');
}

const checkEvent = (check, label) => {
    check.addEventListener('change',()=>{
        if (check.checked){
            disableChks();
            toggleLbls();
            check.disabled = false;
            label.classList.remove('disabled');
            
        }
        else{
            activeChks();
            activeLbls();
        } 
    })
}

checkEvent(check1,label1);
checkEvent(check2,label2);
checkEvent(check3,label3);
checkEvent(check4,label4);