export default function iniBoxToTop(){
  let boxToTop = document.querySelector('div#boxToTop');
  window.addEventListener('scroll', ativarBotao);

  function ativarBotao(){
    let scroll = window.scrollY;
    scroll > 50 ? boxToTop.classList.add('active') : boxToTop.classList.remove('active');
    
    scroll > 50 ? wta.style.bottom = '75px' : wta.style.bottom = '20px';
  }
}