const add = document.querySelector('#add');
const exclude = document.querySelector('#delete');
const edit = document.querySelector('#edit');
const links = document.querySelector('.links')
const input = document.querySelectorAll('.links input')
const select = document.querySelector('select')



add.addEventListener('click', () => {
    select.classList.toggle('active')
    input.forEach(i => {
        i.classList.toggle('active')
        i.textContent = ''
    }); 
    
})
