var img = document.querySelector('img')
var posX=0
var posY=0
document.addEventListener("keydown",function(dets){
    if(dets.code == 'ArrowRight' && posX<87 )
    {
        posX++
        img.style.left = posX + '%'
        
    }
    else if(dets.code == 'ArrowLeft' && posX>0){
        posX--
        img.style.left = posX + '%'
    }
    else if(dets.code == 'ArrowUp' && posY>0){
        posY--
        img.style.top = posY + '%'
    }
    else if(dets.code == 'ArrowDown' && posY<71){
        posY++
        img.style.top = posY + '%'
    }
    else{
        console.log("Other");   
    }
    
})