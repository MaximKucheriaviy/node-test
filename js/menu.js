(() => {
    const refs = {
      openModalBtn: document.querySelector(".header__menu-button"),
      svgLine: document.querySelector(".header__menu-button__lines"),
      svgCrost: document.querySelector(".header__menu-button__crost"),
      modal: document.querySelector(".header__menu"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.openModalBtn.classList.toggle("header__menu-button--is-open")
      refs.modal.classList.toggle("header__menu--hidden");
      refs.svgLine.classList.toggle("is-hidden");
      refs.svgCrost.classList.toggle("is-hidden");
    }
  })();