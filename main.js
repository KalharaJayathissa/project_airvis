document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('modeToggle');
    const modeText = document.getElementById('modeText');
    const autoMode = document.getElementById('autoMode');
    const manualMode = document.getElementById('manualMode');
    const acSelection = document.getElementById('acSelection');
    const controlPanel = document.getElementById('controlPanel');
    const tempDisplay = document.getElementById('tempDisplay');
    const tempUp = document.getElementById('tempUp');
    const tempDown = document.getElementById('tempDown');
    const speedButtons = document.querySelectorAll('.speed-btn');
    let currentTemp = 24;

    // Mode Toggle with enhanced animation
    modeToggle.addEventListener('change', () => {
        const modeSwitch = document.querySelector('.mode-switch');
        
        if (modeToggle.checked) {
            modeText.textContent = 'Auto Mode';
            modeText.style.color = '#3498db';
            modeSwitch.style.boxShadow = '0 0 20px rgba(52, 152, 219, 0.5)';
            autoMode.classList.remove('hidden');
            manualMode.classList.add('hidden');
        } else {
            modeText.textContent = 'Manual Mode';
            modeText.style.color = '#e74c3c';
            modeSwitch.style.boxShadow = '0 0 20px rgba(231, 76, 60, 0.5)';
            autoMode.classList.add('hidden');
            manualMode.classList.remove('hidden');
            acSelection.classList.remove('hidden');
            controlPanel.classList.add('hidden');
        }
    });

    // AC Selection
    document.querySelectorAll('.ac-card').forEach(card => {
        card.addEventListener('click', () => {
            acSelection.classList.add('hidden');
            controlPanel.classList.remove('hidden');
        });
    });

    // Temperature Control
    tempUp.addEventListener('click', () => {
        if (currentTemp < 30) {
            currentTemp++;
            tempDisplay.textContent = `${currentTemp}°C`;
        }
    });

    tempDown.addEventListener('click', () => {
        if (currentTemp > 16) {
            currentTemp--;
            tempDisplay.textContent = `${currentTemp}°C`;
        }
    });

    // Fan Speed Control
    speedButtons.forEach(button => {
        button.addEventListener('click', () => {
            speedButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // Timer Input Validation
    const timerInput = document.getElementById('timerInput');
    timerInput.addEventListener('input', () => {
        let value = parseInt(timerInput.value);
        if (value < 0) timerInput.value = 0;
        if (value > 24) timerInput.value = 24;
    });

    // Swing Toggle Animation
    const swingToggle = document.getElementById('swingToggle');
    swingToggle.addEventListener('change', () => {
        // Add swing animation logic here if needed
    });

    // Generate Random History Data (for demonstration)
    function updateHistoryData() {
        const energyValues = document.querySelectorAll('.energy-value');
        const savingsIndicators = document.querySelectorAll('.savings-indicator');
        
        energyValues.forEach((value, index) => {
            const randomEnergy = (Math.random() * 10 + 5).toFixed(1);
            const randomSavings = (Math.random() * 20).toFixed(0);
            value.textContent = `${randomEnergy} kWh`;
            savingsIndicators[index].textContent = `-${randomSavings}% vs avg`;
        });
    }

    // Update history data every 5 minutes
    updateHistoryData();
    setInterval(updateHistoryData, 300000);
});