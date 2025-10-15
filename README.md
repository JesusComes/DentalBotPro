# DentalBotPro - Modern Landing Page

A stunning, modern landing page for DentalBotPro - AI assistant for dental practices. Built with React, Next.js, and Tailwind CSS featuring smooth animations, multilingual support, and a responsive design.

## 🚀 Features

- **Modern Design**: Brutally modern and visually stunning interface
- **Multilingual Support**: German, English, and French translations
- **Responsive**: Optimized for all device sizes
- **Smooth Animations**: Framer Motion powered animations
- **Performance Optimized**: Next.js with SSG/SSR capabilities
- **SEO Ready**: Meta tags, structured data, and sitemap
- **Contact Form**: Interactive demo booking form
- **Interactive Components**: Hover effects, smooth scrolling, and micro-interactions

## 🛠 Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Fonts**: Inter (Google Fonts)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dentalbotpro-modern
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to a Git repository
2. Import your project on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Manual Deployment
1. Build the project: `npm run build`
2. Start the production server: `npm start`

## 🌐 Multilingual Support

The website supports three languages:
- **German (de)**: Default language
- **English (en)**: Full translation
- **French (fr)**: Full translation

Language switching is handled through the language selector in the header.

## 📱 Sections

1. **Hero**: Eye-catching intro with animated elements
2. **Problems**: Pain points for dental practices
3. **Solution**: How DentalBotPro solves these issues
4. **Features**: Detailed feature showcase
5. **Pricing**: Three-tier pricing structure
6. **Contact**: Demo booking form
7. **Footer**: Company info and links

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js`:
- Primary Blue: `#0A66C2`
- Accent Teal: `#00B4A6`
- Additional accent colors for variety

### Content
All content is managed through the translation system in `src/lib/translations.ts`. Update the translations object to modify text content.

### Styling
- Global styles: `src/app/globals.css`
- Component-specific styling: Tailwind classes within components
- Custom animations: Defined in Tailwind config

## 📧 Contact Information

The website includes the following contact details:
- **Email**: info@dentalbotpro.de
- **Phone**: +49 (0) 30 120 844 30
- **Location**: Berlin, Deutschland

## 🔧 Environment Variables

Create a `.env.local` file for any environment-specific variables:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 📄 License

This project was created by MiniMax Agent. All rights reserved.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions about this implementation, please contact the development team.

---

**Built with ❤️ by MiniMax Agent**
