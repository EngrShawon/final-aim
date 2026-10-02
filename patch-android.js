// Run after `npx cap add android`: landscape + fullscreen
const fs=require('fs');
const mf='android/app/src/main/AndroidManifest.xml';
let m=fs.readFileSync(mf,'utf8');
if(!m.includes('screenOrientation'))m=m.replace('<activity','<activity android:screenOrientation="sensorLandscape"');
fs.writeFileSync(mf,m);
const sf='android/app/src/main/res/values/styles.xml';
let s=fs.readFileSync(sf,'utf8');
if(!s.includes('windowFullscreen'))s=s.replace(/(<style name="AppTheme\.NoActionBar"[^>]*>)/,'$1\n        <item name="android:windowFullscreen">true</item>');
fs.writeFileSync(sf,s);
console.log('Android manifest/styles patched');
