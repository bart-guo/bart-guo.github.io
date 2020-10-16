change()
window.onresize = function(){
    change()
}
function change(){
    let screenW = document.body.scrollWidth
    let windowW = window.innerWidth
    if(screenW>980){
        screenW = 980
    }
    let s = screenW/120
    if (windowW < 686){
        document.querySelector('.id-photo').style.display = 'none'
    }else {
        document.querySelector('.id-photo').style.display = 'block'
    }
    // console.log(s,screenW )
    document.getElementsByTagName('html')[0].style.fontSize = s +'px'
}