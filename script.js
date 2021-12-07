const dob = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky-number");
const checkNoBtn = document.querySelector("#check-number");
const message = document.querySelector("#message");

checkNoBtn.addEventListener("click", () => {
  const luckyNoValue = Number(luckyNumber.value);
  const dobValue = dob.value;

  if (luckyNoValue && dobValue) {
    const updatedDob = [...dobValue.replaceAll("-", "")].reduce(
      (acc, cur) => acc + Number(cur),
      0
    );
    if (updatedDob === luckyNoValue) {
      message.textContent = luckyNoValue + " is a lucky number!! 🥳";
    } else {
      message.textContent = luckyNoValue + " is not that lucky 😕";
    }
  } else {
    message.textContent = "Please enter both the fields 😑";
  }
});
