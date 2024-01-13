function selected(event) {
	event.preventDefault();
	page = document.querySelector(".menu a").getAttribute("href")
	setTimeout(() => {
						window.location.href = `${document.querySelector("a").getAttribute("href")}?course=${course}`;
	                }, 200);
	soundSelect = new Audio('./sounds/8-Bit.m4a');
	soundSelect.play();
}