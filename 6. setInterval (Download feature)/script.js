var btn = document.querySelector('button')
var growth = document.querySelector('#growth')

var grow=0
btn.addEventListener('click',function() {
    var int = setInterval( function() {
        grow++
        growth.style.width = grow + "%"
    }, 30);
    setTimeout(function() {
        clearInterval(int)
        grow = 0
        btn.innerHTML = 'Downloaded'
        btn.style.backgroundColor = 'rgb(35, 205, 95)'
    },3000);
    btn.innerHTML = 'Downloading'
})
