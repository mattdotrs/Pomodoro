import { getCurrentWindow } from '@tauri-apps/api/window';

// when using `"withGlobalTauri": true`, you may use
// const { getCurrentWindow } = window.__TAURI__.window;

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

function updateTimer(time : number) : any {
    currentTime = time
    let currentSession: Time = {
        minutes: Math.floor(currentTime / 60),
        seconds: currentTime % 60
    };
    
    timerSpan.innerText = `${currentSession.minutes}:${currentSession.seconds.toString().padStart(2, '0')}`;
}

updateTimer(focusSession);

document.getElementById('FocusSelect')?.addEventListener('click', () => {
    document.getElementById('Message').innerText = "Time to focus!";
    focusSession = document.getElementById('FocusSeshLength').value * 60;
    updateTimer(focusSession);
});
    
document.getElementById('BreakSelect')?.addEventListener('click', () => {
    document.getElementById('Message').innerText = "Time to rest";
    breakTime = document.getElementById('BreakLength').value * 60;
    updateTimer(breakTime);
});

