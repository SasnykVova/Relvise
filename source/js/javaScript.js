/*===Логіка для кнопки відкриття меню===*/ 
document.querySelector('.burger').addEventListener('click', () => {
    console.log('click')
    document.querySelector('.burger').classList.toggle('active');
    document.querySelector('.mobile-menu').classList.toggle('open');
    document.querySelector('.midlle-line').classList.toggle('active');
    document.querySelector('body').classList.toggle('menu-open');
})