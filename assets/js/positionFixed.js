document.body.addEventListener("scroll", (ev) => {
  const position = ev.srcElement.scrollTop;
  document.getElementById("navbarspy").style.top = `${position}px`;
});
