export function openNav(button, nav) {
    button.addEventListener('click', () => {
        nav.classList.toggle('active')
        if (nav.classList == 'navigation active') {
            nav.classList.add('active')
        } else{
            nav.classList.remove('active')
        }
    });
};