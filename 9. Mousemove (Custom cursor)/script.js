var body = document.querySelector('body')
var cursor = document.querySelector('#cursor')
var h1 = document.querySelector('h1')
body.addEventListener('mousemove',function(det){
    cursor.style.left = det.x + 'px'
    cursor.style.top = det.y + 'px'

})
h1.addEventListener("mouseenter",function(){
    cursor.style.scale = 3
})
h1.addEventListener("mouseleave",function(){
    cursor.style.scale = 1
})