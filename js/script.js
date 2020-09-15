const openModalButton = document.getElementById("open-modal-button");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButton.addEventListener("click", () => {
    openModal(modal);
  });
  
  overlay.addEventListener("click", () => {
    const modal = document.querySelector(".addModal.active");
    closeModal(modal);
  });
  
  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".addModal");
      closeModal(modal);
    });
  });

  function openModal(modal) {
    if (modal == null) return;
    modal.classList.add("active");
    overlay.classList.add("active");
  }
  function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
  }

  const myForm = document.getElementById("myform");

  const _handleSubmit = async (e) => {
    e.preventDefault();
    const proposition = document.getElementById("proposition").value;
    const description = document.getElementById("description").value;
    console.log("submited");

    const data = {
      proposition,
      description,
    };
    addproposition(data);
    myForm.reset();
  };

  function addproposition(data){
    const newProposition = document.createElement("li");
    newProposition.classList.add("list-group-item");
    newProposition.classList.add("p-1");
    newProposition.innerHTML = `<div class="d-flex p-1">
    <div class="d-flex flex-column">
    <a class="pseudo" href="#">Pseudo :</a>
    <small class="text-muted">date</small>
    </div>
    <a class="description ml-1" href="#">${data.proposition}</a>
    <div class="ml-auto d-flex align-self-center">
    <button type="button" class="btn btn-sm btn-primary description-popover" data-toggle="popover" title="description"
    data-content="${data.description}">Show description</button>
    </div></div></li>`;
    document.getElementById("propositionListe").appendChild(newProposition);
    $(function () {
      $('.description-popover').popover({
        container: 'body'
      })
    })
  }

  myForm.addEventListener("submit", _handleSubmit);


  $(document).ready(function(){
         $("#searchInput").on("keyup", function() {
             var value = $(this).val().toLowerCase();
             $("#propositionListe *").filter(function() {
             $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
             });
         });
     });

