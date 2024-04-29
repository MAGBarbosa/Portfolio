/*
<div>
  My very first SheCodes project of a landing page created using HTML, CSS and
  vanilla Javascript.
</div>;

<div>
  A more advanced project from SheCodes Plus, based on API integration. Coded
  using HTML, CSS, Bootstrap and vanilla Javascript.
</div>;
<div>
  Project resulting of the SheCodes Plus Add-on course. Based on real time in
  various countries, using Moment.js library. Coded using HTML, CSS, and vanilla
  Javascript.
</div>;
*/
let app1 = document.getElementById("app1");
let app2 = document.getElementById("app2");
let app3 = document.getElementById("app3");

let aboutApp1Button = document.getElementById("about-app1");
let aboutApp2Button = document.getElementById("about-app2");
let aboutApp3Button = document.getElementById("about-app3");

let app1Front = document.getElementById("app1-front");
let app1Back = document.getElementById("app1-back");

let backButton1 = document.getElementById("back-button1");
let backButton2 = document.getElementById("back-button2");
let backButton3 = document.getElementById("back-button3");

let isFront = true;

aboutApp1Button.onclick = function () {
  app1.style.transform = "rotateY(180deg)";
};
backButton1.onclick = function () {
  app1.style.transform = "rotateY(0deg)";
};

aboutApp2Button.onclick = function () {
  app2.style.transform = "rotateY(180deg)";
};
backButton2.onclick = function () {
  app2.style.transform = "rotateY(0deg)";
};
aboutApp3Button.onclick = function () {
  app3.style.transform = "rotateY(180deg)";
};
backButton3.onclick = function () {
  app3.style.transform = "rotateY(0deg)";
};

/*div.style.display = "none";*/
