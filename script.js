//your JS code here. If required.
function updateTimer() {
	const timerElement = document.getElementById('timer');
	const currentDate = new Date();
	
	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		timeZoneName: 'short'
	};

	const formattedDate = currentDate.toLocaleDateString('en-US', options);
	timerElement.textContent = formattedDate;
}
updateTimer();
setInterval(updateTimer, 1000);