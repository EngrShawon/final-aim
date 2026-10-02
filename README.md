# FINAL AIM — Android Package

This package contains the FINAL AIM browser game prepared for Android packaging with Capacitor.

## Branding
- App name: **FINAL AIM**
- Android package ID: `com.shawon.finalaim`
- Game logo: `assets/final-aim-logo.png`
- Mobile icon source files: `assets/icon-*.png`

## 📱 Easiest method for a beginner: build APK using GitHub Actions

You can build a test APK from an Android phone without installing Android Studio on the phone. See:

**README-MOBILE-GITHUB.md**

The workflow file is:

**.github/workflows/build-apk.yml**

A visible copy is also provided as:

**GITHUB-WORKFLOW-COPY.yml**

## Computer / Android Studio method

Requirements:
- Node.js 18+
- Android Studio + Android SDK
- JDK 17

From this folder run:

```bash
npm install
npm install @capacitor/core @capacitor/cli @capacitor/android
npm run prepare:web
npx cap add android
npm run patch
npm run sync
npm run open
```

Or use:
- Windows: `build-android.bat`
- macOS/Linux: `./build-android.sh`

## Release APK/AAB

The GitHub workflow creates a debug APK for testing. For a Play Store release, create a signed AAB/APK with a protected signing key.
