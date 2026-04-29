console.log("접선. 성공했습니다. 부디 임무 완수하시길..");

const inputText = document.getElementById("input-text");
const outputText = document.getElementById("output-text");

inputText.addEventListener("input", () => {

  const result = convert(inputText.value);

  outputText.textContent = result;

});

const input = document.getElementById("input-text");
const output = document.getElementById("output-text");

input.addEventListener("input", () => {
  const text = input.value;

  if (text.trim() === "") {
    output.textContent = "변환 결과가 여기에 표시됩니다.";
    output.classList.remove("active"); // 회색 유지
    return;
  }

  output.classList.add("active"); // 👉 검정으로 변경
  output.textContent = convert(text);
});