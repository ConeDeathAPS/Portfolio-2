const projectArray = [];

document.addEventListener('DOMContentLoaded', initialize);

const initialize = () => {
	projectArray.push(new Project({
		name: 'F1 Databucket',
		images: [
			new Image({ alt: 'F1 Databucket Map Page', src: './images/F1DB_main'}),
			new Image({ alt: 'F1 Databucket Team Page', src: './images/F1DB_Team'}),
		],
		description: '<p>This project was inspired by my passion for Formula 1. It uses get requests to the Ergast API to retrieve fastest laps/results for tracks and Driver/Team information and the Google Maps API to display the track\'s location. Unfortunately the API is relatively slow to respond, so the requests sometimes take a few seconds to complete.</p><p>An exercise in AJAX, the page only reloads when you click a link in the top navbar. The AJAX requests to the Ergast API take around 300-500 ms to return depending on your internet connection. This caused significant issues when trying to parse through and store the data locally, as the scripts would execute asynchronously and store the same data multiple times. I solved this issue by controlling the flow of the script via callbacks.</p><p>The graphs that are displayed on the driver and team pages are created by a custom graphing library that I built from scratch called <a href="https://www.github.com/conedeathaps/charter">Charter.js.</a></p>'
	}));
	projectArray.push(new Project({
		name: 'Minecraft Calculator',
		images: [
			new Image({ alt: 'Minecalc Main Page', src: './images/minecalc_main.png'}),
			new Image({ alt: 'Minecalc Circle Helper', src: './images/minecalc_circle.png'}),
		],
		description: '<p>This project was inspired by my passion for Formula 1. It uses get requests to the Ergast API to retrieve fastest laps/results for tracks and Driver/Team information and the Google Maps API to display the track\'s location. Unfortunately the API is relatively slow to respond, so the requests sometimes take a few seconds to complete.</p><p>An exercise in AJAX, the page only reloads when you click a link in the top navbar. The AJAX requests to the Ergast API take around 300-500 ms to return depending on your internet connection. This caused significant issues when trying to parse through and store the data locally, as the scripts would execute asynchronously and store the same data multiple times. I solved this issue by controlling the flow of the script via callbacks.</p><p>The graphs that are displayed on the driver and team pages are created by a custom graphing library that I built from scratch called <a href="https://www.github.com/conedeathaps/charter">Charter.js.</a></p>'
	}));	

	const projectContainer = document.getElementById('project-container');
	projectArray.forEach((project, idx) => {
		projectContainer.appendChild(`<button class="projectButton" onclick="doShit(${idx})">${project.name}</button`)
	});
};

const doShit = (index) => {
 console.log(`Selecting project ${projectArray[index]}`);
}


