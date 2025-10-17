# DentalBot Pro - AI-Powered Dental Assistant

A modern, responsive website for DentalBot Pro built with Next.js 14, React 18, and Tailwind CSS.

## Features

- 🎨 **Modern Design**: Clean, professional design with dental-themed colors
- 🌍 **Multi-language Support**: Complete translation system (English, German, French, Russian)
- 📱 **Responsive**: Mobile-first design that works on all devices
- ⚡ **Next.js 14**: Built with the latest Next.js features including App Router
- 🎯 **Sections Included**:
  - Hero section with animated elements
  - Problems & Solutions
  - Features showcase
  - Benefits with statistics
  - Pricing plans
  - Customer testimonials
  - Contact form
  - Integration showcase

## Quick Start

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
   ```

4. Deploy:
   ```bash
   npm run start
   ```

## Project Structure

```
/
├── app/
│   ├── layout.js          # Root layout with language provider
│   ├── page.js            # Main homepage
│   └── globals.css        # Global styles
├── components/            # All React components
├── contexts/              # React contexts (Language)
├── translations/          # JSON translation files
├── public/               # Static assets
└── tailwind.config.js    # Tailwind configuration
```

## Deployment

This project is optimized for Vercel deployment. Simply connect your repository to Vercel and it will automatically build and deploy.

## Technologies Used

- Next.js 14
- React 18
- Tailwind CSS
- Font optimization with `next/font`

## License

© 2025 DentalBot Pro. All rights reserved.