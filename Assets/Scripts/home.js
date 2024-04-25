document.getElementById("handleShowModal").addEventListener('click', handleShowModal)

function handleShowModal() {
  const menuLinks = document.querySelector('.menu__links').classList

  menuLinks.contains('hidden') ? menuLinks.replace('hidden', 'show') : menuLinks.replace('show', 'hidden')
}

