# Davis Sebastian - Software Developer Portfolio

A modern, interactive portfolio website showcasing software development projects, full-stack expertise, and professional experience.

## 👨‍💻 About

Software Developer with expertise in the MERN stack, Python, and Java. This portfolio highlights my journey from building AI-powered solutions to creating scalable web applications, with experience at Commonwealth Bank of Australia and Calyirex Technologies.

## 🚀 Features

- **Smooth Animations**: GSAP and Framer Motion for fluid animations
- **Particle Background**: Interactive canvas-based particle system
- **Custom Cursor**: Unique cursor effects for desktop
- **Responsive Design**: Mobile-first approach with breakpoints
- **Form Validation**: Real-time email validation
- **Scroll Animations**: Elements animate on scroll
- **Parallax Effects**: Depth and motion on scroll
- **Next.js Ready**: Can be converted to Next.js app

## 🛠️ Technologies

- **Frontend**: React, HTML5, CSS3, JavaScript (ES6+), Tailwind CSS, Bootstrap
- **Backend**: Node.js, Express.js, Flask, Python
- **Database**: MongoDB, MySQL, PostgreSQL
- **Cloud & DevOps**: AWS (EC2, S3), Docker, Firebase
- **AI/ML**: TensorFlow, OpenCV, Computer Vision
- **Tools**: Git, VS Code, Postman, Selenium
- **Animations**: GSAP-like vanilla JS, Canvas API, Intersection Observer

## 📦 Quick Start

### Option 1: Static HTML (Current)
Simply open `index.html` in your browser or use a local server:

```bash
# Using Python
python -m http.server 3000

# Using Node.js http-server
npx http-server . -p 3000 -o

# Using PHP
php -S localhost:3000
```

### Option 2: Next.js Version (Recommended)

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
npm start
```

## 🎨 Customization

### Current Content

The portfolio is already populated with:
- **Davis Sebastian's** professional information
- Real projects: Virtual Try-On, LMS, VTU Results Extractor
- Work experience from Commonwealth Bank and Calyirex Technologies
- Education from Atria Institute of Technology
- Achievements including 1,200+ results processed, sports leadership, and awards

### To Update Further

Edit `index.html` to:
- Add project GitHub links or live demos
- Update social media links (LinkedIn, Twitter, etc.)
- Add more projects or experiences
- Customize the contact form backend

### Color Scheme

Modify CSS variables in `style.css`:
```css
:root {
    --primary-color: #00ff88;    /* Main accent color */
    --secondary-color: #0066ff;  /* Secondary accent */
    --bg-dark: #0a0a0a;         /* Dark background */
}
```

### Add More Sections

Follow the existing section pattern:
```html
<section id="new-section" class="new-section">
    <div class="container">
        <h2 class="section-title">
            <span class="section-number">05</span>
            Section Title
        </h2>
        <!-- Content here -->
    </div>
</section>
```

## 📱 Mobile Menu

The hamburger menu automatically activates on screens smaller than 968px.

## 🎯 Performance

- Lazy loading for animations
- RequestAnimationFrame for smooth animations
- Debounced scroll events
- Optimized particle count for mobile

## 🌐 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 📄 Files Structure

```
pfolio/
├── index.html       # Main HTML file
├── style.css        # All styles and animations
├── script.js        # JavaScript functionality
├── package.json     # Next.js dependencies (optional)
└── README.md        # This file
```

## 🎓 Next Steps

1. ✅ Content is already populated with your resume details
2. Add your project screenshots/images to the project cards
3. Connect contact form to a backend service (EmailJS, Formspree, etc.)
4. Add your LinkedIn and other social media URLs
5. Deploy to Vercel, Netlify, or GitHub Pages
6. Consider adding a blog section or testimonials

## 🌐 Deployment

### GitHub Pages
```bash
# Push to GitHub
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/davis109/portfolio.git
git push -u origin main
```

### Vercel (Recommended for Next.js)
```bash
npm install -g vercel
vercel
```

### Netlify
Simply drag and drop your folder to netlify.com/drop

## 📝 License

MIT License - Feel free to use this portfolio!

## 🤝 Credits

Built by Davis Sebastian with inspiration from modern portfolio designs.
Powered by vanilla JavaScript, GSAP-style animations, and lots of ☕

---

**Davis Sebastian** | [GitHub](https://github.com/davis109) | sebastiandavis109@gmail.com
