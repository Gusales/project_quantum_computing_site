function handleShowModal() {
  const menuLinks = document.querySelector('.menu__links').classList

  menuLinks.contains('hidden') ? menuLinks.replace('hidden', 'show') : menuLinks.replace('show', 'hidden')
}

const  swiper = new Swiper(".conjunto-equipes", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
