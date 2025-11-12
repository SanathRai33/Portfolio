# 🚀 Sanath Rai - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and professional experience. Built with vanilla HTML, CSS, and JavaScript, featuring smooth animations, dark mode support, and an interactive user experience.

## ✨ Features

### 🎨 Design & UI
- **Dark/Light Mode Toggle** - Seamless theme switching with localStorage persistence
- **Custom Cursor Animation** - Interactive cursor that follows mouse movement using GSAP
- **Bubble Effects** - Dynamic colored bubbles on mouse hover with theme-based colors
- **Smooth Scroll Animations** - Elements animate into view as you scroll
- **Responsive Design** - Fully responsive layout for all device sizes
- **Modern UI/UX** - Clean, professional design with gradient accents

### 🎭 Interactive Elements
- **Typing Animation** - Dynamic typing effect displaying roles (Web Developer, MERN Stack Developer, etc.)
- **Skill Progress Bars** - Animated progress bars that load on scroll
- **Project Modals** - Detailed project information in elegant modal windows
- **Mobile Navigation** - Hamburger menu for mobile devices
- **Contact Form** - Functional contact form integrated with FormSubmit

### 📱 Sections
- **Hero Section** - Introduction with animated typing text and social links
- **About Me** - Personal information with skill progress indicators
- **Skills** - Interactive skill cards with technology icons
- **Certificates** - Showcase of earned certifications
- **Projects** - Featured projects with detailed modals
- **Contact** - Contact form and information

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables, animations, and responsive design
- **JavaScript (ES6+)** - Interactive functionality and animations

### Libraries & Tools
- **GSAP (GreenSock)** - Advanced animations and scroll effects
- **Font Awesome** - Icon library for social media and UI icons
- **FormSubmit** - Contact form backend service
- **Devicons** - Technology stack icons

## 📁 Project Structure

```
Portfolio/
│
├── index.html          # Main HTML file
├── style.css           # Stylesheet with dark mode support
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
│
├── images/
│   ├── Certificate/    # Certificate images
│   ├── Person/         # Personal photos
│   ├── Project/        # Project screenshots
│   └── mini/           # Mini project images
│
└── SanathRai_Resume.pdf # Resume file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SanathRai33/Portfolio.git
   cd Portfolio
   ```

2. **Open the project**
   - Simply open `index.html` in your web browser, or
   - Use a local development server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using VS Code Live Server extension
     # Right-click index.html > Open with Live Server
     ```

3. **Access the website**
   - If using a server: Navigate to `http://localhost:8000`
   - If opening directly: Double-click `index.html`
  
### 🌐Live
[Go Live](https://sanathrai33.github.io/Portfolio/)

## 🎯 Usage

### Navigation
- Click on navigation links to smoothly scroll to different sections
- Use the theme toggle button (moon/sun icon) to switch between dark and light modes
- On mobile devices, use the hamburger menu to access navigation

### Contact Form
- Fill out the contact form in the Contact section
- The form is integrated with FormSubmit and will send emails directly
- You'll receive a success notification upon submission

### Projects
- Click the "More" button on any project card to view detailed information
- Project modals include descriptions, technologies used, and links to code repositories
- Close modals by clicking the × button or clicking outside the modal

## 🎨 Customization

### Changing Colors
Edit CSS variables in `style.css`:
```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --dark-color: #2c3e50;
  --light-color: #ecf0f1;
}
```

### Updating Content
- **Personal Information**: Edit the HTML content in `index.html`
- **Skills**: Modify the skill cards in the Skills section
- **Projects**: Add or remove project cards in the Projects section
- **Contact Info**: Update contact details in the Contact section

### Form Configuration
Update the FormSubmit endpoint in `script.js`:
```javascript
const response = await fetch('https://formsubmit.co/ajax/YOUR_EMAIL', {
  // ... form configuration
});
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🌟 Key Features Explained

### Dark Mode
- Automatically detects system preference
- Saves user preference in localStorage
- Smooth transition between themes
- Theme-specific bubble colors

### Animations
- **GSAP Animations**: Smooth entrance animations for navigation and skill cards
- **Scroll Animations**: Elements fade in as they enter the viewport
- **Typing Effect**: Simulates typing and deleting text for role display
- **Progress Bars**: Animated skill progress bars that trigger on scroll

### Performance
- Optimized images and assets
- Efficient CSS animations
- Lazy loading for scroll-triggered animations
- Minimal external dependencies

## 📧 Contact

- **Email**: sanathrai03@gmail.com
- **Phone**: +91 6366242321
- **Location**: Puttur, Dakshina Kannada, Karnataka, India

### Social Links
- **Portfolio** [Go Live](https://sanathrai33.github.io/Portfolio/)
- **GitHub**: [@SanathRai33](https://github.com/SanathRai33/)
- **LinkedIn**: [Sanath Rai](https://www.linkedin.com/in/sanath-rai-18296b358/)
- **Instagram**: [@sannu_rai33](https://www.instagram.com/sannu_rai33)
- **Telegram**: [@sannu_rai33](https://t.me/sannu_rai33)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [GSAP](https://greensock.com/gsap/) for animation library
- [Font Awesome](https://fontawesome.com/) for icons
- [Devicons](https://devicon.dev/) for technology icons
- [FormSubmit](https://formsubmit.co/) for contact form backend

## 📝 Notes

- The portfolio is continuously updated with new projects and skills
- All project links and repositories are maintained and updated regularly
- The website is optimized for performance and SEO

---

**Built with ❤️ by Sanath Rai**
