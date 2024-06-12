const dinos1 = document.querySelectorAll('ol li')

for (const i of dinos1) {
    const element = i
    element.addEventListener('click', () => {
        element.style.textDecoration = "line-through"
    })
}

const dinos2 = document.querySelector('ul')

dinos2.addEventListener('click', (event) => {
    const element = event.target
    if (element.localName === 'li') {
        element.style.opacity = 0
    }
})

const dinoPics = document.querySelector('#row')

dinoPics.addEventListener('click', (event) => {
    const element = event.target
    if (element.localName === 'img') {
        element.style.width = '0px'
    }
})

const meteorBtn = document.querySelector('#destroy-all')

const dinosUL = document.querySelectorAll('ul li')
const dinoImg = document.querySelectorAll('#row img')

meteorBtn.addEventListener('click', () => {

    dinos1.forEach(element => {
        element.style.textDecoration = "line-through"
    })

    dinosUL.forEach(element => {
        element.style.opacity = 0
    })

    dinoImg.forEach(element => {
        element.style.width = '0px'
    })
})