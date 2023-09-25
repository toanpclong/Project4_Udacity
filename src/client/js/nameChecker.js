function checkForName(inputText) {
  console.log("::: Running checkForName :::", inputText);

  if (
    !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(
      inputText
    )
  ) {
    alert("Input wrong!Please Input Again");
    return false;
  }
  alert("Input success!");
  return true;
}

export { checkForName };
