import { showGoalDashboard } from "./goalWorkspace.js";

let currentPosition = 0;

class ToDo{
  constructor(title, content){
    this.title = title;
    this.content = content;
    this.removed = false;
  }

  showText(){
    if(this.removed === false){
      return`
        <div class="todo-workspace-text">
          ${toDoArr[currentPosition].content}
        </div>`;
    }else{
      return `
        <div class="todo-workspace-text todo-workspace-text-removed">
          ${toDoArr[currentPosition].content}
        </div>`;
    }
  }
}

function howManyTodo(){
  let qtd = 0;
  toDoArr.forEach(()=>{
    qtd++;
  })
  return qtd;
}

let toDoArr = [
  new ToDo('Wednesday', 'Wash and put away the dishes'),
  new ToDo('Monday', 'Study Math'),
  new ToDo('Friday', 'drink lots of beer')
]


export function showToDoDashboard(){
  const container = document.querySelector('.dashboard-right');
  container.innerHTML = `
    <div class="dashboard-circle todo-circle">${toDoArr.length}</div>
    <div>to-do</div>`;
    const goalButton = document.querySelector('.todo-circle');
    goalButton.addEventListener('click', showToDoWorkspace);
}

export function showToDoWorkspace(){
  verifyRemoved();
  if(currentPosition >= toDoArr.length){
    currentPosition = 0;
  }
  showGoalDashboard();
  const container = document.querySelector('.dashboard-right');
  container.innerHTML = `
  <div class="todo-workspace-title"><i class='bx bx-left-arrow-circle todo-arrow'></i> <div class="todo-title-text">${toDoArr[currentPosition].title}</div></div>
    <div class="todo-workspace-content">
      <div class="todo-workspace-button-container todo-back-button"><div class="todo-workspace-button"><i class='bx bx-left-arrow-alt' ></i></div></div>
        ${toDoArr[currentPosition].showText()}
      <div class="todo-workspace-button-container todo-next-button"><div class="todo-workspace-button"><i class='bx bx-right-arrow-alt'></i></div></div>
    </div>
    <div class="goals-workspace-end-date">s</div>
  `;

  const backButton = document.querySelector('.todo-back-button');
  const nextButton = document.querySelector('.todo-next-button');

  backButton.addEventListener('click', ()=>{
    if(currentPosition === 0){
      currentPosition = toDoArr.length - 1;
    } else{
      currentPosition--;
    }

    showToDoWorkspace();
  });

  nextButton.addEventListener('click', ()=>{
    if(currentPosition === toDoArr.length - 1){
      currentPosition = 0;
    }else{
      currentPosition++;
    }

    showToDoWorkspace();
  });

  const backGoalButton = document.querySelector('.todo-arrow');
  backGoalButton.addEventListener('click', ()=>{
    verifyRemoved();
    showToDoDashboard();
  });

  const markText = document.querySelector('.todo-workspace-text');
  markText.addEventListener('click', ()=>{
    if(markText.classList.contains('todo-workspace-text-removed')){
      toDoArr[currentPosition].removed = false;
      markText.classList.remove('todo-workspace-text-removed');
    }else{
      toDoArr[currentPosition].removed = true;
      markText.classList.add('todo-workspace-text-removed');
    }
  })
}

function verifyRemoved(){
  toDoArr = toDoArr.filter(value => !value.removed);
}

