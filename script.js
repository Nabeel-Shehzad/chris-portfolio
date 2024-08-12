
const showBar =document.querySelector("#ShowBar");
const SideBar = document.querySelector("#SideBar");
const Navbar = document.querySelector("#Navbar");
const cancel = document.querySelector("#cancel");
showBar.addEventListener("click",()=>{
    SideBar.style.display ="flex"
    SideBar.style.width ="100%"
    Navbar.style.display = "none"
})
cancel.addEventListener("click",()=>{
    SideBar.style.display ="none"
    Navbar.style.display = "flex"
})





document.querySelector('.thumbnail-wrapper').addEventListener('click', function() {
    const iframe = document.getElementById('videoIframe');
    const thumbnailWrapper = document.querySelector('.thumbnail-wrapper');

    iframe.src += "?autoplay=1";

   
    thumbnailWrapper.style.display = 'none';
});


Splitting();




