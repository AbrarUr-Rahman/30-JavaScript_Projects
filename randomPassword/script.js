const passwordBox = document.getElementById("password");
const generateBtn = document.getElementById("generateBtn");
const length = 12;

function generateRandom() {
  return window.crypto.getRandomValues(new BigUint64Array(1))[0].toString(36); //!Window Crypto Password Genreator
}

generateBtn.addEventListener("click", () => {
  const password = generateRandom();

  passwordBox.value = password;
});

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}
