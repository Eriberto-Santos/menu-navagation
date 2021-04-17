const buttonMenu = document.getElementById('button-menu')
const menu = document.getElementById('menu')


if (buttonMenu && menu) {
    console.log('Todo esta bien');
}else{
    console.log('Los botones no funcionan');
}

buttonMenu.addEventListener('click',()=>{
    menu.classList.toggle('menu-active')
})


