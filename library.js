document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".letter").forEach(letter => {
    letter.addEventListener("click", () => {
      const targetId = letter.dataset.target;
      const targetList = document.getElementById(targetId);

      if (!targetList) return;

      const isOpen = targetList.style.display === "block";
      targetList.style.display = isOpen ? "none" : "block";
    });
  });
});
