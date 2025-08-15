const nav = document.getElementById("nav");
const menu = document.getElementById("menu");
let isShowing = false;

menu.addEventListener("click", ()=>{
    if(!isShowing){
        nav.classList.add("show");
        nav.classList.remove('hide');
        isShowing = true; 
        return  
    }
    if(isShowing){
        nav.classList.add("hide");
        nav.classList.remove('show');
        isShowing = false; 
        return  
    }
})

// Owl Carousel Setup
let owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
});


// AOS
AOS.init();