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
