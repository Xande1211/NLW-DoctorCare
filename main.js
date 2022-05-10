window.addEventListener('scroll', onScroll) //Adicionar o OnScroll na janela/window assim que atualizar/iniciar//

onScroll() //Ativa o Onscroll uma unica vez assim que iniciar a pagina//

function onScroll() {
  showNavOnScroll()
  showbackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection() {
  const targetLine = scrollY + innerHeight / 2

  //verificar se a seção passou da linha
  //quais dados vou precisar?

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  //Verificar se a base está embaixo da linha alvo

  const sectionEndAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = sectionEndAt <= targetLine

  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute(`id`)

  const menuElement = document.querySelector(`.menu a[href*=]${sectionId}`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showbackToTopButtonOnScroll() {
  if (scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

//Quando clicado no botao open menu do HTML, ele chamará essa função, que adicionará uma classe menu-expanded no body, que puxará toda a formatação//
function openMenu() {
  document.body.classList.add('menu-expended')
}

function closeMenu() {
  document.body.classList.remove('menu-expended')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home,
#home img,
#home .stats, 
#services, 
#services header, 
#services .cards,
#about,
#about header,
#about .content`)
