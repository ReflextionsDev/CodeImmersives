// Warmup

const mwm = document.querySelector('.mess-with-me')
mwm.style.fontSize = '40px'

const mwm2 = document.querySelector('p.mess-with-me')
mwm2.style.backgroundColor = 'green'

const hideme = document.querySelector('#hide-me-area')
hideme.remove()

const triceratops = document.querySelector('#triceratops')
triceratops.style.width = '324px'

// Event Listeners

mwm.addEventListener('click', () => {
    mwm.style.color = 'orange'
})

triceratops.addEventListener('click', () => {
    triceratops.style.border = '1px red solid'
})

const feathers = document.querySelector('#feathers')
feathers.addEventListener('click', () => {
    feathers.style.opacity = 0.5
})

const toggle = document.querySelector('#toggle')
const row = document.querySelector('#row')
let bgColor = 0
toggle.addEventListener('click', () => {
    if (bgColor === 0) {
        row.style.backgroundColor = 'cyan'
        bgColor = 1
    } else {
        row.style.backgroundColor = 'white'
        bgColor = 0
    }
})

const biggify = document.querySelector('#biggify')
let biggifyOriginalWidth = biggify.offsetWidth + 'px'

biggify.addEventListener('mouseover', () => {
    biggify.style.width = '200px'
})
biggify.addEventListener('mouseout', () => {
    biggify.style.width = biggifyOriginalWidth
})
