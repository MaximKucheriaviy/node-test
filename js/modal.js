(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      if(!refs.modal.classList.contains("is-hidden")){
        refs.modal.classList.add("outAnimation");
        setTimeout(function(){
          refs.modal.classList.add("is-hidden");
          refs.modal.classList.remove("outAnimation");
        }, 500);
      }
      else{
        refs.modal.classList.remove("is-hidden");
        refs.modal.classList.add("inAnimation");
        setTimeout(function(){
          refs.modal.classList.remove("inAnimation");
        }, 500);
      }
    }
  })();