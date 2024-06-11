export function preventTextSelected(){
  const element = document.querySelector('.title-content');
  element.addEventListener('onmousedown', event =>{
    event.preventDefault();
  });
  element.addEventListener('onmouseup', event =>{
    event.preventDefault();
  });
  element.addEventListener('onmousemove', event =>{
    event.preventDefault();
  });
  element.addEventListener('dblclick', event =>{
    event.preventDefault();
  });
}