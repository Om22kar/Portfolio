
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav-item a');

window.onscroll =()=> {
    sections.forEach(sec =>{
        let top =  window.scrollY;
        let offset = sec.offsetTop-100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>=offset && top<offset+height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('nav ul li a[ href*=' + id + ']').classList.add('active');
            });

        }
    })
}

const navEl = document.querySelector(".nav-menu");
const hamburgerEl = document.querySelector(".hamburger");

hamburgerEl.addEventListener("click" , () => {
    navEl.classList.toggle("nav-open");
    hamburgerEl.classList.toggle("hamburger-open")
});

navEl.addEventListener("click" , () =>{
    navEl.classList.remove("nav-open");
    hamburgerEl.classList.remove("hamburger-open")

});





let output = document.querySelector(".submit-btn");
      output.addEventListener("click" , ()=>{
         var allInputs = document.querySelectorAll('input,textarea');
         allInputs.forEach(singleInput => singleInput.value = '');
        //  output.innerHTML += "Form submitted and cleared successfully! <br>";
        alert("Your Message has been Sent")
        });



ScrollReveal({
    reset: true,
    distance: '2rem',
    duration: 1500,
    delay:150
});

ScrollReveal().reveal('.home-content' , { origin:'top' });
ScrollReveal().reveal('.home-myimg' , { origin:'bottom' });

ScrollReveal().reveal('.about-content' , { origin:'bottom' });
ScrollReveal().reveal('.about-myimg' , { origin:'top' });

ScrollReveal().reveal('.ab' , { origin:'bottom' });
ScrollReveal().reveal('.wrapper' , { origin:'top' });

ScrollReveal().reveal('.project-container' , { origin:'bottom' });
ScrollReveal().reveal('.projhd' , { origin:'top' });

ScrollReveal().reveal('.input-container' , { origin:'bottom' });
ScrollReveal().reveal('.row1,.row2' , { origin:'top' });














// <div class="nav">
//             <input type="checkbox" id="nav-check">
//             <div class="nav-header">
//                 <div class="nav-title">
//                     JoGeek
//                 </div>
//             </div>
//             <div class="nav-btn">
//                 <label for="nav-check">
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                 </label>
//             </div>

//             <div class="nav-links">
//                 <a href="home" class="active">Home</a>
//                 <a href="home">About</a>
//                 <a href="home">Skill</a>
//                 <a href="home">Projects</a>
//                 <a href="home">Contact</a>

//             </div>
//         </div>


// <div class="logo" style="color:#fff;">Portfolio</div>

// <ul class="navbar-nav ml-auto ">

//     <a href="#home" class="active">Home</a>
//     <a href="#about">About</a>
//     <a href="#skill">Skills</a>
//     <a href="#project">Projects</a>
//     <a href="#contact">Contact</a>

// </ul>


// window.onscroll = function()
// {
// var pos = window.scrollY;
// if(pos > 50)
// {
// document.getElementsByClassName('navbar').style.top = "-63px";
// }
// else
// {
// document.getElementsByClassName('navbar').style.top = "0";
// }    
// }