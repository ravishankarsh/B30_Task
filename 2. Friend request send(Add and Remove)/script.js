var box = document.querySelector("#box");
var btn = document.querySelector("button");
var h1 = document.querySelector("h1");
var flag = 0;
btn.addEventListener("click", function(){
    if(flag==0){
        h1.style.color = "green";
    h1.innerHTML = "Friend";
    btn.innerHTML = "Remove Friend";
    flag = 1;
}
else{
    h1.style.color = "red";
    h1.innerHTML = "Stranger";
    btn.innerHTML = "Add Friend";
    flag = 0;
}
})
