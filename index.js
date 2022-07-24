let darkButton=document.getElementById("darkButton");
darkspan=document.getElementById("darkspan")
darkButton.addEventListener("click",function(){
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        darkspan.textContent="light_mode"
    }
    else{
        darkspan.textContent="dark_mode"

    }
})

let menuButton=document.getElementById("menuButton");
let menuul=document.getElementById("menuul");
menuButton.addEventListener("click",function(){
        menuul.style.left='0';
})

let closeButton=document.getElementById("closeButton");
closeButton.addEventListener("click",function(){
        menuul.style.left='-30vw';
})