// Dark/Light Mode Toggle---------------------------------------------------------
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Checking that saved color scheme---------------------------------------------------------
const currentTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");

// Applying the theme for color scheme---------------------------------------------------------
if (currentTheme === "dark") {
  body.classList.add("dark-mode");
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem("theme", "dark");
    document.querySelector(".curzor").style.backgroundColor = "white";
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem("theme", "light");
    document.querySelector(".curzor").style.backgroundColor = "rgba(0, 0, 0)";
  }
});

// Cursor animation
var bodys = document.querySelector("body");
var curzor = document.querySelector(".curzor");

bodys.addEventListener("mousemove", function (dets) {
  gsap.to(curzor, {
    x: dets.x,
    y: dets.y,
    duration: 1,
    ease: "back.out",
  });
});

// var nav = document.querySelector(".nav-links");

gsap.from(".nav-links li", {
  y: -20,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  delay: 0.5,
  ease: "power2.out",
});

gsap.from("nav .logo", {
  y: -20,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  delay: 0.1,
  ease: "power2.out",
});

gsap.from(".skill-cards div", {
  y: 20,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  delay: 0.3,
  ease: "power2.out",
});

// Typing Animation---------------------------------------------------------
const typingText = document.getElementById("typingText");
const texts = [
  "Web Developer",
  "Back End Developer",
  "Freelancer",
  "Front End Developer",
  "MERN Stack Developer",
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function type() {
  const currentText = texts[textIndex];

  if (isDeleting) {
    typingText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
  } else {
    typingText.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 100;
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    typingSpeed = 1500; // Pause at end of word
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    typingSpeed = 500; // Pause before typing next word
  }

  setTimeout(type, typingSpeed);
}

// Start typing animation---------------------------------------------------------
setTimeout(type, 1000);

// Mobile Navigation---------------------------------------------------------
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.innerHTML = navLinks.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link---------------------------------------------------------
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Scroll Animation---------------------------------------------------------
const animateElements = document.querySelectorAll(".animate");

function checkScroll() {
  animateElements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementPosition < windowHeight - 100) {
      element.classList.add("show");
    }
  });
}

const loadElements = document.querySelectorAll(".skill-progress");

function checkScrolls() {
  loadElements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementPosition < windowHeight - 100) {
      element.classList.add("load");
    }
  });
}

// gsap.to(".skill-bar .skill-progress", {
//   x: 150,
//   duration: 2,
//   delay: 0.5,
//   scrollTrigger: {
//     trigger: ".skillbar",
//     scoller: "body",
//     markers: true,
//     start: "top 100%",
//     end: "top 10%",
//   },
// });

// Trigger on scroll and on load
window.addEventListener("scroll", checkScrolls);
window.addEventListener("load", checkScrolls);

// Starting check---------------------------------------------------------
checkScroll();

// Check on scroll---------------------------------------------------------
window.addEventListener("scroll", checkScroll);

// Open and Close function for card---------------------------------------------------------
function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Close card if clicks on outside (Extra )---------------------------------------------------------
window.onclick = function (event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};

// Set current year in footer---------------------------------------------------------
document.getElementById("year").textContent = new Date().getFullYear();



// Bubbles on hover-------------------------------------------------------------
document.body.addEventListener("mousemove", function (e) {
  const rect = document.body.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const isDarkMode = document.body.classList.contains("dark-mode");

  // Theme-based color sets
  const darkColors = ["#61dafb", "#fcd34d", "#f87171", "#34d399"]; // blue, yellow, red, green
  const lightColors = ["#ff6b6b", "#60a5fa", "#a78bfa", "#facc15"]; // indigo, pink, teal, amber

  const colors = isDarkMode ? darkColors : lightColors;

  if (Math.random() > 0.7) {
    const bubble = document.createElement("div");
    bubble.className = "bubble";

    const angle = Math.random() * Math.PI * 2;
    const distance = 20 + Math.random() * 30;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance - 20;

    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = 6 + Math.random() * 4;

    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.backgroundColor = color;
    bubble.style.setProperty("--tx", `${tx}px`);
    bubble.style.setProperty("--ty", `${ty}px`);
    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;

    document.body.appendChild(bubble);

    setTimeout(() => bubble.remove(), 2000);
  }
});

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// Form submission handler
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Get form values
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const btnText = submitBtn.querySelector('.btn-text');
    const originalText = btnText.textContent;
    btnText.innerHTML = '<i class="fas fa-spinner"></i> Sending...';
    submitBtn.disabled = true;

    try {
        // Send form data to FormSubmit using your activation token
        const response = await fetch('https://formsubmit.co/ajax/&&$1255a4328d3049d21ec725bc972ff', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        const result = await response.json();
        
        if (result.success) {
            showToast(`Thank you, ${data.name}! Your message has been sent successfully. I'll get back to you soon.`);
            contactForm.reset();
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        console.error('Form submission error:', error);
        showToast("Sorry, there was an error sending your message. Please try again later or contact me directly at sanathrai03@gmail.com", "error");
    } finally {
        // Reset button state
        btnText.innerHTML = originalText;
        submitBtn.disabled = false;
    }
});