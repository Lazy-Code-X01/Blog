// for the sticky navbar

window.addEventListener('scroll', () =>{
    const header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 50)
    // console.log(header);
})


let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
} 

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
} 

