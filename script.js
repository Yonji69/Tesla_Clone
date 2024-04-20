// Get all the elements
const modelSInfo = document.getElementById("model-s-info");
const modelSFooter = document.getElementById("model-s-footer");
const model3Info = document.getElementById("model-3-info");
const model3Footer = document.getElementById("model-3-footer");
const modelXInfo = document.getElementById("model-x-info");
const modelXFooter = document.getElementById("model-x-footer");
const modelYInfo = document.getElementById("model-y-info");
const modelYFooter = document.getElementById("model-y-footer");
const cyberInfo = document.getElementById("cyber-info");
const cyberFooter = document.getElementById("cyber-footer");
const experienceTeslaInfo = document.getElementById("experience-tesla-info");
const experienceTeslaFooter = document.getElementById("experience-tesla-footer");

// Initialize variables
let modelSInfoVisible = false;
let model3InfoVisible = false;
let modelXInfoVisible = false;
let modelYInfoVisible = false;
let cyberInfoVisible = false;
let experienceTeslaInfoVisible = false;

// Functions
function showModelSInfo() {
  modelSInfo.style.opacity = 1;
  modelSInfo.style.transform = "translateY(0)";
  setTimeout(() => {
    modelSFooter.style.opacity = 1;
    modelSFooter.style.transform = "translateY(0)";
  }, 1000);
  modelSInfoVisible = true;
}

function showModel3Info() {
  model3Info.style.opacity = 1;
  model3Info.style.transform = "translateY(0)";
  setTimeout(() => {
    model3Footer.style.opacity = 1;
    model3Footer.style.transform = "translateY(0)";
  }, 1000);
  model3InfoVisible = true;
}

function showModelXInfo() {
  modelXInfo.style.opacity = 1;
  modelXInfo.style.transform = "translateY(0)";
  setTimeout(() => {
    modelXFooter.style.opacity = 1;
    modelXFooter.style.transform = "translateY(0)";
  }, 1000);
  modelXInfoVisible = true;
}

function showModelYInfo() {
  modelYInfo.style.opacity = 1;
  modelYInfo.style.transform = "translateY(0)";
  setTimeout(() => {
    modelYFooter.style.opacity = 1;
    modelYFooter.style.transform = "translateY(0)";
  }, 1000);
  modelYInfoVisible = true;
}

function showCyberInfo() {
  cyberInfo.style.opacity = 1;
  cyberInfo.style.transform = "translateY(0)";
  setTimeout(() => {
    cyberFooter.style.opacity = 1;
    cyberFooter.style.transform = "translateY(0)";
  }, 1000);
  cyberInfoVisible = true;
}

function showExperienceTeslaInfo() {
  experienceTeslaInfo.style.opacity = 1;
  experienceTeslaInfo.style.transform = "translateY(0)";
  setTimeout(() => {
    experienceTeslaFooter.style.opacity = 1;
    experienceTeslaFooter.style.transform = "translateY(0)";
  }, 1000);
  experienceTeslaInfoVisible = true;
}

// Add event listeners
document.querySelectorAll("li").forEach((li) => {
  li.addEventListener("click", () => {
    switch (li.textContent) {
      case "Model S":
        showModelSInfo();
        break;
      case "Model 3":
        showModel3Info();
        break;
      case "Model X":
        showModelXInfo();
        break;
      case "Model Y":
        showModelYInfo();
        break;
      case "CyberTruck":
        showCyberInfo();
        break;
      case "Experience Tesla":
        showExperienceTeslaInfo();
        break;
    }
  });
});


f