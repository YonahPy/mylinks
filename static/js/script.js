const add = document.querySelector('#add');
const exclude = document.querySelector('#delete');
const edit = document.querySelector('#edit');
const links = document.querySelector('.links');
const input = document.querySelectorAll('.links input');
const select = document.querySelector('select');
const nomeSite = document.querySelector('.nome-site');
const categorias = document.querySelectorAll('.titulo');


add.addEventListener('click', () => {
    select.classList.toggle('active')
    input.forEach(i => {
        i.classList.toggle('active')
        i.value = ''
    }); 
    
})

categorias.forEach((categoria) => {
    categoria.addEventListener('click', () => {
        document.querySelectorAll('.name').forEach((link) => {
            link.style.display = 'none';
        });

        const categoriaId = categoria.id;
        document.querySelectorAll(`.name[data-categoria="${categoriaId}"]`).forEach((link) => {
            link.style.display = 'flex';
        })
    })
})
