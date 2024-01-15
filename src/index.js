function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "My poem",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemForm = document.querySelector("#poem-generator-form");
poemForm.addEventListener("submit", generatePoem);
