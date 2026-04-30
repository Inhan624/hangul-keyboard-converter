console.log("접선. 성공했습니다. 부디 임무 완수하시길..");

const input = document.getElementById("input-text");
const output = document.getElementById("output-text");

input.addEventListener("input", () => {
  const text = input.value;

  if (text.trim() === "") {
    output.textContent = "변환 결과가 여기에 표시됩니다.";
    output.classList.remove("active");
    return;
  }

  output.classList.add("active");
  output.textContent = convert(text);
});