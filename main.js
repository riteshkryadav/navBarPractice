let a=document.getElementById("icone");
let b=document.getElementById("icon_content");
let body = document.querySelector('body');
flag =true;
function fun(){
    
    if(flag){
        a.innerHTML=`<i class="fa-solid fa-xmark"></i>`
        b.classList.toggle('blur');
        body.classList.toggle('overflow-hidden');
flag =false;
}
else{
    a.innerHTML=`<i class="fa-sharp fa-light fa-bars"></i>` 
    b.classList.toggle('blur');
    body.classList.toggle('overflow-hidden');
    flag=true;
}
}