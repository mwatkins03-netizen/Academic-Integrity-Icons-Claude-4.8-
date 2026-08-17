#!/usr/bin/env bash
# Rebuilds scorm/ from the live pages and repackages um-integrity-icons-scorm.zip.
# Run this after editing gallery.html, assets/icons.js, or assets/app.css.
set -euo pipefail
cd "$(dirname "$0")"
mkdir -p scorm/assets
cp gallery.html scorm/index.html
cp assets/icons.js assets/app.css scorm/assets/
rm -f um-integrity-icons-scorm.zip
(cd scorm && zip -qr ../um-integrity-icons-scorm.zip . -x '.*')
echo "Rebuilt um-integrity-icons-scorm.zip"
