#!/bin/bash

# Project Validation Script
echo "🔍 Validating DentalBotPro project structure..."

# Check required files
files=(
    "package.json"
    "next.config.js" 
    "tailwind.config.js"
    "postcss.config.js"
    "pages/_app.js"
    "pages/_document.js"
    "pages/index.js"
    "components/Header.js"
    "components/Hero.js"
    "components/Features.js"
    "components/Contact.js"
    "components/Footer.js"
    "components/AboutModal.js"
    "components/Testimonials.js"
    "styles/globals.css"
    "styles/custom.css"
    "public/logo.svg"
    "README.md"
)

missing_files=()

for file in "${files[@]}"; do
    if [ ! -f "$file" ]; then
        missing_files+=("$file")
    fi
done

if [ ${#missing_files[@]} -eq 0 ]; then
    echo "✅ All required files are present"
else
    echo "❌ Missing files:"
    for file in "${missing_files[@]}"; do
        echo "  - $file"
    done
    exit 1
fi

# Check package.json structure
if grep -q '"next"' package.json && grep -q '"react"' package.json && grep -q '"tailwindcss"' package.json; then
    echo "✅ package.json has required dependencies"
else
    echo "❌ package.json is missing required dependencies"
    exit 1
fi

echo "✅ Project validation completed successfully!"
echo ""
echo "🚀 Ready for deployment!"
echo ""
echo "Next steps:"
echo "1. Run: npm install"
echo "2. Run: npm run build"
echo "3. Run: npm start"
echo ""
echo "For Vercel deployment:"
echo "1. Push to GitHub"
echo "2. Connect to Vercel"
echo "3. Deploy automatically"