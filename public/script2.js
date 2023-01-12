document.querySelector('.tsk7').addEventListener("click", () => {
    document.querySelector('.date3').style.display='flex';
    
    });
    document.querySelector('.tsk7').addEventListener("click", () => {
        document.querySelector('.date4').style.display='flex';
        
        });
        let icon=document.getElementById("ham3");

        icon.addEventListener("click",()=>{
            if(document.querySelector('.taskbar').classList.contains('taskbargo')){
             document.querySelector('.taskbar').classList.remove('taskbargo');
             console.log("321");
            }
            else{
             document.querySelector('.taskbar').classList.add('taskbargo');
             console.log("123");
            }
         })