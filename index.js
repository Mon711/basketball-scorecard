const allPointsButtons = document.querySelectorAll(".plus-point");

function handleScoreUpdate(event) {
	const clickedButton = event.target;

	const pointsToAdd = Number(clickedButton.dataset.add);
	const team = clickedButton.dataset.team;

	const scoreElement = document.getElementById(`${team}-score`);

	let currentScore = Number(scoreElement.textContent);

	scoreElement.textContent = currentScore + pointsToAdd;
}

allPointsButtons.forEach((button) => {
	button.addEventListener("click", handleScoreUpdate);
});
