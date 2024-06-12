let currentPosition = 0;

class Goal{
  constructor(title, content, endDate){
    this.goalTitle = title;
    this.goalContent = content;
    this.endDate = endDate.toLocaleDateString();;
  }
}

export const goals = [
  new Goal('Traveling', 'Build a nest egg for a trip to Hawaii', new Date(2023, 2, 21)),
  new Goal('Savings', 'Buy a new oven', new Date(2025, 3, 17))

];

export function showGoalDashboard(){
  const container = document.querySelector('.dashboard-left');
  container.innerHTML = `
    <div class="dashboard-circle">1</div>
    <div>goals</div>`;
}
export function showGoalWorkspace(){
  const container = document.querySelector('.dashboard-left');
  container.innerHTML = `
    <div class="goal-workspace-title">${goals[currentPosition].goalTitle}</div>
    <div class="goal-workspace-content">
      <div class="goal-workspace-button-container back-button"><button class="goal-workspace-button"><</button></div>
        <div class="goal-workspace-text">
          ${goals[currentPosition].goalContent}
        </div>
      <div class="goal-workspace-button-container next-button"><button class="goal-workspace-button">></button></div>
    </div>
    <div class="goals-workspace-end-date">End date: ${goals[currentPosition].endDate}</div>
  `;
  const backButton = document.querySelector('.back-button');
  const nextButton = document.querySelector('.next-button');

  backButton.addEventListener('click', ()=>{
    if(currentPosition === 0){
      currentPosition = goals.length - 1;
    } else if( currentPosition === goals.length - 1){
      currentPosition = 0;
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
}