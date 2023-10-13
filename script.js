const add = document.querySelector('#add');
const exclude = document.querySelector('#delete');
const edit = document.querySelector('#edit');
const links = document.querySelector('.links')
const input = document.querySelectorAll('.links input')


add.addEventListener('click', () => {
    input.classList.toggle('active')
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter'){
            const link = document.createElement('a')
            link.href = input.value 
            link.textContent = input.value
            links.appendChild(link)

            input.value = ''
            input.classList.remove('active')
        }
    })
    
})
