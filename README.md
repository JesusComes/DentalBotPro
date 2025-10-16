# DentalBotPro

Ein moderner, professioneller KI-Assistent für Zahnarztpraxen, entwickelt mit Next.js, React und Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Vollständig responsive für Desktop, Tablet und Mobile
- **Modern UI/UX**: Brutaler moderner Look mit eleganten Animationen
- **Performance**: Optimiert für schnelle Ladezeiten und SEO
- **Accessibility**: ARIA-konform und semantisches HTML
- **Animations**: Smooth Framer Motion Animationen
- **TypeScript Ready**: Kann einfach zu TypeScript migriert werden

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Font Awesome
- **Fonts**: Inter (Google Fonts)

## 📦 Installation

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev

# Für Produktion bauen
npm run build

# Produktionsserver starten
npm start
```

## 🏗️ Projektstruktur

```
DentalBotPro/
├── components/          # React Komponenten
│   ├── Header.js       # Navigation und Logo
│   ├── Hero.js         # Hero Section
│   ├── Features.js     # Features und Probleme
│   ├── Testimonials.js # Vorteile Section
│   ├── Contact.js      # Kontakt Formular
│   ├── Footer.js       # Footer
│   └── AboutModal.js   # Über uns Modal
├── pages/              # Next.js Seiten
│   ├── _app.js        # App Wrapper
│   ├── _document.js   # HTML Document
│   └── index.js       # Hauptseite
├── public/             # Statische Assets
├── styles/             # CSS Dateien
│   ├── globals.css    # Global Styles
│   └── custom.css     # Custom Animations
└── ...config files
```

## 🎨 Design System

### Farben
- **Primary Blue**: #0A66C2
- **Accent Teal**: #00B4A6
- **Accent Purple**: #8B5CF6
- **Accent Orange**: #F59E0B
- **Accent Pink**: #EC4899

### Gradients
- `bg-gradient-blue`: Blauer Gradient
- `bg-gradient-teal`: Teal Gradient
- `bg-gradient-purple`: Lila Gradient

### Komponenten
- `btn-primary`: Primärer Button
- `btn-secondary`: Sekundärer Button
- `card`: Standard Karte
- `gradient-text`: Gradient Text

## 📱 Responsive Design

Das Layout passt sich automatisch an verschiedene Bildschirmgrößen an:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 Anpassungen

### Logo ändern
Ersetzen Sie `/public/logo.png` mit Ihrem eigenen Logo.

### Farben anpassen
Bearbeiten Sie `tailwind.config.js` um die Farbpalette anzupassen.

### Inhalte ändern
Alle Texte befinden sich in den entsprechenden Komponenten-Dateien.

## 🚀 Deployment

### Vercel (Empfohlen)
1. Repository auf GitHub pushen
2. Mit Vercel verbinden
3. Automatisches Deployment

### Andere Plattformen
```bash
npm run build
npm start
```

## 📧 Kontakt

Bei Fragen oder Anpassungswünschen:
- **Email**: info@dentalbotpro.com
- **Telefon**: +49 (0) 30 120 844 30

## 📄 Lizenz

© 2024 DentalBotPro. Alle Rechte vorbehalten.