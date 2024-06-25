window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 0) {
    navbar.classList.remove("navbar-transparent", "text-white");
    navbar.classList.add("navbar-white", "text-black");
  } else {
    navbar.classList.remove("navbar-white", "text-black");
    navbar.classList.add("navbar-transparent", "text-white");
  }
});
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((accordionHeader) => {
  accordionHeader.addEventListener("click", (event) => {
    const icon = accordionHeader.querySelector(".icon");
    const accordionBody = accordionHeader.nextElementSibling;

    accordionHeader.classList.toggle("active");
    if (accordionHeader.classList.contains("active")) {
      accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
      icon.classList.remove("rotate-0");
      icon.classList.add("rotate-180");
      icon.textContent = "-";
    } else {
      accordionBody.style.maxHeight = 0;
      icon.classList.remove("rotate-180");
      icon.classList.add("rotate-0");
      icon.textContent = "+";
    }
  });
});

document.querySelectorAll(".accordion-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    const symbol = button.querySelector("span:last-child");

    button.classList.toggle("active");

    if (button.classList.contains("active")) {
      content.style.display = "block";
      content.style.maxHeight = content.scrollHeight + "px";
      content.classList.add("show");
      symbol.classList.remove("rotate-0");
      symbol.classList.add("rotate-180");
      symbol.textContent = "-";
    } else {
      content.style.maxHeight = null;
      content.classList.remove("show");
      setTimeout(() => {
        content.style.display = "none";
      }, 300); // Match the duration of max-height transition
      symbol.classList.remove("rotate-180");
      symbol.classList.add("rotate-0");
      symbol.textContent = "+";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const btndropdown = document.getElementById("btn-dropdown");
  const dropdownmenu = document.getElementById("dropdown-menu");

  btndropdown.addEventListener("click", function () {
    dropdownmenu.classList.toggle("hidden");
  });

  document.addEventListener("click", function (event) {
    if (!btndropdown.contains(event.target) && !dropdownmenu.contains(event.target)) {
      dropdownmenu.classList.add("hidden");
    }
  });
});
 