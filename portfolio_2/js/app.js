aboutDiv = document.querySelector('.about');
aboutMe = document.querySelector('.circle-about');
aboutMeBig = document.querySelector('.circle-about-big');
aboutParagraph = document.querySelector('.circle-about-big>.paragraph');

portfolioDiv = document.querySelector('.portfolio');
portfolioFlex = document.querySelector('.portfolio-items');

contactDiv = document.querySelector('.contact')
contactForm = document.querySelector('.contact-form')


// Theme change
document.querySelector(".header-content").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// About circle
aboutDiv.addEventListener('click',  function(){
    if (aboutMe.style.display != 'none'){
        aboutMe.style.display = 'none';
        aboutMeBig.style.display = 'flex';
        aboutParagraph.style.display = 'block';
    }else{
        aboutMe.style.display = 'block';
        aboutMeBig.style.display = 'none';
        aboutParagraph.style.display = 'none';
    }
    aboutDiv.scrollIntoView({behavior: 'smooth'});
});


// Portfolio projects
portfolioDiv.addEventListener('click',  function(){
    if (portfolioFlex.style.display == 'flex'){
        portfolioFlex.style.display = 'none';
    }else {
        portfolioFlex.style.display = 'flex';
    }
    portfolioDiv.scrollIntoView({behavior: 'smooth'});

});

// Contact Me
contactDiv.addEventListener('click',  function(){
    if (contactForm.style.display == 'flex'){
        contactForm.style.display = 'none';
    }else {
        contactForm.style.display = 'flex';
        contactForm.scrollIntoView({behavior: 'smooth'});
    }
});