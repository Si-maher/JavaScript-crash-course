const ul = document.querySelector('.items')
ul.firstElementChild.textContent = 'Hello'
ul.children[1].innerText = 'World'

const btn = document.querySelector('.btn')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('#my-form').style.background ='#ccc'
    document.querySelector('body').classList.add('bg-dark')
    document.querySelector('.items').style.color = 'black'
})