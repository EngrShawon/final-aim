@echo off
setlocal
npm install
npm install @capacitor/core @capacitor/cli @capacitor/android
call npm run prepare:web
if not exist android call npx cap add android
call npm run patch
call npm run sync
call npm run open
