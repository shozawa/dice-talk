function roll(themes) {
  return themes[Math.ceil(Math.random() * 6) - 1];
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

document.addEventListener("DOMContentLoaded", async () => {
  const result = document.getElementById("result");
  const surfaces = document.getElementsByClassName("surface");
  const form = document.getElementById("roll");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const thems = Array.from(surfaces).map((surface) => surface.value || "");
    const intervals = [100, 100, 50, 50, 50, 50, 100, 200, 300, 300];

    for (const ms of intervals) {
      result.innerText = roll(thems);
      await sleep(ms);
    }
  });
});
