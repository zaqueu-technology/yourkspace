import { showGoalDashboard } from "./goalWorkspace.js";
import { limitCharactersToDo, resetToDoCont, resetGoalCont } from "./darkMode.js";

let currentPosition = 0;

class ToDo{
  constructor(title, content){
    this.title = title;
    this.content = content;
    this.removed = false;
  }
}

function showText(element){
  if(element.removed === false){
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

function addToDo(title, content){
  toDoArr.push(new ToDo(title.value, content.value));
  showToDoDashboard();

  resetToDoCont();
  resetGoalCont();
  localStorage.removeItem('todo')
  localStorage.setItem('todo', JSON.stringify(toDoArr));
}

function showToDoList(){
  const container = document.querySelector('.dashboard-right');
  container.innerHTML = `
    <div class='new-item'>
      <div class='title-new-item todo-title-new'><input type='text' placeholder='Enter title' class='title-new-item-content'><div class='close-tab todo-close'>x</div></div>
      <textarea class='content-new-item todo-content-new'></textarea>
    </div>
    <button class="add-new-item add-todo">Add</button>
  `;
  const closeTab = document.querySelector('.todo-close');
  closeTab.addEventListener('click', showToDoDashboard);
  const todoTitleNew = document.querySelector('.title-new-item-content');
  todoTitleNew.addEventListener('keydown', event =>{
    limitCharactersToDo(event);
  })
  const todoContentNew = document.querySelector('.todo-content-new');
 
  const addToDoButton = document.querySelector('.add-todo');
  addToDoButton.addEventListener('click', ()=>{
    addToDo(todoTitleNew, todoContentNew);
  })
}

function howManyTodo(){
  let qtd = 0;
  toDoArr.forEach(()=>{
    qtd++;
  })
  return qtd;
}

let toDoArr = [];
if(JSON.parse(localStorage.getItem('todo') !== null)){
  toDoArr = JSON.parse(localStorage.getItem('todo'));
}




export function showToDoDashboard(){
  const container = document.querySelector('.dashboard-right');
  container.innerHTML = `
    <div class="dashboard-circle todo-circle">${toDoArr.length}</div>
    <div class="to-do">to-do</div>`;
    const todoButton = document.querySelector('.todo-circle');
    todoButton.addEventListener('click', showToDoWorkspace);

    const todoList = document.querySelector('.to-do');
    todoList.addEventListener('click', ()=>{
      showToDoList()
      resetToDoCont();
      showGoalDashboard();
    });
    todoList.addEventListener('mouseover', ()=>{
      todoList.innerHTML = `+`;
    })
    todoList.addEventListener('mouseleave', ()=>{
      todoList.textContent = 'todo'
    })
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
        ${showText(toDoArr[currentPosition])}
      <div class="todo-workspace-button-container todo-next-button"><div class="todo-workspace-button"><i class='bx bx-right-arrow-alt'></i></div></div>
    </div>
    <div class="todo-workspace-end-date">s</div>
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
  localStorage.removeItem('todo')
  localStorage.setItem('todo', JSON.stringify(toDoArr));
}

