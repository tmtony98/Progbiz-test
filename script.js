window.addEventListener('scroll', function() {
    var navbar = document.getElementById("myNavbar");

    var scrolldownvalue = window.innerHeight; 
    console.log(scrolldownvalue);
    

    if (window.scrollY > scrolldownvalue) {
        navbar.style.display = "none"; 
    } else {
        navbar.style.display = "block"; 
    }
});