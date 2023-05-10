const passwordInput = document.getElementById('password');
const background = document.getElementById('background');

passwordInput.addEventListener('input', () => {
  const passwordLength = passwordInput.value.length;
  const blurValue = 20 - passwordLength*2;
  background.style.filter = `blur(${blurValue}px)`;
});
