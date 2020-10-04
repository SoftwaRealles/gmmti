export default function initModule(){
  let dateFooter = document.querySelector('span#dateFooter');
  let date = new Date();
  
  let year = date.getFullYear();
  dateFooter.innerHTML = year;
}
