import { showToDoDashboard } from "./todoWorkspace.js";

let currentPosition = 0;

class Goal{
  constructor(title, content, endDate){
    this.goalTitle = title;
    this.goalContent = content;
    this.endDate = endDate.toLocaleDateString();;
  }
}

function howManyGoals(){
  let qtd = 0;
  goals.forEach(()=>{
    qtd++;
  });
  return qtd;
}

export const goals = [
  new Goal('Traveling', 'Build a nest egg for a trip to Hawaii', new Date(2023, 2, 21)),
  new Goal('Savings', 'Buy a new oven', new Date(2025, 3, 17)),
  new Goal('Studying', 'Pass my math exam', new Date(2024, 6, 14)),
  new Goal('Workout', 'Be shaped till the end of the year', new Date(2024, 11, 31))

];

export function showGoalDashboard(){
  const container = document.querySelector('.dashboard-left');
  container.innerHTML = `
    <div class="dashboard-circle">${howManyGoals()}</div>
    <div>goals</div>`;
    const goalButton = document.querySelector('.dashboard-circle');
    goalButton.addEventListener('click', showGoalWorkspace);
}
export function showGoalWorkspace(){
  showToDoDashboard();
  const container = document.querySelector('.dashboard-left');
  container.innerHTML = `
    <div class="goal-workspace-title"><i class='bx bx-left-arrow-circle goal-arrow'></i> <div class="goal-title-text">${goals[currentPosition].goalTitle}</div></div>
    <div class="goal-workspace-content">
      <div class="goal-workspace-button-container back-button"><div class="goal-workspace-button"><i class='bx bx-left-arrow-alt' ></i></div></div>
        <div class="goal-workspace-text">
          ${goals[currentPosition].goalContent}
        </div>
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
  backGoalButton.addEventListener('click', showGoalDashboard);
}