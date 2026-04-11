#!/usr/bin/env bash
# run-all-services.sh — Runs all 9 remaining services
# Usage: bash scripts/seo-automation/run-all-services.sh

set -e
export PATH="/usr/local/bin:/opt/homebrew/bin:$HOME/.nvm/versions/node/$(ls $HOME/.nvm/versions/node 2>/dev/null | tail -1)/bin:$PATH"

SERVICES=(
  "web-development"
  "ppc-advertising"
  "social-media-marketing"
  "gmb-optimization"
  "graphic-designing"
  "video-editing"
  "content-marketing"
  "ai-automation"
  "chatbot-development"
)

TOTAL=${#SERVICES[@]}
DONE=0
FAILED=0

echo ""
echo "🚀 Starting SEO automation for $TOTAL services"
echo "================================================"

for SERVICE in "${SERVICES[@]}"; do
  DONE=$((DONE + 1))
  echo ""
  echo "[$DONE/$TOTAL] Processing: $SERVICE"
  echo "─────────────────────────────────────"

  # Step 1: Fetch keywords
  echo "  📥 Fetching keywords..."
  if node scripts/seo-automation/1-fetch-keywords.js "$SERVICE" 2>&1 | grep -E "(✅|❌|⚠️|💾)"; then
    echo "  ✅ Keywords fetched"
  else
    echo "  ❌ Fetch failed — skipping"
    FAILED=$((FAILED + 1))
    continue
  fi

  # Step 2: Cluster
  echo "  🧩 Clustering..."
  node scripts/seo-automation/2-cluster-keywords.js "$SERVICE" 2>&1 | grep -E "(✅|clusters|💾)"

  # Step 3: Generate pages
  echo "  📄 Generating pages..."
  node scripts/seo-automation/3-generate-pages.js "$SERVICE" 2>&1 | grep -E "(✅|Generated|Skipped|Summary|💾)"

  echo "  ✅ $SERVICE done!"
done

echo ""
echo "================================================"
echo "✅ All done! Succeeded: $((TOTAL - FAILED)) | Failed: $FAILED"
echo ""
echo "📊 Total pages generated:"
ls data/seo-automation/pages/ | wc -l
echo ""
echo "Next: git add -A && git commit && git push"
echo "Then deploy to VPS"
