let textName = document.getElementById('name');
let bday = document.getElementById('bday');

document.getElementById('btn').addEventListener('click',()=>{
        const d = bday.value.split("-");

        const date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDay();
        let age;

        if(year>=d[2]){
            if(month>=d[1]){
                if(day>d[0])
                    age = "age : " + (year - d[2]); 
                else
                    age = "age : "+(year - d[2] - 1); 
            }
            else{
                age = "age : "+(year - d[2] - 1);
            }
        }else{
            age = "Invalid age";
        }

        alert(age);
})