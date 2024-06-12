// Part One

function strike() {
    const element = document.querySelector('ul > li')
    element.style.textDecoration = "line-through"
}

strike()

function setImage(id, imagesrc) {
    const img = document.querySelector(id)
    img.src = imagesrc
}

setImage('#image-1', 'https://images.unsplash.com/photo-1634992989077-25522e7ffbc1?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
setImage('#image-2', 'https://images.unsplash.com/photo-1635176591840-a847f5787e4c?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
setImage('#image-3', 'https://images.unsplash.com/photo-1635205410945-ecd09994877f?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')

function removeli() {
    const element = document.querySelector('li')
    element.remove()
}

removeli()
removeli()

function setFontSize(id, fontSize) {
    const text = document.querySelector(id)
    text.style.fontSize = fontSize
}

setFontSize('h1', '100px')

// Part Two

function createArgument(element) {
    const parent = document.querySelector('ul')
    parent.appendChild(element)
}


const element = document.createElement('img')
element.src = 'https://images.unsplash.com/photo-1635185163481-6a1300cf3a5e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'

createArgument(element)

function resizeImage(element) {
    element.height = 30
}

resizeImage(element)

function makeElementInvisible(element) {
    element.className = 'invisible'
}

const testElem = document.querySelector('ol')

makeElementInvisible(testElem)

// Part Three

function makeNewLi(text) {
    const newElement = document.createElement('li')
    newElement.innerHTML = text
    return newElement
}

const newItem = makeNewLi('This is a new list item!')

createArgument(newItem)

function createHeader(headerSize,text) {
    const Element = document.createElement('h' + headerSize)
    Element.innerHTML = text
    return Element
}

let header1 = createHeader(3,'Header Size 3')
createArgument(header1)
let header2 = createHeader(2,'Header Size 2')
createArgument(header2)
let header3 = createHeader(5,'Header Size 5')
createArgument(header3)

