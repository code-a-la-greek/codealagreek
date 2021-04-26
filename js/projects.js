import '../scss/w3.css';
import '../scss/projects.scss';
import "https://kit.fontawesome.com/a72b9e7ca4.js";
import { allProjects } from './projectsDatabase';
import { goingUp, scrollFunction } from './scrollup';
import { w3_open, w3_close } from './sidebarFunction';
//SIDEBAR
document.getElementById('myOverlay').addEventListener('click', w3_close)
document.querySelector('#mySidebar > section > a').addEventListener('click', w3_close)
document.querySelector('#mySidebar > div.w3-bar-block > a:nth-child(1)').addEventListener('click', w3_close)
document.querySelector('#mySidebar > div.w3-bar-block > a:nth-child(2)').addEventListener('click', w3_close)
document.querySelector('#mySidebar > div.w3-bar-block > a:nth-child(3)').addEventListener('click', w3_close)
document.querySelector('#mySidebar > div.w3-bar-block > a:nth-child(4)').addEventListener('click', w3_close)
document.querySelector('header>span').addEventListener('click', w3_open)
//BUTTON UP
buttonUp.addEventListener('click', goingUp)
window.addEventListener('scroll', scrollFunction)
//DISPLAY ALL THE PROJECTS
allProjects();