# ![Pomodoro.png](https://github.com/mattdotrs/Pomodoro/blob/main/src-tauri/icons/64x64.png) Unnamed Pomodoro App
> A simple pomodoro timer built for personal use.
# Features
⏲️ **Fully functional timers and control:** Start, stop and reset timers

🍅**Focus and Break mode:** Ability to choose between two different modes with custom time intervals

📥 **Native notifications:** Get notified when your timer is about to end and when it has stopped

# Development 
The app is built with Typescript and the [Tauri](tauri.app) framework. I started developing this as a side project during uni break, as I wanted to practice my Javascript abilities building something that wouldn't take me more than a week or two and learn Typescript in the process. 

**Why Tauri and not a more mainstream framework? (eg: Electron)** Initially I started developing this on a low-end secondhand laptop that could barely handle Electron based apps like Discord or VS Code, such limitations made me realize just how resource heavy Electron was and encouraged me to look for some emerging alternatives. That made me decide to give Tauri a try.

# Installation (Windows)
### Using `.msi` file
You can download the `.msi` file in the ['main/bundle/' folder](https://github.com/mattdotrs/Pomodoro/blob/main/bundle/pomodoro_0.1.0_x64_en-US.msi) and install the application to your system.
### Using `.exe` file
There's a portable `.exe` version at ['main/exe'](https://github.com/mattdotrs/Pomodoro/blob/main/exe/pomodoro.exe). This can be installed and used independently.
> Be mindful the portable version doesn't send notifications natively when the timer stops, instead they appear as Microsoft Powershell notifications. This is a limitation to the Tauri notification plugin on windows.

### Building manually
You can alternatively build the app yourself, for more details refer to the Windows Installer building guide [here](https://tauri.app/distribute/windows-installer/#building) 
1. Make sure to check the [Tauri Prerequisites](https://tauri.app/start/prerequisites/) before
2. Fork this repository
3. Run the following command, if using other package manager different from npm refer to the Build guide above. 
``` pwsh-session
npm run tauri build
```
# Screenshots
<div style="display: flex;">
  <img style="width: 30%;" src="https://github.com/mattdotrs/Pomodoro/blob/main/screenshots/001.png">
  <img style="width: 30%;" src="https://github.com/mattdotrs/Pomodoro/blob/main/screenshots/002.png">
  <img style="width: 30%;" src="https://github.com/mattdotrs/Pomodoro/blob/main/screenshots/003.png">
</div>
