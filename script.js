const DOMElements = {
  body: document.querySelector("body"),
  bodyOverlayer: document.querySelector("body > .overlayer"),
  header: document.querySelector("header"),
  navs: document.querySelectorAll("header nav li a"),
  menuTogglerButton: document.getElementById("button"),
  menuTogglerButtonLines: document.querySelectorAll("#button .line"),
  readMoreBtn: document.getElementById("readMoreBtn"),
  moreInfo: document.getElementById("more-info"),
};

// Sidebar Navigation Toggle
DOMElements.navs.forEach((element) => {
  element.onclick = function () {
    toggleSidebar();
    DOMElements.navs.forEach((el) => el.classList.remove("active"));
    element.classList.add("active");
  };
});

DOMElements.menuTogglerButton.addEventListener("click", () => {
  toggleSidebar();
});

DOMElements.bodyOverlayer.addEventListener("click", () => {
  toggleSidebar();
});

function toggleSidebar() {
  DOMElements.body.classList.toggle("show");
  DOMElements.header.classList.toggle("show");
  DOMElements.menuTogglerButton.classList.toggle("close");
}

// Read More Toggle Function
if (DOMElements.readMoreBtn) {
  DOMElements.readMoreBtn.addEventListener("click", () => {
    if (DOMElements.moreInfo.style.display === "none" || !DOMElements.moreInfo.style.display) {
      DOMElements.moreInfo.style.display = "block";
      DOMElements.readMoreBtn.textContent = "Read Less";
    } else {
      DOMElements.moreInfo.style.display = "none";
      DOMElements.readMoreBtn.textContent = "Read More";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".skill:not(.overlayer)").forEach(skill => {
    const percentageText = skill.querySelector(".percentage");
    if (!percentageText) {
      return;
    }

    const percentage = parseInt(percentageText.textContent.replace("%", ""), 10);
    if (isNaN(percentage)) {
      return;
    }

    const fillBar = skill.querySelector(".percentage-line .fill");
    if (!fillBar) {
      return;
    }

    // Force repaint before applying width (Safari fix)
    fillBar.style.display = "block";
    fillBar.offsetWidth;

    setTimeout(() => {
      fillBar.style.width = `${percentage}%`;
    }, 500);
  });
});
