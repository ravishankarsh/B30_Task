var btn = document.querySelector("button")
var body = document.querySelector('body')

btn.addEventListener('click', function() {
    var x = Math.floor(Math.random()*255)
    var y = Math.floor(Math.random()*255)
    var z = Math.floor(Math.random()*255)
    console.log(x);
    console.log(y);
    console.log(z);
    
    
    
    body.style.backgroundColor = `rgb(${x}, ${y}, ${z})`
})