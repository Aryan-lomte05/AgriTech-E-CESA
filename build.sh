#!/bin/bash

echo "🚀 Building Agri-Tech 2026..."

# Clean previous builds
rm -rf build

# Build with optimizations
GENERATE_SOURCEMAP=false npm run build

# Compress assets
echo "📦 Compressing assets..."
find build/static -type f \( -name "*.js" -o -name "*.css" \) -exec gzip -k {} \;

# Create .htaccess in build
cp public/.htaccess build/

echo "✅ Build complete! Ready for deployment."
echo "📊 Bundle size:"
du -sh build/
