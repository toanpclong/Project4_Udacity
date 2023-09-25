const URL_BASE = "https://api.meaningcloud.com/sentiment-2.1";
async function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;

  if (Client.checkForName(formText)) {
    fetch("http://localhost:8081/get")
      .then(async (res) => {
        const resConvert = await res.json();
        console.log("res", resConvert);
        return fetch(`${URL_BASE}?key=${resConvert}&lang=en&url=${formText}`);
      })
      .then(async function (data) {
        const dataConvert = await data.json();
        console.log("dataConvert", dataConvert);
        document.getElementById("polarityResults").innerHTML =
          "Polarity: " + dataConvert.sentence_list[0].segment_list[0].score_tag;
        document.getElementById("subjectivityResults").innerHTML =
          "Subjectivity: " + dataConvert.subjectivity;
        document.getElementById("textResults").innerHTML =
          "My text: " + dataConvert.sentence_list[0].segment_list[0].text;
      });
  }
}

export { handleSubmit };
