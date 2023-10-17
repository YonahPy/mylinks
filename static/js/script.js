const add = document.querySelector('#add');
const exclude = document.querySelector('#delete');
const edit = document.querySelector('#edit');
const links = document.querySelector('.links')
const input = document.querySelectorAll('.links input')
const select = document.querySelector('select')
const nomeSite = document.querySelector('.nome-site')


add.addEventListener('click', () => {
    select.classList.toggle('active')
    input.forEach(i => {
        i.classList.toggle('active')
        i.textContent = ''
    }); 
    
})

nomeSite.addEventListener('click', () => {
    
})
