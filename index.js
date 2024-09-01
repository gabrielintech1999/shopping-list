const textBox = document.querySelector(".text-box");
const form = document.querySelector("form");
const addBtn = document.querySelector(".add-btn");
const containerItems = document.querySelector(".container-items");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const inputValue = textBox.value;
  textBox.value = "";

  if (inputValue.trim()) {
    console.log(inputValue);

    // runn summ
  } else {
    alert("Text box is empty");
  }

  console.log(inputValue);
});

Array(12)
  .fill(12)
  .forEach((element) => {
    const li = document.createElement("li");
    li.textContent = "Banana";
    containerItems.appendChild(li);
  });
