document.getElementById("phno").addEventListener("input", (event) => {
  const regex = /^(\(\+\d{2}\))?\d{10}$/g;
  const input = document.getElementById("phno");
  const format = document.querySelector(".phoneFormat");
  const phone = input.value;
  const found = regex.test(phone);
  if (!found && phone.length) {
    input.classList.add("invalid");
    format.classList.add("block");
  } else {
    input.classList.remove("invalid");
    format.classList.remove("block");
  }
});

document.getElementById("phoneForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const regex = /[().-]/g; // u can't change this format
  const input = document.getElementById("phno");
  const savedphone = input.value.replaceAll(regex, "");
  console.log(savedphone);
});
