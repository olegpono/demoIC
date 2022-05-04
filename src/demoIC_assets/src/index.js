import { demoIC } from "../../declarations/demoIC";

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");

  const name = document.getElementById("name").value.toString();

  button.setAttribute("disabled", true);

  // Interact with foo actor, calling the greet method
  const cycleBalance = await demoIC.cycleBalance();

  button.removeAttribute("disabled");

  document.getElementById("greeting").innerText = cycleBalance;

  return false;
});
