document.addEventListener("DOMContentLoaded", function () {
  const fontSelect = document.getElementById("font-select");
  const body = document.body;

  fontSelect.addEventListener("change", () => {
    const selected = fontSelect.value;

    body.classList.remove("font-sans", "font-serif", "font-mono");

    if (selected === "sans-serif") {
      body.classList.add("font-sans");
    } else if (selected === "serif") {
      body.classList.add("font-serif");
    } else if (selected === "monospace") {
      body.classList.add("font-mono");
    }
  });
});
