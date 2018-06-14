
Unable to load script from assets index.android.bundle on mac: 
(in project directory) mkdir android/app/src/main/assets
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
react-native run-android

Could not connect to development server on android emulator and on real device


ANDROID_SDK_ROOT
brew cask uninstall android-sdk

adb not found 
export PATH="/Users/peoplecloud/Library/Android/sdk/platform-tools":$PATH
export ANDROID_HOME=/Users/peoplecloud/Library/Android/sdk && export ANDROID_SDK_ROOT=$ANDROID_HOME
adb reverse tcp:8081 tcp:8081