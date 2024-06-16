import { enableDarkMode, darkModeEnabled } from "./darkMode.js";
import { preventTextSelected } from "./preventTitle.js";
preventTextSelected();
import { yearProgress, dayProgress } from "./progressBars.js";
import { showGoalDashboard } from "./goalWorkspace.js";
import { showToDoDashboard } from "./todoWorkspace.js";
const title = document.querySelector('.title-content');
title.addEventListener('click', enableDarkMode);

yearProgress();
dayProgress();
setInterval(dayProgress, 1000);

showGoalDashboard();
showToDoDashboard();


 
