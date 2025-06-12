const button = document.getElementById("calculate");

button.addEventListener("click", () => {
  const dob = document.getElementById("dob").value;
  const bday = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - bday.getFullYear();
  if (dob === "") {
    alert("Select Your Birth Date, Then Click The Calculate Button");
  }
  if (bday.getMonth() > today.getMonth() || bday.getDate() > today.getDate()) {
    age--;
  }
  console.log(age);
  const result = document.getElementById("your-age");
  if (dob === "") {
    result.innerText =
      "Select Your Birth Date, Then Click The Calculate Button";
  } else {
    result.innerText = `Your Age is ${age} Year`;
  }
});
