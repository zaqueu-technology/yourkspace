export let darkModeEnabled = false;
export function enableDarkMode(){
  if(!darkModeEnabled){
    const elements = document.querySelectorAll('main, aside, header, footer, button');
    elements.forEach( element =>{
      element.classList.add('dark-mode');
    })
    const borders = document.querySelectorAll('header, footer');
    borders.forEach((element)=>{
      element.classList.add('dark-mode-borders');
    });
    darkModeEnabled = true;
  } else{
    const elements = document.querySelectorAll('main, aside, header, footer, button');
    elements.forEach(element =>{
      element.classList.remove('dark-mode');
    })
    const borders = document.querySelectorAll('header, footer');
    borders.forEach((element)=>{
      element.classList.remove('dark-mode-borders');
    });
    darkModeEnabled = false;
  }
  
}