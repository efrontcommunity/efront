export function accordionTechnologies() {
  let acc = document.getElementsByClassName("accordion-technologies");

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      let panel = this.nextElementSibling;

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        this.classList.remove("open");
      } else {
        for (let x = 0; x < acc.length; x++) {
          acc[x].classList.remove("open");
          acc[x].nextElementSibling.style.maxHeight = null;
        }

        panel.style.maxHeight = panel.scrollHeight + "px";
        this.classList.toggle("open");
      }
    });
  }
}
