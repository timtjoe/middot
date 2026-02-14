#!/bin/bash

# 1. Exit on any error
set -e

echo "🚀 Initiating Middot Release Protocol..."

# 2. Local Validation
echo "🧪 Running logic assertion..."
bun test

echo "🔍 Running static analysis..."
bun run typecheck

# 3. Determine release type
TYPE=${1:-patch} # Default to patch if no argument provided

# 4. Versioning and Tagging
echo "🏷️ Bumping version ($TYPE)..."
bun run release:$TYPE

# 5. Deployment
echo "📦 Propelling to GitHub..."
git push --follow-tags origin main

echo "✅ Protocol complete. GitHub Actions will handle the synthesis and provenance."