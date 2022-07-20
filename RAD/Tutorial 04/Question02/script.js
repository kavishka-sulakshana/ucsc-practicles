let text = document.getElementById('text');
let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    if(hr>=12 && min>0)
        text.textContent = `Now the time is ${(hr-12)<10?'0'+(hr-12):hr-12}:${min<10?'0'+min:min} PM`;
    else
        text.textContent = `Now the time is ${(hr)<10?'0'+(hr):hr}:${min<10?'0'+min:min} AM`;
    button.textContent = `Remains ${24-hr} hours more...`;
}
);