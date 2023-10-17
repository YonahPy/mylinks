const add = document.querySelector('#add');
const input = document.querySelectorAll('.links input');
const select = document.querySelector('select');
const categorias = document.querySelectorAll('.titulo');

if (add){
    add.addEventListener('click', () => {
        select.classList.toggle('active')
        input.forEach(i => {
            i.classList.toggle('active')
            i.value = ''
        }); 
        
    })
}


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
