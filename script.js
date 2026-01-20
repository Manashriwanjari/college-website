document.addEventListener("DOMContentLoaded", function () {
  includeHTML();
});

function includeHTML() {
  var z, i, elmnt, file, xhttp;

  z = document.getElementsByTagName("*");

  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("include-html");

    if (file) {
      xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Header not found";
          }
          elmnt.removeAttribute("include-html");
          includeHTML();
        }
      };

      // IMPORTANT FIX 👇
      xhttp.open("GET", "../" + file, true);
      xhttp.send();
      return;
    }
  }
}


// all slides //

const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");

let index = 0;
const total = dots.length;

function updateDots(i){
  dots.forEach(d => d.classList.remove("active"));
  dots[i].classList.add("active");
}

function slide(){
  index++;
  slides.style.transition = "transform 0.9s ease-in-out";
  slides.style.transform = `translateX(-${index * 100}%)`;

  if(index === total){
    setTimeout(() => {
      slides.style.transition = "none";
      slides.style.transform = "translateX(0)";
      index = 0;
    }, 900);
  }

  updateDots(index === total ? 0 : index);
}

setInterval(slide, 3000);



// Admission Form Validation // 
function validateForm(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let mobile = document.getElementById('mobile').value;
    let course = document.getElementById('course').value;
    if(name==="" || email==="" || mobile==="" || course===""){
        alert("All fields are required!");
        return false;
    }
    alert("Form Submitted Successfully!");
    return true;
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
 // principal //
 console.log("Principal Desk Loaded Successfully");

// toper//
// Auto slider already handled by CSS animation
console.log("Testimonials slider running");


//gallary//


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("morePhotosBtn").addEventListener("click", function () {
        window.location.href = "Photo.html";
    });
});

// all images//
document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".slide");
    let current = 0;

    const PAUSE_TIME = 3000;   // ⏸ image rukne ka time (video jaisa)
    const SLIDE_TIME = 800;    // 🎞 slide hone ka time (CSS se match)

    slides[0].style.left = "0";

    function nextSlide() {
        let currentSlide = slides[current];
        currentSlide.classList.add("exit");

        let next = (current + 1) % slides.length;
        let nextSlide = slides[next];

        nextSlide.style.transition = "none";
        nextSlide.style.left = "100%";
        nextSlide.offsetHeight; // force reflow

        nextSlide.style.transition = "left 0.8s ease-in-out";
        nextSlide.classList.add("active");
        nextSlide.style.left = "0";

        setTimeout(() => {
            currentSlide.classList.remove("active", "exit");
            currentSlide.style.left = "100%";
            current = next;
        }, SLIDE_TIME);
    }

    setInterval(nextSlide, PAUSE_TIME);
});

// about //
function openInstitute() {
  window.location.href = "institute.html";
}

function openFounder() {
  window.location.href = "FounderPresident.html";
}

function openVision() {
  window.location.href = "vision_&_mission.html";
}

function openInfrastructure() {
  window.location.href = "infrastructure.html";
}


function openAnnual() {
  window.location.href = "annual-report.html";
}

function openOurmanagement() {
  window.location.href = "our-management.html";
}


// corce //
function openElectrical() {
  window.location.href = "electrical.html";
}

function openCivil() {
  window.location.href = "civil.html";
}

function openMechanical() {
  window.location.href = "mechanical.html";
}

function openComputer() {
  window.location.href = "computer.html";
}
function openScienceandHumanities() {
  window.location.href = "science.html";
}

function openSyllabus() {
  window.location.href = "syllabus.html";
}

// admission //

function validateForm() {
  const mobile = document.querySelector('input[name="mobile"]').value;
  const error = document.getElementById("mobileError");

  error.innerText = "";

  if (!/^[0-9]{10}$/.test(mobile)) {
    error.innerText = "Please enter a valid 10 digit mobile number";
    return false;
  }
  return true;
}

function openmanagement() {
  window.location.href = "our-management.html";
}


// civil enginering//


function showSection(id, el) {

  // hide all sections
  document.querySelectorAll(".section").forEach(sec =>
    sec.classList.remove("active")
  );

  // show selected section
  document.getElementById(id).classList.add("active");

  // remove active state from all sidebar items
  document.querySelectorAll(".sidebar li").forEach(li =>
    li.classList.remove("active")
  );

  // add active class to clicked item
  el.classList.add("active");
}


//infrastructure//
const sections = document.querySelectorAll(".infra-box");

const observer = new IntersectionObserver(entries =>{
  entries.forEach(e =>{
    if(e.isIntersecting) e.target.classList.add("show");
  });
});

sections.forEach(s => observer.observe(s));

// scholarships //
const buttons = document.querySelectorAll(".tab-btn");
const tabs = document.querySelectorAll(".tab-content");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {

    // Remove active from others
    buttons.forEach(b => b.classList.remove("active"));
    tabs.forEach(t => t.classList.remove("active"));

    // Activate clicked button + target tab
    btn.classList.add("active");
    document.getElementById(btn.dataset.target).classList.add("active");
  });
});
  