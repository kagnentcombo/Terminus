const toggleButton = document.getElementsByClassName('nav-button')[0]
const navbarLinks = document.getElementsByClassName('menu')[0]
const toggleButton2 = document.getElementsByClassName('sidebar-button')[0]
const navbarLinks2 = document.getElementsByClassName('bar')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

toggleButton2.addEventListener('click', () => {
    navbarLinks2.classList.toggle('acart')
  })
