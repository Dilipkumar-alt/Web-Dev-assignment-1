function showAnswer() {
  const input = document.getElementById('answerInput').value;
  const output = document.getElementById('output');
  if (input.trim() === "") {
    output.textContent = "Please enter something!";
  } else {
    output.textContent = `That sounds awesome! "${input}" must be a great memory.`;
  }
}
