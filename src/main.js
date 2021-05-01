import checkCode from './check-code';

// import { checkCode } from './check-code';

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  document.querySelector("#output").textContent = checkCode(
    e.target.elements.code.value
  );
});
