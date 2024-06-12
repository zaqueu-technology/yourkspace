import { enableDarkMode, darkModeEnabled } from "./darkMode.js";
import { preventTextSelected } from "./preventTitle.js";
preventTextSelected();
import { yearProgress, dayProgress } from "./progressBars.js";
const title = document.querySelector('.title-content');
title.addEventListener('click', enableDarkMode);

yearProgress();
dayProgress();
setInterval(dayProgress, 60000);
 
