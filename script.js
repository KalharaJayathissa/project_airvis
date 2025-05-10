
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.add('hidden');
    });
    document.getElementById(screenId).classList.remove('hidden');
}

document.addEventListener("DOMContentLoaded", () => {
    showScreen("home"); // Show home screen by default
});

function activateAirVis() {
    alert("AirVis activated! Adjusting AC based on human density.");
}

function applySettings() {
    const temperature = document.getElementById("temperature").value;
    const fanSpeed = document.getElementById("fanSpeed").value;
    alert(`Settings applied: Temperature ${temperature}°C, Fan Speed ${fanSpeed}`);
}
document.addEventListener("DOMContentLoaded", () => {

    const modeToggle = document.getElementById('modeToggle');
    if (modeToggle) {
        modeToggle.addEventListener('change', () => {
            activateAirVis();
        });
    }
});
