export let darkModeEnabled = false;
export function enableDarkMode(){
  if(!darkModeEnabled){
    const elements = document.querySelectorAll('main, aside, header, footer, button, body');
    elements.forEach( element =>{
      element.classList.add('dark-mode');
    })
    const borders = document.querySelectorAll('header, footer');
    borders.forEach((element)=>{
      element.classList.add('dark-mode-borders');
    });
    darkModeEnabled = true;
  } else{
    const elements = document.querySelectorAll('main, aside, header, footer, button, body');
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

let goalCont = 0;
export function limitCharactersGoal(event){
  if((event.key === 'Backspace') && (goalCont === 0)){
    console.log(goalCont);
  }else if(event.key === 'Backspace'){
    goalCont--;
    console.log(goalCont);
  }else if((event.key !== 'Enter') && (goalCont < 15)){
    goalCont++;
    console.log(goalCont);
  }else if(event.key === 'Enter'){
    event.preventDefault();
  }else{
    event.preventDefault();
    console.log(goalCont);
  }
}

export function resetGoalCont(){
  goalCont = 0;
}

let todoCont = 0;
export function limitCharactersToDo(event){
  if((event.key === 'Backspace') && (todoCont === 0)){
    console.log(todoCont);
  }else if(event.key === 'Backspace'){
    todoCont--;
    console.log(todoCont);
  }else if((event.key !== 'Enter') && (todoCont < 15)){
    todoCont++;
    console.log(todoCont);
  }else if(event.key === 'Enter'){
    event.preventDefault();
  }else{
    event.preventDefault();
    console.log(todoCont);
  }
}
export function resetToDoCont(){
  todoCont = 0;
}
