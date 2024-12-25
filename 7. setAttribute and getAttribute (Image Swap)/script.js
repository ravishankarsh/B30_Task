var btn = document.querySelector('button')
var box1 = document.querySelector('#box1 img')
var box2 = document.querySelector('#box2 img')

btn.addEventListener('click', function() {
      var img1 = box1.getAttribute('src')
      var img2 = box2.getAttribute('src')
      
      box1.setAttribute('src',img2)
      box2.setAttribute('src',img1)
})