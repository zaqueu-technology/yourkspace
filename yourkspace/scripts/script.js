import { enableDarkMode, darkModeEnabled } from "./darkMode.js";
import { preventTextSelected } from "./preventTitle.js";
preventTextSelected();
const title = document.querySelector('.title-content');
title.addEventListener('click', enableDarkMode);
 
const dayjs = require('dayjs');
const actualDate = dayjs();

const firstDay = dayjs(actualDate).startOf('year');
const pastDays = dataAtual.diff(firstDay, 'day');

const totalDays = dataAtual.isLeapYear() ? 366 : 365;
const percentagePassed = (pastDays / totalDays) * 100;

console.log(`Progresso do ano: ${percentagePassed.toFixed(2)}%`);