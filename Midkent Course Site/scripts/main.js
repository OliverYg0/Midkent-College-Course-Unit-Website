// Toggle for the website nav on mobile
let navActive = false;

pauseScrolling = () => {
    document.body.classList.toggle('paused-scrolling')
}

const header = document.querySelector('header')
const navToggle = document.querySelector('.nav-toggle')
const navItems = document.querySelector('.nav-items')
const navItem = document.querySelectorAll('.nav-item')
const heroSec = document.querySelector('#hero')

toggleNav = () => {
    header.classList.toggle('nav-active')
    navToggle.classList.toggle('nav-active')
    navItems.classList.toggle('nav-active')
    heroSec.classList.toggle('nav-active')
    navActive = !navActive
    pauseScrolling()
}

navToggle.addEventListener('click', () => {
    toggleNav()
})

navItem.forEach(element => {
    element.addEventListener('click', () => {
        toggleNav()
    })
});

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    header.style.top = "0";
  } else {
    header.style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

// Typewriter
const typewriterText = document.querySelector('.typewriter-text')
const phrases = ['This website was created by Oliver Zygo.', 'It was finished on May 5th 2022.', 'Its for Unit 6 of the Course.']
let currentPhrase = ''
let deleting = false
let i = 0
let j = 0

function loop() {
    typewriterText.textContent = currentPhrase
    
    if (i < phrases.length) {
        if (!deleting && j <= phrases[i].length) {
            currentPhrase += phrases[i][j]
            j++
        }
        
        if (deleting && j <= phrases[i].length) {
            newPhrase = currentPhrase.slice(0, -1)
            currentPhrase = newPhrase
            j--
        }

        if (j == phrases[i].length) {
            deleting = true
        }

        if (deleting && j == 0) {
            currentPhrase = ''
            deleting = false
            i++
        }
    }
    setTimeout(loop, 90)
}

loop()

// Projects Section
const projectCardExpandBtn = document.querySelectorAll('.project-card-expand-btn')
const projectCardExpansion = document.querySelectorAll('.project-card-expansion')
const projectCardCloseExpansionBtn = document.querySelectorAll('.project-card-close-expansion-btn')

function toggleProjectCardExpansion(index) {
    projectCardExpansion[index].classList.toggle('active')
}

let c = 0
projectCardExpandBtn.forEach(element => {
    element.dataset.index = c
    ++c
})

projectCardExpandBtn.forEach(element => {
    element.addEventListener('click', () => {
        toggleProjectCardExpansion(element.dataset.index)
    })
})

let d = 0
projectCardCloseExpansionBtn.forEach(element => {
    element.dataset.index = d
    ++d
})

projectCardCloseExpansionBtn.forEach(element => {
    element.addEventListener('click', () => {
        toggleProjectCardExpansion(element.dataset.index)
    })
})