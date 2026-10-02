# FINAL AIM — Build APK from Android phone using GitHub Actions

This project includes a GitHub Actions workflow that builds a debug Android APK in the cloud. You do NOT need Android Studio on your phone.

## Easiest method

1. Create a GitHub account at https://github.com/ if you do not already have one.
2. Create a new repository, for example `final-aim`.
3. Upload the contents of this folder to the repository (not the ZIP file itself).
4. Make sure `.github/workflows/build-apk.yml` is present in the repository.
5. Open the repository's **Actions** tab.
6. Select **Build FINAL AIM APK**.
7. Tap **Run workflow**.
8. Wait for the workflow to finish with a green check mark.
9. Open the completed workflow run.
10. Under **Artifacts**, download **FINAL-AIM-debug-apk**.
11. Extract the downloaded artifact ZIP on your phone.
12. Tap `app-debug.apk` and install it.

## If GitHub does not show the workflow

Use GitHub's **Add file → Create new file** and create this exact path:

`.github/workflows/build-apk.yml`

Then copy the workflow content from the `.github/workflows/build-apk.yml` file included in this package and commit it.

## Notes

- This produces a debug APK for testing/installation.
- It is not a Play Store signed release.
- For Google Play, create a signed AAB later in Android Studio or with a protected signing setup.
- The workflow generates the Android project automatically, so the `android/` folder does not need to be committed.
