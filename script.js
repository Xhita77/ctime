function updateClock() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
  
    // Add leading zeros if necessary
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
  
    const timeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  
    const clock = document.getElementById("time");
    clock.textContent = timeString;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  