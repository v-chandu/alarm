let alarmTime = null;
let alarmTimeout = null;

function updateCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('current-time').textContent = `${hours}:${minutes}:${seconds}`;

    // Check if the alarm time matches the current time
    if (alarmTime === `${hours}:${minutes}`) {
        alert('⏰ Alarm Ringing!');
        alarmTime = null; // Reset the alarm
        clearTimeout(alarmTimeout); // Clear any timeout
        document.getElementById('alarm-status').textContent = 'No alarm set.';
    }
}

function setAlarm() {
    const alarmInput = document.getElementById('alarm-time').value;
    if (alarmInput) {
        alarmTime = alarmInput;
        document.getElementById('alarm-status').textContent = `Alarm set for ${alarmTime}.`;
    } else {
        alert('Please select a valid time for the alarm.');
    }
}

// Update the current time every second
setInterval(updateCurrentTime, 1000);
