document.addEventListener("DOMContentLoaded", () => {
  let tag;
  let month = sessionStorage.getItem("month");
  const target = document.getElementById("siteList");
  const tagArr = ["info", "success", "danger", "warning"];
  const monthArr = [augustSites, septemberSites, octoberSites, novemberSites];
  let index;
  let indexMonth;

  displayTag();

  function displayTag() {
    indexMonth = allMonth.findIndex((el) => el.month == month);
    if (indexMonth == -1) {
      indexMonth = 0;
      month = "January";
    }
    tag = allMonth[indexMonth].season;

    tag == "winter"
      ? (index = 0)
      : tag == "spring"
      ? (index = 1)
      : tag == "summer"
      ? (index = 2)
      : (index = 3);

    allMonth.splice(indexMonth, 1);
    month;
    document.getElementById(
      "allSite"
    ).innerHTML = `<h1>All sites</h1> <div class="dropdown">
<button
  class="btn btn-sm ml-2 btn-${tagArr[index]} dropdown-toggle"
  type="button"
  id="dropdownMenuButton"
  data-toggle="dropdown"
  aria-haspopup="true"
  aria-expanded="false"
>
${month}
</button>
<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <button class="dropdown-item" data-tag-button data-month="${allMonth[0].month}">${allMonth[0].month}</button>
  <button class="dropdown-item" data-tag-button data-month="${allMonth[1].month}">${allMonth[1].month}</button>
  <button class="dropdown-item" data-tag-button data-month="${allMonth[2].month}">${allMonth[2].month}</button>
  <button class="dropdown-item" data-tag-button data-month="${allMonth[3].month}">${allMonth[3].month}</button>
  <button class="dropdown-item" data-tag-button data-month="${allMonth[4].month}">${allMonth[4].month}</button>
  <button class="dropdown-item" data-tag-button data-month="${allMonth[5].month}">${allMonth[5].month}</button>
  <button class="dropdown-item" data-tag-button data-month="${allMonth[6].month}">${allMonth[6].month}</button>
  <button class="dropdown-item" data-tag-button data-month="${allMonth[7].month}">${allMonth[7].month}</button>
  <button class="dropdown-item" data-tag-button data-month="${allMonth[8].month}">${allMonth[8].month}</button>
  <button class="dropdown-item" data-tag-button data-month="${allMonth[9].month}">${allMonth[9].month}</button>
  <button class="dropdown-item" data-tag-button data-month="${allMonth[10].month}">${allMonth[10].month}</button>
</div>
</div>`;

    allMonth.splice(indexMonth, 0, { month: month, season: tag });

    document.querySelectorAll("[data-tag-button]").forEach((button) => {
      button.addEventListener("click", () => {
        month = button.getAttribute("data-month");
        target.innerHTML = "";
        displayTag();
      });
    });

    switch (month) {
      case "August":
        displaySites(0);
        break;
      case "September":
        displaySites(1);
        break;
      case "October":
        displaySites(2);
        break;
      case "November":
        displaySites(3);
        break;
      case "December":
        break;
      case "January":
        break;
      case "February":
        break;
      case "March":
        break;
      case "April":
        break;
      case "May":
        break;
      case "June":
        break;
      case "July":
        break;
    }
    return;
  }

  function displaySites(index) {
    for (let i = 0; i < monthArr[index].length; i++) {
      const newCard = document.createElement("div");
      newCard.classList.add(
        "card",
        "col-12",
        "col-md-3",
        "my-2",
        "px-md-1",
        "site-card"
      );
      newCard.style.background = "transparent";
      newCard.innerHTML = `<a
      href="${monthArr[index][i].link}"
      target="_blank"
      class="stretched-link"
      ><img src="${monthArr[index][i].image}" class="card-img-top" alt="..."
    /></a>
    <div class="card-body d-flex flex-column justify-content-between">
      <div>
      <h5 class="card-title">${monthArr[index][i].title}</h5>
      <p class="card-text">${monthArr[index][i].description}</p>
      </div>
      <p class="card-text align-self-end"><small class="text-muted">${monthArr[index][i].date}</small></p>
    </div>`;
      target.appendChild(newCard);
    }
    return;
  }
});
