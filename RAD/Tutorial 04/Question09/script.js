document.getElementsByTagName('button')[0].addEventListener('click', ()=>{
    let subject = document.getElementsByTagName('input')[0].value;
    let Marks = document.getElementsByTagName('input')[1].value;
    if(+Marks >= 50 )
        document.getElementsByTagName('label')[0].innerHTML = `Congratulations ,You have passed <b>${subject}</b>`;
    else
        document.getElementsByTagName('label')[0].innerHTML = `Sorry , You have to work hard for <b>${subject}</b> subject.`;
});