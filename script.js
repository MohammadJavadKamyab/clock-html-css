function updateClocks() {
    const now = new Date();

    // Digital Clock
    const digitalClock = document.getElementById('digitalClock');
    digitalClock.innerHTML = now.toLocaleTimeString();

    // Analog Clock
    const hourHand = document.getElementById('hour');
    const minuteHand = document.getElementById('minute');
    const secondHand = document.getElementById('second');

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDegree = ((seconds / 60) * 360) + 90;
    const minuteDegree = ((minutes / 60) * 360) + 90;
    const hourDegree = ((hours / 12) * 360) + 90;

    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(updateClocks, 1000);
updateClocks();
