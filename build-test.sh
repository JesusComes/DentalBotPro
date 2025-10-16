#!/bin/bash

echo "🚀 Testing DentalBotPro build process..."
echo ""

# Check Node.js version
echo "Node.js version:"
node --version
echo ""

# Check npm version  
echo "npm version:"
npm --version
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install
echo ""

# Run linting
echo "🔍 Running ESLint..."
npm run lint
echo ""

# Build the project
echo "🏗️ Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ BUILD SUCCESSFUL!"
    echo "🎉 DentalBotPro is ready for Vercel deployment!"
    echo ""
    echo "🔗 To deploy:"
    echo "1. Commit and push the updated package.json"
    echo "2. Trigger a new deployment on Vercel"
    echo "3. Build will succeed with zero errors!"
else
    echo ""
    echo "❌ BUILD FAILED!"
    echo "Please check the error messages above."
    exit 1
fi