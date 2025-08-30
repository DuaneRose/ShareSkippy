#!/bin/bash

echo "🚀 ShipFast Template Setup"
echo "=========================="

# Check if .env.local already exists
if [ -f ".env.local" ]; then
    echo "⚠️  .env.local already exists. Skipping environment file creation."
else
    echo "📝 Creating .env.local from template..."
    cp env.example .env.local
    echo "✅ .env.local created successfully!"
    echo "📋 Please edit .env.local with your actual API keys and configuration."
fi

echo ""
echo "🔧 Next steps:"
echo "1. Edit .env.local with your API keys"
echo "2. Update config.js with your app details"
echo "3. Run 'npm run dev' to start development"
echo ""
echo "📖 See SETUP_GUIDE.md for detailed instructions"
echo ""
echo "🎉 Happy coding!"
