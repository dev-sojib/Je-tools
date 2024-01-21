
let elem = document.querySelectorAll(".elem")

// for(let i = 0; i<elem.length; i++){
//     elem[i].addEventListener('mousemove',function(event){
//         elem[i].img.style.left = event.x + "px"
//         elem[i].img.style.top = event.y + "px"
//     }) 
//     elem[i].addEventListener('mouseenter',function(event){
//         elem[i].img.style.opacity = 1
//     }) 
//     elem[i].addEventListener('mouseleave',function(event){
//         elem[i].img.style.opacity = 0
//     }) 
// }

elem.forEach((val)=>{
    val.addEventListener('mouseenter', ()=>{
        val.childNodes[3].style.opacity = 1
    })
    val.addEventListener('mouseleave', ()=>{
        val.childNodes[3].style.opacity = 0
    })
    val.addEventListener('mousemove', (event)=>{
        val.childNodes[3].style.left = event.x +"px"
        // val.childNodes[3].style.top = event.y +"px"
        
    })
})