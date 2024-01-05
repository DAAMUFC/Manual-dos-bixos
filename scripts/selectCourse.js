sound = new Audio('./sounds/Paripi_Koumei.m4a');
sound.play();

function courseSelected(event, course) {
  event.preventDefault();
  page = document.querySelector("a").getAttribute("href")
  setTimeout(() => {
                    window.location.href = `${document.querySelector("a").getAttribute("href")}?course=${course}`;
                }, 200);
  soundSelect = new Audio('./sounds/8-Bit.m4a');
  soundSelect.play();
}
