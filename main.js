'use strict'

// add and remove navbar transition and color change when it is scrolled beyond navbar height in pixels

const navbar = document.querySelector('#navbar')
const navbarHeight = navbar.getBoundingClientRect().height

document.addEventListener('scroll', () => {
  console.log(window.scrollY)
  console.log('navbar height:', navbarHeight)
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark')
  } else {
    navbar.classList.remove('navbar--dark')
  }
})

// navbar link scroll to section id
const navbarMenu = document.querySelector('.navbar__menu')

navbarMenu.addEventListener('click', (e) => {
  const target = e.target
  const link = target.dataset.link
  if (link === undefined) {
    return
  }
  const scrollTo = document.querySelector(link)
  scrollTo.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
})

// handle contact me button on home
const homeContactBtn = document.querySelector('#home__contact')

homeContactBtn.addEventListener('click', () => {
  const scrollTo = document.querySelector('#contact')
  scrollTo.scrollIntoView({ behavior: 'smooth', block: 'start' })
})
