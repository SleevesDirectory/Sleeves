document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".letter").forEach(letter => {
    letter.addEventListener("click", () => {
      const targetId = letter.dataset.target;
      const targetList = document.getElementById(targetId);

      if (!targetList) return;

      const isOpen = targetList.style.display === "block";
      targetList.style.display = isOpen ? "none" : "block";
document.querySelectorAll(".artist-name.clickable").forEach(name => {
  name.addEventListener("click", (e) => {
    e.stopPropagation(); // prevents letter toggle conflicts

    const links = name.nextElementSibling;
    if (!links) return;

    const isOpen = links.style.display === "flex";
    links.style.display = isOpen ? "none" : "flex";
  });
});

    });
  });
});
