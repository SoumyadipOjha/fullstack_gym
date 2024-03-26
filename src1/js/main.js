


let btn = document.querySelector('.fa-bars')
let hamburgermenu = document.querySelector('#open')
let remove = document.querySelector('.fa-times')


btn.addEventListener('click', function () {
    hamburgermenu.classList.add('hamburgermenu-open')
})

remove.addEventListener('click', function () {
    hamburgermenu.classList.remove('hamburgermenu-open')
})

function join(){
    window.open("http://127.0.0.1:3000/choice.html");
}
function trainer(){
    window.open("http://127.0.0.1:3000/trainercontact.html");
}
