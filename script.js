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
        } else {
          themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
          localStorage.setItem("theme", "light");
        }
      });

      // Typing Animation---------------------------------------------------------
      const typingText = document.getElementById("typingText");
      const texts = [
        "Web Developer",
        "UI/UX Designer",
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
          modals.forEach(modal => {
            if (event.target === modal) {
              modal.style.display = "none";
            }
          });
        };

      // Set current year in footer---------------------------------------------------------
      document.getElementById("year").textContent = new Date().getFullYear();

      // Form submission---------------------------------------------------------
      const contactForm = document.getElementById("contactForm");

      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Get form values---------------------------------------------------------
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        // alerting the message---------------------------------------------------------
        alert(
          `Thank you, ${name}! Your message has been sent. I'll get back to you soon.`
        );

        // Reset form---------------------------------------------------------
        contactForm.reset();
      });