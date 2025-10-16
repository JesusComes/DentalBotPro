#!/bin/bash

# DentalBotPro Deployment Script
echo "🚀 Starting DentalBotPro deployment process..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "🌐 Your website is ready for deployment!"
    echo ""
    echo "📋 Next steps:"
    echo "1. Upload the project to your hosting provider"
    echo "2. Run 'npm start' to start the production server"
    echo "3. Or deploy to Vercel with 'vercel --prod'"
    echo ""
    echo "🎉 DentalBotPro is ready to revolutionize dental practices!"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi