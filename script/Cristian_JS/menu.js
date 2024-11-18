//Header

const header = document.querySelector("header");
const div = document.createElement("div");
const a_logo = document.createElement("a");
const img = document.createElement("img");
a_logo.setAttribute("href", "../inicio.html");
a_logo.setAttribute("target", "_top");
img.setAttribute("src","../../../images/logo_the_bridge_short_white.png");
img.id="whitelogo";
img.setAttribute("alt","logothebridge");
img.classList.add("headerOptions");
a_logo.appendChild(img);
div.appendChild(a_logo);
header.appendChild(div);


const a_experiments = document.createElement("a");
a_experiments.setAttribute("href","./experimentos.html");
a_experiments.setAttribute("target","_top");
a_experiments.innerText="Experimentos";
a_experiments.classList.add("headerOptions")
header.appendChild(a_experiments);

const a_webs = document.createElement("a");
a_webs.setAttribute("href","./webs.html");
a_webs.setAttribute("target","_top");
a_webs.innerText="Webs";
a_webs.classList.add("headerOptions")
header.appendChild(a_webs);

const a_programs = document.createElement("a");
a_programs.setAttribute("href","./programas.html");
a_programs.setAttribute("target","_top");
a_programs.innerText="Programas";
a_programs.classList.add("headerOptions")
header.appendChild(a_programs);

const a_games = document.createElement("a");
a_games.setAttribute("href","./juegos.html");
a_games.setAttribute("target","_top");
a_games.innerText="Juegos";
a_games.classList.add("headerOptions")
header.appendChild(a_games);






