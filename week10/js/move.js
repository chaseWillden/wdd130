document.addEventListener("keydown", (e) => {
  const box = document.querySelector(".box");
  // If key is RightArrow
  if (e.key === "ArrowRight") {
    box.classList.add("change");
  } else if (e.key === "ArrowLeft") {
    box.classList.remove("change");
  }
});
