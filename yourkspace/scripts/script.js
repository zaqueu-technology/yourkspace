import { enableDarkMode, darkModeEnabled } from "./darkMode.js";
import { preventTextSelected } from "./preventTitle.js";
preventTextSelected();

const title = document.querySelector('.title');
title.addEventListener('click', enableDarkMode);