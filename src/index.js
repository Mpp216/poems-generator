function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.getElementById("instructions").value;
  let apiKey = "8b274fd4b3b0of2fe273a1bf90eetcd2";
  let context =
    "You are a romantic poem expert and love to write short poems to make people more happier. Your mission is generate one poem with four lines poems in basic html format. Do not use a tittle. In the end of the poem sign with `SheCode AI` inside a <strong> element.  Please follow the instructions. ";
  let prompt = `User instructions: Generate a happy poem with ${instructionsInput}.`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  //consolo.log("generating poem");
  console.log(`Prompt: ${prompt}`);
  axios.get(apiUrl).then(displayPoem);
}

let poemForm = document.querySelector("#poem-generator-form");
poemForm.addEventListener("submit", generatePoem);
