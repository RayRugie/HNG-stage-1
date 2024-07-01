function updateTime() {
    const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDay = document.querySelector('[data-testid="currentDay"]');

    const now = new Date();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = dayNames[now.getUTCDay()];

    currentTimeUTC.textContent = `Current Time (UTC): ${now.toUTCString()}`;
    currentDay.textContent = `Current Day: ${dayName}`;
}

updateTime();
setInterval(updateTime, 1000);
