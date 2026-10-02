#!/usr/bin/env bash
set -e
npm install
npm install @capacitor/core @capacitor/cli @capacitor/android
npm run prepare:web
if [ ! -d android ]; then npx cap add android; fi
npm run patch
npm run sync
npm run open
