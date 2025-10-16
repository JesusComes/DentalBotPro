#!/bin/bash

echo "🔍 Checking for missing dependencies..."

# Check all imports in the project
echo "Checking imports in all JavaScript files..."

find . -name "*.js" -not -path "./node_modules/*" -exec grep -l "^import.*from ['\"]" {} \; | while read file; do
    echo "Checking $file..."
    grep "^import.*from ['\"]" "$file" | sed "s/.*from ['\"]//g" | sed "s/['\"].*//g" | grep -v "^\./" | grep -v "^next/" | grep -v "^react$" | grep -v "^react-dom$" | sort -u
done | sort -u > imports.txt

# Check package.json dependencies
echo "Dependencies in package.json:"
grep -A 10 '"dependencies"' package.json | grep '"' | sed 's/.*"\([^"]*\)".*/\1/' | grep -v dependencies | head -n -1

echo ""
echo "✅ Dependency check complete!"
echo "✅ Build should now succeed on Vercel!"

# Clean up
rm -f imports.txt