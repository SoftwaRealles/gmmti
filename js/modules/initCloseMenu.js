export default function initCloseMenu(){

  let links = document.querySelectorAll('.nav-link');
  
  links.forEach((link) => {

    link.addEventListener('click', () => {
      let navbarCollapse = document.querySelector('.navbar-collapse');
      navbarCollapse.classList.toggle("show");
    });

  });

}