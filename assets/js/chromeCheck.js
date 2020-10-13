const is_chrome =
  navigator.userAgent.toLocaleLowerCase().indexOf("chrome") > -1;
const link = document.createElement("link");
link.href = "assets/css/chromeMin.css";
link.rel = "preload";
link.type = "text/css";
is_chrome ? document.head.appendChild(link) : "not chrome";
