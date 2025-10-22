# Muhammad Waleed Khalil - Portfolio

A customized portfolio built with Next.js and TailwindCSS showcasing the work of Muhammad Waleed Khalil, a Full-Stack Developer and AI Integration Specialist.

## 👨‍💻 About

This portfolio showcases Muhammad Waleed Khalil's expertise in full-stack development, AI integration, and modern web technologies. With 4+ years of experience delivering SaaS, e-commerce, and government platforms, this site demonstrates his technical capabilities and project achievements.

## 🚀 Features

- **Fully Responsive Design** - Optimized for all devices and screen sizes
- **Dark/Light Mode Toggle** - Elegant theme switching with smooth transitions
- **Smooth Animations** - Powered by GSAP and Framer Motion
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Performance Optimized** - Fast loading with Next.js Image optimization
- **Royalty-Free Images** - All images sourced from Unsplash
- **CV Download** - One-click PDF resume download
- **Contact Integration** - Easy-to-use contact information and links

## 🛠️ Tech Stack

- **Next.js 14** - React framework for production
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Declarative animations for React
- **GSAP** - Professional-grade animation library
- **Lenis Scroll** - Smooth scrolling experience

## 📂 Project Structure

```
foliotemplate-main/
├── src/
│   ├── app/              # Next.js app router
│   ├── components/       # React components
│   │   ├── Home/         # Home page sections
│   │   └── ...           # Shared components
│   ├── data/             # JSON data files
│   │   ├── projects.json # Project portfolio data
│   │   └── services.json # Services offered
│   ├── utils/            # Utility functions and data imports
│   └── types/            # TypeScript type definitions
├── public/               # Static assets
│   └── mwaleedkhalil-resume.pdf
└── ...
```

## 🎯 Key Sections

### Hero Section
- Name and professional title
- Engaging tagline highlighting expertise
- Call-to-action button

### About Section
- Professional background and experience
- Specializations and focus areas
- Key achievements and impact metrics

### Projects Section
- MOC-PULSE AI Interview System
- PMRU Government Dashboard
- IntelliDelve SaaS Platform
- E-Commerce Multi-Vendor Suite
- React Native Mobile Apps

### Services Section
- Full-Stack Web Development
- AI Integration & Smart Solutions
- Mobile App Development
- DevOps & Automation

### Skills & Education
- Technical skills organized by category
- Educational qualifications
- CV download functionality

### Contact Section
- Email: mwaleedkhalil@gmail.com
- Phone: +92 319-9648331
- LinkedIn: linkedin.com/in/mwaleedkhalil
- GitHub: github.com/Muhammad-Waleed-Khalil

## 💻 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd foliotemplate-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚢 Deployment to Vercel

### Method 1: Deploy via Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo>
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Custom Domain Setup**
   - Go to Project Settings → Domains
   - Add `waleedkhalil.dev`
   - Follow DNS configuration instructions
   - Update your domain registrar's DNS settings

### Method 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Environment Variables (if needed)

If you add any API integrations in the future:

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://waleedkhalil.dev
# Add other variables as needed
```

## 📝 Customization Guide

### Update Personal Information

1. **Edit metadata** in `src/app/layout.tsx`
2. **Update contact info** in `src/components/Footer.tsx`
3. **Modify hero section** in `src/components/Home/Hero.tsx`
4. **Change about section** in `src/components/Home/About.tsx`

### Add/Edit Projects

Edit `src/data/projects.json`:

```json
{
  "id": 1,
  "title": "Your Project Name",
  "description": "Brief description",
  "image": "https://images.unsplash.com/photo-xxxxx",
  "technologies": ["React", "Node.js"],
  "year": "2024",
  "featured": true
}
```

### Add/Edit Services

Edit `src/data/services.json`:

```json
{
  "id": 1,
  "title": "Your Service",
  "description": "Service description",
  "technologies": ["Tech1", "Tech2"],
  "image": "https://images.unsplash.com/photo-xxxxx"
}
```

### Update Skills

Edit `src/components/Home/SkillsEducation.tsx` to modify the skills object.

### Replace CV

Replace `public/mwaleedkhalil-resume.pdf` with your updated resume.

## 🖼️ Image Guidelines

All images are sourced from Unsplash (royalty-free, no attribution required):

- Hero images: Developer workspace, coding setup
- About images: Tech-themed, professional coding environments
- Service images: Relevant technology visualizations
- Project images: Screenshots or representative imagery

To change images, simply replace the Unsplash URL in the component or JSON file.

## 🎨 Color Scheme

The portfolio uses a warm, professional color scheme:

- **Light Mode Background**: `#F5E7D3` (Soft beige)
- **Light Mode Text**: `#AC4800` (Brown/orange)
- **Dark Mode Background**: `#1D1C1C` (Dark gray)
- **Dark Mode Text**: `#F5E7D3` (Soft beige)

Customize colors in `tailwind.config.ts`.

## 📱 Responsive Breakpoints

- **xs**: 480px
- **sm**: 768px
- **md**: 992px
- **lg**: 1200px
- **xl**: 1320px
- **2xl**: 1920px

## 🔧 Build & Production

```bash
# Build for production
npm run build

# Start production server locally
npm run start

# Run linter
npm run lint
```

## 📄 License

This project is based on the FolioTemplate by Jasmine Maduafokwa and customized for Muhammad Waleed Khalil. Feel free to use and modify as needed.

## 🙏 Credits

- **Original Template**: [FolioTemplate](https://github.com/rutaganda-salim/foliotemplate) by Jasmine Maduafokwa
- **Images**: [Unsplash](https://unsplash.com) - Royalty-free photography
- **Animations**: GSAP & Framer Motion
- **Customization**: Tailored for Muhammad Waleed Khalil

## 📞 Contact

**Muhammad Waleed Khalil**
- 📧 Email: mwaleedkhalil@gmail.com
- 📱 Phone: +92 319-9648331
- 💼 LinkedIn: [mwaleedkhalil](https://linkedin.com/in/mwaleedkhalil/)
- 🐙 GitHub: [Muhammad-Waleed-Khalil](https://github.com/Muhammad-Waleed-Khalil)
- 📍 Location: Islamabad, Pakistan

---

**Status**: ✅ Available for Freelance & Full-time opportunities

Built with ❤️ by Muhammad Waleed Khalil