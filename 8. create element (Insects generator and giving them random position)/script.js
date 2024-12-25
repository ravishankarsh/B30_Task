var btn = document.querySelector('button')


btn.addEventListener('click', function () {
    var x = Math.floor(Math.random() * 100)
    var y = Math.floor(Math.random() * 100)

    var img = document.createElement('img');
    img.src = 'https://imgs.search.brave.com/4thx_eGvzcgNXd1nSxqx792v6wmqKnVjb1srYcMuxig/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL3BuZy1pbnNl/Y3RzLWRyYWdvbmZs/eS1wbmctaW1hZ2Ut/MTUwMC5wbmc';
    img.style.position = 'absolute';
    img.style.left = x + '%'
    img.style.top = y + '%'
    document.body.appendChild(img);    
})