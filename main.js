document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('modeToggle');
    const modeText = document.getElementById('modeText');
    const modeSwitch = document.querySelector('.mode-switch'); // Define modeSwitch
    const autoMode = document.getElementById('autoMode');
    const manualMode = document.getElementById('manualMode');
    const acSelection = document.getElementById('acSelection');
    const controlPanel = document.getElementById('controlPanel');
    const tempDisplay = document.getElementById('tempDisplay');
    const tempUp = document.getElementById('tempUp');
    const tempDown = document.getElementById('tempDown');
    const speedButtons = document.querySelectorAll('.speed-btn');
    const backButton = document.getElementById('backButton');
    let currentTemp = 24;

    function applyFreshFadeIn(element) {
        const uniqueClass = 'fade-in-' + Date.now();
    
        // Create a new <style> block with unique animation
        const style = document.createElement('style');
        style.textContent = `
            .${uniqueClass} {
                animation: ${uniqueClass}-anim 0.6s ease forwards;
            }
            @keyframes ${uniqueClass}-anim {
                from { opacity: 0; }
                to { opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    
        // Remove old fade-in classes
        element.classList.forEach(cls => {
            if (cls.startsWith('fade-in-')) element.classList.remove(cls);
        });
    
        // Add the newly generated class
        element.classList.add(uniqueClass);
    }
    

    // Set initial mode to "Manual Mode"
    modeText.textContent = 'Manual Mode';
    modeText.style.color = '#e74c3c';
    manualMode.classList.remove('hidden');
    autoMode.classList.add('hidden');

    // Add event listener to toggle switch
    modeToggle.addEventListener('change', () => {
        if (modeToggle.checked) {
            modeText.textContent = 'Auto Mode';
            modeText.style.color = '#00ff64d9';
            modeSwitch.style.boxShadow = '0 0 20px rgba(27, 239, 63, 0.5)';
        
            autoMode.classList.remove('hidden');
            manualMode.classList.add('hidden');
        
            applyFreshFadeIn(autoMode);
        } else {
            modeText.textContent = 'Manual Mode';
            modeText.style.color = '#e74c3c';
            modeSwitch.style.boxShadow = '0 0 20px rgba(231, 76, 60, 0.5)';
        
            manualMode.classList.remove('hidden');
            autoMode.classList.add('hidden');
        
            applyFreshFadeIn(manualMode);
        }
        
    });

    // AC Selection
    document.querySelectorAll('.ac-card').forEach(card => {
        card.addEventListener('click', () => {
            acSelection.classList.add('hidden');
            controlPanel.classList.remove('hidden');
            applyFreshFadeIn(controlPanel);
        });
    });

    // Add event listener to back button
    backButton.addEventListener('click', () => {
        controlPanel.classList.add('hidden');
        acSelection.classList.remove('hidden');
        applyFreshFadeIn(acSelection);
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

    updateHistoryData();
    setInterval(updateHistoryData, 300000);
});

VANTA.NET({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x319f00,
    backgroundColor: 0x0f0f0f
  });
  