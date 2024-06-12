export function yearProgress(){
  const actualDate = new Date();
  const firstDay = new Date(actualDate.getFullYear(), 0, 1);
  const pastDays = Math.floor((actualDate - firstDay) / (1000 * 60 * 60 * 24));

  const totalDays = actualDate.getFullYear() % 4 === 0? 366 : 365;
  let percentageYear = pastDays / totalDays * 100;
  console.log(`Progresso do ano: ${percentageYear.toFixed(2)}%`);
  const progressBar = document.getElementById('progress-bar');
  progressBar.style.width = `${percentageYear}%`;
  progressBar.textContent = `${percentageYear.toFixed(2)}%`;
}

export function dayProgress(){
  const actualTime = new Date();
  const totalHours = 24;

  const hoursPassed = actualTime.getHours();
  const minutes = actualTime.getMinutes() / 60;
  const timePassed = ((hoursPassed + minutes) / totalHours ) * 100;

  const dayProgressBar = document.getElementById('day-progress-bar');

  dayProgressBar.style.width = `${timePassed.toFixed(2)}%`;
  dayProgressBar.textContent = `${timePassed.toFixed(2)}%`;
}