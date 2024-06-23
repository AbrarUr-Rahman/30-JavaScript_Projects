//todo: Make mails appear in google sheets

//# Something wrong with the sheet names in scripts

const scriptURL =
  "https://script.google.com/macros/s/AKfycbyOM_tKw4DJ3mk_nBKk4uDiQcUIhdisfLLco3OIR48KlyjfGbyXTJLzHZoAclOG-OhQ/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Thank you for Subscribing!";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000);
      form.reset; //!Not Resetting
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
