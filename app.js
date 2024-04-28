var body = document.body;
var section = document.createElement("section");
var h1 = document.createElement("h1");
var h2 = document.createElement("h2");
var subh2 = document.createElement("h2");
var p = document.createElement("p");
var ul = document.createElement("ul");
var li0 = document.createElement("li");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var heatingimg = document.createElement("img");
var figcaption = document.createElement("figcaption");
var hr = document.createElement("hr");
var hr2 = document.createElement("hr");
var div = document.createElement("div");
var link = document.createElement("a");

body.appendChild(section);
section.appendChild(h1);
section.appendChild(div);
div.appendChild(heatingimg);
div.appendChild(hr);
section.appendChild(h2);
section.appendChild(p);
section.appendChild(hr2);
section.appendChild(subh2);
section.appendChild(ul);
ul.appendChild(li0);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
section.appendChild(link);

body.setAttribute("style", "height: 150vh");

section.setAttribute("style", "width:50%; margin:auto; text-align:center;");

h1.textContent = "Heat Stoke";

heatingimg.setAttribute(
  "src",
  "https://healthcare.utah.edu/sites/g/files/zrelqx136/files/media/images/2023/GettyImages-1396435926-heat.jpg"
);
heatingimg.setAttribute("alt", "Sweating Man coz of high temperature");
heatingimg.setAttribute("style", "width:600px");

hr.setAttribute("style", "margin-bottom:50px");
hr2.setAttribute("style", "margin-bottom:50px");

h2.textContent = "Heat Stroke: First Aid";
p.textContent =
  "Heatstroke happens when body temperature rises quickly and a person can't cool down. It can be life-threatening by causing damage to the brain and other vital organs. It may be caused by doing strenuous activity in the heat or by being in a hot place for too long.";

subh2.textContent = "Seek emergency medical care";
li0.textContent = "Put the person in a cool tub of water or a cool shower.";
li1.textContent = "Fan the person while misting with cool water.";
li2.textContent =
  "Place ice packs or cool, wet towels on the neck, armpits and groin.";
li3.textContent = "Cover the person with cool, damp sheets.";
li0.setAttribute("style", "margin-left: 30px; text-align:left;");
li1.setAttribute("style", "margin-left: 30px; text-align:left;");
li2.setAttribute("style", "margin-left: 30px; text-align:left;");
li3.setAttribute("style", "margin-left: 30px; text-align:left;");

link.textContent = "This article is copyright to myoclinic.org.";
link.setAttribute(
  "href",
  "https://www.mayoclinic.org/first-aid/first-aid-heatstroke/basics/art-20056655#:~:text=Sponge%20the%20person%20with%20cool,person%20with%20cool%2C%20damp%20sheets."
);
link.setAttribute(
  "style",
  "text-decoration:none; color:green; position:absolute; right:100px;"
);
// link.setAttribute("")
