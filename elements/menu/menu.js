function selected(event) {
	event.preventDefault();
	page = event.target.attributes[1].value;
	setTimeout(() => {
						window.location.href = `${page}?course=${urlParams.get('course')}`;
	                }, 200);
	soundSelect = new Audio('./sounds/8-Bit.m4a');
	soundSelect.play();
}