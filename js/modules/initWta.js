export default function iniWta(){
  let locale = 'pt-BR';
  let wta = document.querySelector('div#wta');
  let wtaChat = wta.querySelector('div#wta-chat');
  let wtaCall = wta.querySelector('div#wta-call');
  let hours = wta.querySelector('span#hours');
  let dateHour = new Date();
  let hour = dateHour.getHours();
  let min = dateHour.getMinutes();


  wtaCall.addEventListener('click', wtaOpen);
  function showHours(){
    setInterval(() => {
      let str_hora = hour + ':' + min;
      hours.innerHTML = str_hora;
    }, 1000);
  }

  function wtaOpen(){
    wtaChat.classList.toggle('is-open');
    showHours();
  }
  
}