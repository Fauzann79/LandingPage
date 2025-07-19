const btn_menu = document.querySelector('.btn-menu')
const nav_menu = document.querySelector('.elements')

console.log()

btn_menu.addEventListener('click', function () {
    console.log('asu')

    if (nav_menu.classList.contains('show')) {
        nav_menu.classList.remove('show')
    } else {
        nav_menu.classList.add('show')
    }
})