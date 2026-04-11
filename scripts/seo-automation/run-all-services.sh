#!/usr/bin/env bash
# scripts/seo-automation/run-all-services.sh
# Usage: bash scripts/seo-automation/run-all-services.sh [--country uk|usa]

set -e
export PATH="/usr/local/bin:/opt/homebrew/bin:$HOME/.nvm/versions/node/$(ls $HOME/.nvm/versions/node 2>/dev/null | tail -1)/bin:$PATH"

# Parse --country flag
COUNTRY="usa"
for arg in "$@"; do
  if [[ "$arg" == "--country" ]]; then
    NEXT=1
  elif [[ "$NEXT" == "1" ]]; then
    COUNTRY="$arg"
    NEXT=0
  fi
done

SERVICES=(
  "seo-services"
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
echo "🚀 Starting SEO automation for $TOTAL services [$COUNTRY]"
echo "================================================"

for SERVICE in "${SERVICES[@]}"; do
  DONE=$((DONE + 1))
  echo ""
  echo "[$DONE/$TOTAL] Processing: $SERVICE [$COUNTRY]"
  echo "─────────────────────────────────────────────"

  echo "  📥 Fetching keywords..."
  if node scripts/seo-automation/1-fetch-keywords.js "$SERVICE" --country "$COUNTRY" 2>&1 | grep -E "(✅|❌|⚠️|💾)"; then
    echo "  ✅ Keywords fetched"
  else
    echo "  ❌ Fetch failed — skipping $SERVICE"
    FAILED=$((FAILED + 1))
    continue
  fi

  echo "  🧩 Clustering..."
  node scripts/seo-automation/2-cluster-keywords.js "$SERVICE" --country "$COUNTRY" 2>&1 | grep -E "(✅|clusters|💾)"

  echo "  📄 Generating pages..."
  node scripts/seo-automation/3-generate-pages.js "$SERVICE" --country "$COUNTRY" 2>&1 | grep -E "(✅|⏭️|Generated|Skipped|Summary|💾)"

  echo "  ✅ $SERVICE [$COUNTRY] done!"
done

echo ""
echo "================================================"
echo "✅ All done! Succeeded: $((TOTAL - FAILED)) | Failed: $FAILED"
echo ""
echo "📊 Total pages in data/seo-automation/pages/:"
ls data/seo-automation/pages/ | wc -l
echo ""
echo "Next steps:"
echo "  git add -A && git commit -m 'feat: $COUNTRY SEO pages' && git push"
echo "  Then: bash /tmp/deploy.sh on VPS"
