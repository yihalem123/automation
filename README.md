# AutomateAI - Modern AI Automation Landing Page

A stunning, professional, dark-themed glassmorphic landing page built with Next.js for AI automation companies. Features smooth animations, responsive design, and modern UI/UX patterns.

## 🌟 Features

### Design & Aesthetics
- **Dark Theme**: Modern dark color scheme with glassmorphism effects
- **Glassmorphism**: Transparent panels with blur effects and soft gradients
- **Neon Accents**: Cyan, purple, and blue accent colors for visual impact
- **Animated Particles**: Subtle floating particle background for depth
- **Smooth Animations**: Framer Motion powered micro-interactions

### Sections Included
1. **Hero Section**: Compelling headline with animated gradient background
2. **What We Do**: Service cards with glassmorphic styling
3. **How It Works**: 3-step process with timeline visualization
4. **Why Choose Us**: Stats cards and benefits
5. **Industries We Serve**: Grid of target industries
6. **Testimonials**: Customer success stories with results
7. **Book a Meeting**: Calendly integration ready
8. **LinkedIn Integration**: Social proof and connection features
9. **Footer**: Newsletter signup and comprehensive navigation

### Technical Features
- **Next.js 14**: Latest React framework with App Router
- **Tailwind CSS**: Utility-first styling with custom configuration
- **Framer Motion**: Smooth animations and micro-interactions
- **TypeScript**: Type-safe development
- **Mobile-First**: Fully responsive design
- **SEO Optimized**: Meta tags and structured data
- **Performance**: Optimized for Core Web Vitals

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/automateai-landing.git
   cd automateai-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Brand Configuration
Update the following in your components:

1. **Company Name**: Replace "AutomateAI" throughout the codebase
2. **Colors**: Modify `tailwind.config.js` neon color values
3. **Logo**: Update the Zap icon in Navbar and Footer components
4. **Contact Info**: Update email, phone, and address in Footer component

### Content Updates
- **Hero Section**: Edit headline and subheading in `Hero.tsx`
- **Services**: Modify service cards in `WhatWeDo.tsx`
- **Testimonials**: Replace with real customer testimonials in `Testimonials.tsx`
- **Industries**: Customize industry cards in `Industries.tsx`

### Integrations

#### Calendly Setup
Replace the mock calendar in `BookMeeting.tsx` with your Calendly embed:

```tsx
<div 
  className="calendly-inline-widget" 
  data-url="https://calendly.com/your-username/consultation"
  style={{ minWidth: '320px', height: '700px' }}
/>
<script 
  type="text/javascript" 
  src="https://assets.calendly.com/assets/external/widget.js" 
  async
/>
```

#### LinkedIn Integration
Update LinkedIn URLs in `LinkedInSection.tsx`:
- Company page URL
- Founder profile URL
- Replace mock posts with real LinkedIn feed

### SEO Configuration
Update metadata in `app/layout.tsx`:
- Title and description
- Open Graph tags
- Twitter card settings
- Verification codes

## 📁 Project Structure

```
app/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── WhatWeDo.tsx    # Services section
│   ├── HowItWorks.tsx  # Process section
│   ├── WhyChooseUs.tsx # Benefits and stats
│   ├── Industries.tsx  # Target industries
│   ├── Testimonials.tsx# Customer testimonials
│   ├── BookMeeting.tsx # Calendly integration
│   ├── LinkedInSection.tsx # LinkedIn features
│   ├── Footer.tsx      # Footer with newsletter
│   └── ParticleBackground.tsx # Animated background
├── globals.css         # Global styles and utilities
├── layout.tsx          # Root layout with metadata
└── page.tsx           # Main page component
```

## 🎯 Performance Optimizations

- **Lazy Loading**: Components load on scroll intersection
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **CSS Optimization**: Tailwind CSS purging unused styles
- **Font Loading**: Optimized Google Fonts loading

## 📱 Responsive Design

The landing page is fully responsive across all devices:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+
- **Large Screens**: 1440px+

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Environment Variables
Create a `.env.local` file for:
```
NEXT_PUBLIC_CALENDLY_URL=your-calendly-url
NEXT_PUBLIC_LINKEDIN_COMPANY=your-linkedin-company
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub repository
2. Connect to Vercel
3. Deploy with zero configuration

### Other Platforms
- **Netlify**: `npm run build` → Deploy `out/` folder
- **AWS Amplify**: Connect GitHub repository
- **DigitalOcean**: Use App Platform with Node.js

## 📊 Analytics Integration

Add Google Analytics to `app/layout.tsx`:

```tsx
import Script from 'next/script'

// Add to layout component
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
  strategy="afterInteractive"
/>
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💼 Business Use

This template is perfect for:
- AI/ML automation companies
- Digital marketing agencies
- SaaS automation platforms
- Business process optimization firms
- Consulting companies offering automation services

## 🆘 Support

For support and questions:
- Create an issue on GitHub
- Email: support@yourcompany.com
- Documentation: [Link to docs]

## 🎉 Acknowledgments

- **Framer Motion** for smooth animations
- **Tailwind CSS** for rapid styling
- **Lucide React** for beautiful icons
- **Next.js** team for the amazing framework

---

**Built with ❤️ for the automation community**
