import { getCurrentWindow } from '@tauri-apps/api/window';
import {
  isPermissionGranted,
  requestPermission,
  sendNotification,
} from '@tauri-apps/plugin-notification';

// when using `"withGlobalTauri": true`, you may use
// const { getCurrentWindow } = window.__TAURI__.window;
let permissionGranted = await isPermissionGranted();

// If not we need to request it
if (!permissionGranted) {
  const permission = await requestPermission();
  permissionGranted = permission === 'granted';
}

const appWindow = getCurrentWindow();

document.getElementById('titlebar-minimize')?.addEventListener('click', () => appWindow.minimize());
document.getElementById('titlebar-close')?.addEventListener('click', () => appWindow.close());
document.getElementById('titlebar')?.addEventListener('mousedown', (e) => {
if (e.buttons === 1) {
    e.detail === 2
    appWindow.startDragging();
    }
});

const timerSpan : any = document.getElementById('Timer');

interface Time {
    minutes: number;
    seconds: number;
}

let focusSession = 1500;
let breakTime = 300;
let currentTime = 0;
let lastUsedTime = 0;
let interval : any;

function updateTimer(time? : number) : any {
    if (time !== undefined) {currentTime = time;}
    let currentSession: Time = {
        minutes: Math.floor(currentTime / 60),
        seconds: currentTime % 60
    };
    if (currentTime <= 60) {
        timerSpan.style["color"] = "var(--accent)";
    } else {
        timerSpan.style["color"] = "var(--textMain)";
    }
    timerSpan.innerText = `${currentSession.minutes}:${currentSession.seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    lastUsedTime = currentTime;
    interval = setInterval(() => {
        --currentTime;
        updateTimer();
        if (currentTime === 0) {
            clearInterval(interval);
            var audio = new Audio('/src-tauri/audio/finish.wav');
            audio.play();
            if (permissionGranted) {
                sendNotification({ title: 'Pomodoro', body: 'Time\'s up!' });
            }
            currentTime = lastUsedTime;
            updateTimer();
        }
    }, 1000)
}

updateTimer(focusSession);

document.getElementById('FocusSelect')?.addEventListener('click', () => {
    document.getElementById('Message')!.innerText = "Time to focus!";
    focusSession = +(document.getElementById('FocusSeshLength') as HTMLInputElement).value * 60;
    updateTimer(focusSession);
});
    
document.getElementById('BreakSelect')?.addEventListener('click', () => {
    document.getElementById('Message')!.innerText = "Time to rest";
    breakTime = +(document.getElementById('BreakLength') as HTMLInputElement).value * 60;
    updateTimer(breakTime);
});

document.getElementById('StartTimer')?.addEventListener('click', () => {
    startTimer();
    document.getElementById('StartTimer')!.style["display"] = "none";
    document.getElementById('StopTimer')!.style["display"] = "inline";
});

document.getElementById('StopTimer')?.addEventListener('click', () => {
    clearInterval(interval);
    document.getElementById('StartTimer')!.style["display"] = "inline";
    document.getElementById('StopTimer')!.style["display"] = "none";
});

document.getElementById('ResetTimer')?.addEventListener('click', () => {
    clearInterval(interval);
    clearInterval(interval);
    currentTime = lastUsedTime;
    updateTimer();
});
