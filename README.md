# Khedapati Sarkar Mandir Website

A modern, responsive, and feature-rich **practice project** - a spiritual and devotional website template for **Khedapati Sarkar Mandir** (खेड़ापति सरकार मंदिर). This is a learning/practice project exploring web design and development concepts.

**🌐 Live Demo:** [https://khedapati-mandir.netlify.app/](https://khedapati-mandir.netlify.app/)

## 🌟 Overview

This is a practice project built for learning purposes. It demonstrates a comprehensive website solution for a Hindu temple theme, featuring both English and Hindi (Devanagari) language support. The project combines modern web technologies with traditional spiritual aesthetics to create an engaging and responsive user experience. Perfect for practicing HTML, CSS, JavaScript, and responsive design concepts!

## ✨ Key Features

### 🏠 Main Website Features
- **Home Page** - Hero section with quick info cards, upcoming events, and call-to-action buttons
- **Live Darshan** - Stream live temple worship and rituals for devotees worldwide
- **Digital Seva Booking** - Online puja and service booking system
- **Temple Timings** - Clear display of darshan timings and schedule
- **Donation Portal** - Multiple donation options (सेवा पत्र - Seva Patra) with different contribution levels
- **Gallery** - Photo and video gallery showcasing temple events and activities
- **About Section** - Temple history, significance, and spiritual information
- **Contact Page** - Easy communication channel with the temple
- **Prayer Wall** - Community prayer and wishes sharing platform
- **Volunteer Program** - Opportunities to volunteer and serve the temple
- **Event Calendar** - Upcoming festivals, maha aartis, and special occasions

### 🛠 Technical Features
- **Bilingual Support** - Full English and Hindi (Devanagari) language integration
- **Responsive Design** - Mobile-first approach, works seamlessly on all devices
- **Modern UI/UX** - Contemporary design with spiritual aesthetics
- **Performance Optimized** - Fast loading, smooth animations, and interactions
- **Admin Dashboard** - Backend management system for temple staff
- **Dynamic Content** - JavaScript-driven dynamic content loading
- **Design Showcase** - Interactive demonstration of design components

## 📁 Project Structure

```
khedapati-mandir/
├── index.html                 # Main landing page
├── design-showcase.html       # Design component showcase
├── README.md                  # This file
├── css/
│   └── style.css             # Main stylesheet with all styling
├── js/
│   └── main.js               # JavaScript functionality and interactivity
├── admin/
│   └── dashboard.html        # Admin control panel for temple management
└── pages/
    ├── about.html            # Temple history and significance
    ├── contact.html          # Contact form and information
    ├── donate.html           # Donation and Seva options
    ├── gallery.html          # Photo and video gallery
    ├── live-darshan.html     # Live streaming page
    ├── prayer-wall.html      # Community prayer sharing
    ├── puja-booking.html     # Online puja/seva booking
    ├── timings.html          # Temple timings and schedule
    └── volunteer.html        # Volunteer application page
```

## 🎨 Design System

### Color Palette
- **Primary Brown** (#8B4513) - Traditional temple warmth
- **Secondary Brown** (#D2691E) - Complementary brown
- **Saffron** (#FFA500) - Spiritual significance
- **Gold** (#FFD700) - Prosperity and divinity
- **Accent Orange** (#FF8C00) - Energy and devotion
- **Cream** (#FFF8DC) - Soft background
- **Dark** (#1A1A1A) - Text and contrast

### Typography
- **Primary Font**: Inter - Modern and clean for body text and UI
- **Serif Font**: Playfair Display - Elegant for headings
- **Hindi Font**: Noto Sans Devanagari - Authentic Hindi text rendering

### Layout
- **Responsive Grid System** - Mobile-first responsive design
- **Modern Spacing** - Consistent spacing scale (xs, sm, md, lg, xl, xxl)
- **Smooth Transitions** - Subtle animations for better UX
- **Shadow Hierarchy** - Visual depth with carefully crafted shadows

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.) for editing files
- No server or backend required - this is a static frontend website

### Installation

1. **Clone or Download** the project
```bash
# If using git
git clone https://github.com/Chandan-Yadav24/khedapati-mandir.git
cd khedapati-mandir

# Or simply extract the project folder
```

2. **Open in Browser**
```bash
# Simply open index.html in your default browser
# Or use a local server for best experience
python -m http.server 8000
# Then visit http://localhost:8000
```

3. **Using a Local Server (Recommended)**
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have it)
npx http-server

# Using PHP
php -S localhost:8000
```

## 💻 Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Styling**: Custom CSS with CSS Variables for theming
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Google Fonts (Inter, Playfair Display)
- **Animation**: CSS Animations + JavaScript Intersection Observer API
- **Responsive**: Mobile-first responsive design methodology
- **Type**: Static HTML/CSS/JS - No backend server required

## 🎯 Key JavaScript Functionality

### Mobile Menu
- Toggle navigation on mobile devices
- Close menu on link click or escape key
- Smooth transitions and keyboard accessibility

### Animations
- **Animate on Scroll** (AOS) - Custom IntersectionObserver implementation
- Elements animate as they come into view
- Performance-optimized with automatic observer cleanup

### Back to Top
- Sticky button appears after scrolling 300px
- Smooth scroll to top functionality
- Auto-hide when at page top

### Dynamic Data
- Events system with upcoming activities
- Gallery management with image/video support
- Prayer data structure for community features
- Extensible architecture for future features

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components are optimized for touch and mouse interactions.

## 🔧 Customization

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --color-primary: #8B4513;
    --color-saffron: #FFA500;
    /* ... more variables */
}
```

### Content
- Update temple information in `pages/about.html`
- Modify timings in `pages/timings.html`
- Add events in the `eventsData` array in `js/main.js`

### Images & Gallery
- Add images to your project folder
- Reference them in the appropriate HTML files
- Use responsive `<img>` tags with proper alt text

## 🔐 Admin Dashboard

Access the admin panel at `admin/dashboard.html` for:
- Events management interface
- Gallery management
- Dashboard overview
- Content organization

*Note: This is a frontend interface. To make it functional, connect it to a backend service or use static JSON files to store data. Currently, it's a UI template ready for integration.*

## 📊 Features by Page

| Page | Features |
|------|----------|
| **Home** | Hero section, quick info cards, upcoming events, CTAs |
| **About** | Temple history, significance, deity information |
| **Timings** | Daily schedule, special timings, festivals |
| **Live Darshan** | Video streaming integration, schedule |
| **Gallery** | Photo gallery, video showcase, events gallery |
| **Donate** | Donation options, Seva contributions, payment integration |
| **Puja Booking** | Online booking form, availability calendar |
| **Contact** | Contact form, location map, phone/email |
| **Prayer Wall** | Community prayers, wishes, testimonials |
| **Volunteer** | Application form, opportunities, benefits |
| **Admin** | Dashboard, content management, analytics |

## 🎓 Best Practices Implemented

- ✅ **Semantic HTML5** - Proper HTML structure
- ✅ **CSS Variables** - Easy theming and maintenance
- ✅ **Mobile-First** - Responsive design approach
- ✅ **Accessibility** - Proper ARIA labels and semantic elements
- ✅ **Performance** - Optimized loading and animations
- ✅ **SEO Friendly** - Meta tags, proper heading hierarchy
- ✅ **Bilingual Support** - English and Hindi content
- ✅ **Clean Code** - Well-commented and organized

## 🌐 Deployment

This static website can be deployed to any web hosting platform:
- **GitHub Pages** - Free hosting for static sites
- **Netlify** - Simple drag-and-drop deployment
- **Vercel** - Fast static site hosting
- **Traditional Web Hosting** - Any hosting provider supporting static files
- **AWS S3 + CloudFront** - Scalable static site hosting

No server configuration or backend setup required. Simply upload the files and serve them as static content.

## 📈 Future Enhancements

- [ ] Backend API integration for dynamic content and database
- [ ] User authentication system
- [ ] Payment gateway integration (Razorpay, PayPal, etc.) for online donations
- [ ] Live video streaming platform integration
- [ ] Contact form email notifications
- [ ] Mobile app version
- [ ] Multi-language support expansion (beyond English/Hindi)
- [ ] Search functionality
- [ ] Blog/News section
- [ ] Database for events, gallery, and user submissions

## 🤝 Contributing

To contribute to this project:

1. Create a feature branch (`git checkout -b feature/YourFeature`)
2. Make your changes with proper documentation
3. Test thoroughly on mobile and desktop
4. Commit with clear messages (`git commit -m 'Add YourFeature'`)
5. Push to the branch (`git push origin feature/YourFeature`)
6. Open a Pull Request

## 📝 License

This project is created for Khedapati Sarkar Mandir. Usage and distribution should follow applicable guidelines.

## � What You Can Learn From This Project

- **HTML5 Structure** - Semantic markup and proper document structure
- **CSS Mastery** - CSS variables, Grid, Flexbox, animations, responsive design
- **JavaScript Fundamentals** - DOM manipulation, event handling, scroll behavior
- **Responsive Design** - Mobile-first approach and media queries
- **Bilingual Support** - Handling multiple languages in web projects
- **UI/UX Design** - Color theory, spacing, typography, component design
- **Web Best Practices** - Accessibility, performance, clean code

## 🙏 Learning Resources Used

- Inspiration from modern spiritual web design patterns
- Font Awesome for beautiful icons
- Google Fonts for typography
- CSS custom properties and modern layout techniques
- JavaScript Intersection Observer API for animations
- Mobile-first responsive design practices

## 📅 Version History

**Version 1.0** (Current)
- Initial release
- Core features implemented
- Bilingual support
- Responsive design
- Admin dashboard
⚠️ Disclaimer

This is a **practice/learning project** created for educational purposes only. It is not affiliated with any actual temple or organization. The content is fictional and created for demonstration and learning web development skills.

---

**Built for practice and learning.**  
*Happy Coding! 🚀rn web technologies.**  
*Jai Shri Khedapati Sarkar! 🙏*
