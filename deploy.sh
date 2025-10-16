#!/bin/bash

# DentalBotPro Deployment Script
echo "🚀 Starting DentalBotPro deployment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Check if installation was successful
if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies. Trying alternative method..."
    # Try with different npm configurations
    npm config set prefix ~/.npm-global
    export PATH=~/.npm-global/bin:$PATH
    npm install
fi

echo "✅ Dependencies installed successfully"

# Build the project
echo "🏗️  Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "🎉 DentalBotPro is ready for deployment!"
    echo ""
    echo "To start the development server: npm run dev"
    echo "To start the production server: npm start"
    echo ""
    echo "Deploy to Vercel:"
    echo "1. Push to GitHub repository"
    echo "2. Connect repository to Vercel"
    echo "3. Deploy automatically"
else
    echo "❌ Build failed. Please check the error messages above."
    exit 1
fi