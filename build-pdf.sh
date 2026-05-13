#!/usr/bin/env bash
# Regenerate babson-ai-providers.pdf from report/index.html.
# Run after editing any of the four site pages and re-syncing their content
# into the consolidated report at report/index.html.

set -euo pipefail
cd "$(dirname "$0")"

if ! command -v weasyprint >/dev/null 2>&1; then
  echo "weasyprint not found. Install with: brew install weasyprint" >&2
  exit 1
fi

weasyprint report/index.html babson-ai-providers.pdf
echo "→ wrote $(ls -lh babson-ai-providers.pdf | awk '{print $5, $9}')"
