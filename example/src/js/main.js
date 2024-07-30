import { PowerMode } from './power-mode-example.js';

const logs = []
const pushLogs = (data) => {
    const now = new Date();
    const formattedDate = `${now.getFullYear()}/${now.getMonth()+1}/${now.getDate()} ${now.getHours().toString().padStart(2, 0)}:${now.getMinutes().toString().padStart(2, 0)}:${now.getSeconds().toString().padStart(2, 0)}.${now.getMilliseconds().toString().padStart(3, 0)}`;
    logs.push({
        time: formattedDate,
        data: data
    });
    document.querySelector("#logs").textContent = JSON.stringify(logs, undefined, 2);
}

const getBatterySaverStatus = () => {
    return PowerMode.lowPowerModeEnabled()
}
const updateBatterySaverStatus = () => {
    getBatterySaverStatus()
    .then((data) => {
        document.querySelector("#batterySaveStatus").textContent = data.lowPowerModeEnabled
    })
    pushLogs("updated batterySaveStatus");
}
const openPowerSettings = () => {
    PowerMode.openPowerSettings()
    .then(() => {
        console.log("opening power settings")
        pushLogs("opend batterySaveStatus");
    })
    .catch((err) => {
        console.error(err);
        pushLogs("can't opend batterySaveStatus");
    })
    pushLogs("opend batterySaveStatus");
}

window.addEventListener("DOMContentLoaded", () => {
    updateBatterySaverStatus()
    document.querySelector("#updateBatterySaverStatus").addEventListener("click", updateBatterySaverStatus)
    document.querySelector("#openPowerSettings").addEventListener("click", openPowerSettings)
})