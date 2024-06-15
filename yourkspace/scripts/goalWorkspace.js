import { showToDoDashboard } from "./todoWorkspace.js";
import { limitCharactersGoal, resetGoalCont, resetToDoCont } from "./darkMode.js";

let currentPosition = 0;

class Goal{
  constructor(title, content, endDate){
    this.goalTitle = title;
    this.goalContent = content;
    this.endDate = endDate;
    this.removed = false;
  }

}

function showText(element){
  if(element.removed === false){
    return`
      <div class="goal-workspace-text">
        ${goals[currentPosition].goalContent}
      </div>`;
  }else{
    return `
      <div class="goal-workspace-text todo-workspace-text-removed">
        ${goals[currentPosition].goalContent}
      </div>`;
  }
}

function howManyGoals(){
  let qtd = 0;
  goals.forEach(()=>{
    qtd++;
  });
  return qtd;
}

let goals = [];
if(JSON.parse(localStorage.getItem('goal') !== null)){
  goals = JSON.parse(localStorage.getItem('goal'));
}

function addGoal(title, content, date){
  goals.push(new Goal(title.value, content.value, date.value));
  showGoalDashboard();

  resetGoalCont();
  resetToDoCont();
  localStorage.removeItem('goal')
  localStorage.setItem('goal', JSON.stringify(goals));
}

function showGoalsList(){
  const container = document.querySelector('.dashboard-left');
  container.innerHTML = `
    <div class='new-item'>
      <div class='title-new-item goal-title-new'><input type='text' placeholder='Enter title' class='title-new-item-content'><div class='close-tab goal-close'>x</div></div>
      <textarea class='content-new-item goal-content-new'></textarea>
      <input type='date' class='final-date-item'>
    </div>
    <button class="add-new-item add-goal">Add</button>
  `;
  const closeTab = document.querySelector('.goal-close');
  closeTab.addEventListener('click', showGoalDashboard);
  const goalTitleNew = document.querySelector('.title-new-item-content');
  goalTitleNew.addEventListener('keydown', event =>{
    limitCharactersGoal(event);
  })
  const goalContentNew = document.querySelector('.goal-content-new');
  const goalDateNew = document.querySelector('.final-date-item');
 

  const addGoalButton = document.querySelector('.add-goal');
  addGoalButton.addEventListener('click', ()=>{
    addGoal(goalTitleNew, goalContentNew, goalDateNew);
  })
}

export function showGoalDashboard(){
  const container = document.querySelector('.dashboard-left');
  container.innerHTML = `
    <div class="dashboard-circle">${howManyGoals()}</div>
    <div class="goals">goals</div>`;
    const goalButton = document.querySelector('.dashboard-circle');
    goalButton.addEventListener('click', showGoalWorkspace);
    const goalsList = document.querySelector('.goals');
    goalsList.addEventListener('click', ()=>{
      showGoalsList();
      resetGoalCont();
      showToDoDashboard();
    });
    goalsList.addEventListener('mouseover', ()=>{
      goalsList.innerHTML = `+`;
    })
    goalsList.addEventListener('mouseleave', ()=>{
      goalsList.textContent = 'goals'
    })
}
export function showGoalWorkspace(){
  verifyRemoved();
  showToDoDashboard();
  if(currentPosition >= goals.length){
    currentPosition = 0;
  }
  const container = document.querySelector('.dashboard-left');
  container.innerHTML = `
    <div class="goal-workspace-title"><i class='bx bx-left-arrow-circle goal-arrow'></i> <div class="goal-title-text">${goals[currentPosition].goalTitle}</div></div>
    <div class="goal-workspace-content">
      <div class="goal-workspace-button-container back-button"><div class="goal-workspace-button"><i class='bx bx-left-arrow-alt' ></i></div></div>
        ${showText(goals[currentPosition])}
      <div class="goal-workspace-button-container next-button"><div class="goal-workspace-button"><i class='bx bx-right-arrow-alt'></i></div></div>
    </div>
    <div class="goals-workspace-end-date">End date: ${goals[currentPosition].endDate}</div>
  `;
  const backButton = document.querySelector('.back-button');
  const nextButton = document.querySelector('.next-button');

  backButton.addEventListener('click', ()=>{
    if(currentPosition === 0){
      currentPosition = goals.length - 1;
    } else{
      currentPosition--;
    }

    showGoalWorkspace();
  });

  nextButton.addEventListener('click', ()=>{
    if(currentPosition === goals.length - 1){
      currentPosition = 0;
    }else{
      currentPosition++;
    }

    showGoalWorkspace();
  });

  const backGoalButton = document.querySelector('.goal-arrow');
  backGoalButton.addEventListener('click', ()=>{
    verifyRemoved();
    showGoalDashboard();
  });

  const markText = document.querySelector('.goal-workspace-text');
  markText.addEventListener('click', ()=>{
    if(markText.classList.contains('goal-workspace-text-removed')){
      goals[currentPosition].removed = false;
      markText.classList.remove('goal-workspace-text-removed');
    }else{
      goals[currentPosition].removed = true;
      markText.classList.add('goal-workspace-text-removed');
    }
  })
}

function verifyRemoved(){
  goals = goals.filter(value => !value.removed);
  localStorage.removeItem('goal')
  localStorage.setItem('goal', JSON.stringify(goals));
}