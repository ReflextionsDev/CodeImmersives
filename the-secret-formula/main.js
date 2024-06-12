// Part 1
const btn = document.querySelector('button')
const input = document.querySelector('#testInput')

btn.addEventListener('click', () => {
    alert(input.value)
})

// Part 2
const breads = document.querySelectorAll('#sandwich .bread')
const toppings = document.querySelectorAll('#sandwich .topping')
const btn_order = document.querySelector('#order')

btn_order.addEventListener('click', () => {

    let bread = ''
    let str = ''

    breads.forEach((element) => {
        if (element.checked) {
            bread = element.id
        }
    })

    toppings.forEach((element) => {
        if (element.checked) {
            str += element.id + ", "
        }
    })

    alert("Your sandwich contains: " + str + " on " + bread + " bread.")
})

// Part 3
const hair_date = document.querySelector('#hair_date')
const hair_haircutter = document.querySelector('#hair_haircutter')
const shorthair = document.querySelector('#short')
const longhair = document.querySelector('#long')
const btn_appointment = document.querySelector('#appointment')

btn_appointment.addEventListener('click', () => {

    let date = hair_date.value
    let haircutter = hair_haircutter.value
    let style = shorthair.checked ? 'short' : 'long'    

    alert(`Haircut scheduled for ${date} with ${haircutter} for ${style} hair.`)
})

// Part 4
const account_username = document.querySelector('#account-username')
const account_email = document.querySelector('#account-email')
const account_password = document.querySelector('#account-password')
const account_confirmpassword = document.querySelector('#account-confirmpassword')
const account_submit = document.querySelector('#account-submit')

account_submit.addEventListener('click', () => {

    let username = account_username.value
    let email = account_email.value

    alert(`Created account with username ${username} and email ${email}.`)
})