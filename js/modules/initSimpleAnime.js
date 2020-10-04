export default function initSimpleAnime(){
  const target = document.querySelectorAll('[data-anime]');
  const animationClass = 'animate';

  function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);

    target.forEach((e) => {
      
      if((windowTop) > e.offsetTop){
        e.classList.add(animationClass);
      }
    });
  }

  animeScroll();

  window.addEventListener('scroll', function(){
    animeScroll();
  });  
}