'use strict'

// add and remove navbar transition and color change when it is scrolled beyond navbar height in pixels

const navbar = document.querySelector('#navbar')
const navbarHeight = navbar.getBoundingClientRect().height

document.addEventListener('scroll', () => {
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
  scrollTo(link)
})

// handle contact me button on home
const homeContactBtn = document.querySelector('#home__contact')

homeContactBtn.addEventListener('click', () => {
  scrollTo('#contact')
})

function scrollTo(link) {
  const scrollTo = document.querySelector(link)
  scrollTo.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  navbarMenu.classList.remove('open')
}

const home = document.querySelector('#home')
const homeHeight = home.getBoundingClientRect().height

document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight
})

// Arrow up button logic when scrolling down
const arrowUpBtn = document.querySelector('.arrow-up-btn')

document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUpBtn.classList.add('visible')
  } else {
    arrowUpBtn.classList.remove('visible')
  }
})

arrowUpBtn.addEventListener('click', () => {
  scrollTo('#home')
})

// Show menu links when burger menu is clicked
const burgerMenuBtn = document.querySelector('.navbar__toggle-btn')

burgerMenuBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open')
})
