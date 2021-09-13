// on click vao menu-icon hien navbar o mobile

let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 60){
        document.querySelector('#scoll-top').classList.add('active');
    } else{
        document.querySelector('#scoll-top').classList.remove('active');
    }
}


// onlick cua search form va tat seach form
document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

// chay sile home

var slideIndex;
// ham hien thi slide

function showSlides(){
    var i;
    var slides = document.getElementsByClassName('slide');
    var dots = document.getElementsByClassName("dot");
    for ( i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex].style.display = 'flex';
    dots[slideIndex].className += " active";
    slideIndex++;

    if (slideIndex > slides.length - 1){
        slideIndex = 0;
    }
    setTimeout(showSlides, 7000);
}
showSlides(slideIndex = 0);

function currenSlide(n){
    showSlides(slideIndex=n);
}

// onlcick phan menu doi mon
const menuTabs = document.querySelector('.menu-tabs');
menuTabs.addEventListener("click",function(e){
    if(e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")){
        const target = e.target.getAttribute('data-target');
        menuTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add('active');
        const menuSection = document.querySelector(".menu")
        menuSection.querySelector('.menu-tab-content.active').classList.remove('active');
        menuSection.querySelector(target).classList.add('active');
    }
});

// gif loader

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}

function FadeOut(){
    setInterval(loader, 3000);
}

window.onload = FadeOut;