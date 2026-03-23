# Modern Dark Mode Portfolio Website

A sleek, responsive portfolio website built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. This template showcases your projects, skills, and experience with smooth animations and a professional dark theme.

## 🎨 Features

- ✨ **Modern Dark Theme** - Sleek black and gray palette with vibrant blue and purple accents
- 📱 **Fully Responsive** - Mobile-first design that looks great on all devices
- ⚡ **Fast Performance** - Optimized with Next.js for excellent loading speeds
- 🎬 **Smooth Animations** - Framer Motion animations for engaging interactions
- 📦 **Component-Based** - Reusable, maintainable component architecture
- ♿ **Accessible** - Semantic HTML with proper contrast ratios
- 🔍 **SEO Optimized** - Meta tags and structured content for better search visibility
- 🌊 **Smooth Scrolling** - Native smooth scroll behavior with anchor links

## 📋 Sections

1. **Hero Section** - Eye-catching introduction with name and call-to-action buttons
2. **About Me** - Your background, stats, and current tech stack
3. **Projects** - Responsive grid showcase of your projects with cards
4. **Skills** - Organized tech stack with visual progress indicators
5. **Contact** - Contact information, form, and social media links
6. **Footer** - Navigation links and version info

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Navigate to project directory:**
   ```bash
   cd portfolio-site
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - Navigate to `http://localhost:3000`

## 🔧 Customization

### Update Your Information

#### Profile Information
Edit `src/app/page.tsx` and component files to update:
- Your name in HeroSection
- Bio and background in AboutSection
- Contact email in ContactSection

#### Projects
Update the `projects` array in `src/components/ProjectsSection.tsx`:
```typescript
const projects: Project[] = [
  {
    id: '1',
    title: 'Your Project',
    description: 'Project description',
    technologies: ['React', 'TypeScript'],
    githubUrl: 'https://github.com/...',
    liveUrl: 'https://...',
    featured: true,
  },
  // ... more projects
];
```

#### Skills
Modify the `skillCategories` object in `src/components/SkillsSection.tsx`:
```typescript
const skillCategories = {
  frontend: [
    { name: 'React', icon: <SiReact />, level: 95, category: 'frontend' },
    // ... more skills
  ],
};
```

#### Social Links
Update social links in `src/components/ContactSection.tsx`:
```typescript
const socialLinks = [
  {
    label: 'GitHub',
    url: 'https://github.com/yourprofile',
    icon: <FaGithub className="text-2xl" />,
  },
  // ... more links
];
```

### Color Customization

Modify colors in `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    500: '#0ea5e9', // Change primary color
    // ... other shades
  },
}
```

### Fonts & Typography

Customize in `tailwind.config.ts` or `src/app/globals.css`

## 📦 Project Structure

```
portfolio-site/
├── public/               # Static assets
├── src/
│   ├── app/
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   └── types/
│       └── index.ts      # TypeScript types
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies
```

## 🛠️ Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

## 📚 Technologies Used

- **Framework:** [Next.js 16+](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (V4)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Linting:** [ESLint](https://eslint.org/)

## 🎬 Animation Capabilities

The portfolio includes:
- Fade-in animations on scroll
- Slide-in effects for sections
- Hover animations on interactive elements
- Floating background elements
- Progress bar animations for skills
- Smooth transition effects

## 🔐 Form Configuration

The contact form in `ContactSection.tsx` is set up with client-side validation. To enable email sending, connect it to a backend service:

**Options:**
- [Nodemailer](https://nodemailer.com/)
- [SendGrid](https://sendgrid.com/)
- [AWS SES](https://aws.amazon.com/ses/)
- [Formspree](https://formspree.io/)

## ♿ Accessibility

The portfolio includes:
- Semantic HTML elements
- Proper heading hierarchy
- ARIA labels for interactive elements
- Sufficient color contrast (WCAG AA)
- Keyboard navigation support
- Alt text for images

## 📈 Performance

- ✅ Optimized images
- ✅ Code splitting with Next.js
- ✅ Minimal CSS bundle
- ✅ Fast initial page load
- ✅ Smooth animations without jank

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

- **Netlify:** Connect GitHub and deploy
- **AWS:** Use AWS Amplify or S3 + CloudFront
- **Self-hosted:** Build and serve with `npm run build` + `npm start`

## 📝 License

This project is open source and available for personal use.

## 💡 Tips

- Replace placeholder project descriptions and links
- Update the footer year automatically (already configured)
- Add your actual contact email
- Update social media profile links
- Consider adding a blog section if needed
- Add analytics (Google Analytics, etc.)
- Test on mobile devices during development

## 🐛 Troubleshooting

**Port already in use:**
```bash
npm run dev -- -p 3001
```

**Build errors:**
```bash
rm -rf .next node_modules
npm install
npm run build
```

**TypeScript errors:**
```bash
npm run type-check
```

## 📞 Support

For issues or questions:
- Check Next.js documentation
- Review Tailwind CSS docs
- Explore Framer Motion examples

## 🎯 Future Enhancements

Consider adding:
- Blog/Articles section
- Dark mode toggle (currently always dark)
- Search functionality
- Comments/feedback section
- Video background
- 3D elements
- Multi-language support

---

**Built with ❤️ using modern web technologies**
