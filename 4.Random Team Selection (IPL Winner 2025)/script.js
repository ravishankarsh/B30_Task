const box = document.querySelector(".box")
const btn = document.querySelector("button")
var h1 = document.querySelector("h1")
var arr = ["DC", "SRH", "RCB", "MI", "CSK", "KKR", "LSG", "RR", "PBKS", "GT"]

btn.addEventListener('click', function() {
    var x = Math.floor(Math.random()*arr.length)
    h1.innerHTML = arr[x]  
})