document.addEventListener("DOMContentLoaded", () => {
  const tagButtons = document.querySelectorAll("[data-tag-button]");

  tagButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const month = button.getAttribute("data-month");
      sessionStorage.setItem("month", month);
    });
  });
});
