

let today= document.getElementById("content");
let all= document.getElementById("all");
let complete= document.getElementById("cmp");



    
        let icon=document.getElementById("ham3");

       
        icon.addEventListener("click",()=>{
           if(document.querySelector('.taskbar').classList.contains('taskbargo')){
            document.querySelector('.taskbar').classList.remove('taskbargo');
            document.querySelector('.ham').classList.remove('hamgo');
           }
           else{
            document.querySelector('.taskbar').classList.add('taskbargo');
            document.querySelector('.ham').classList.add('hamgo');
            
           }
        })
        let dt=new Date();
document.getElementById("whole").innerHTML=dt.toDateString();
document.querySelector('.tsk6').addEventListener("click", () => {
    document.querySelector('.date2').style.display='flex';
    
    });