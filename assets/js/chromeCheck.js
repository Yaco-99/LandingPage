const is_chrome =
  navigator.userAgent.toLocaleLowerCase().indexOf("chrome") > -1;
const link = document.createElement("link");
link.href = "assets/css/chrome.css";
link.rel = "stylesheet";
link.type = "text/css";
is_chrome ? document.head.appendChild(link) : "not chrome";
