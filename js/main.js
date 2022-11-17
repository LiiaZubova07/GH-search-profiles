//Написать форму
//Написать инпут
//Написать кнопку поиск

//Добавить инпут и кнопку к форме
//Добавить форму к main

//Добавить ко всем элементам необходимые атрибуты и классы

//Написать функцию для создания карточек
//Написать функцию для удаления карточки

//----------------------------------------------//

const mainEl = document.querySelector('.main');

const formEl = document.createElement('form');
const inputEl = document.createElement('input');
const searchButtonEl = document.createElement('button');

//добавить инпут и кнопку к форме
formEl.appendChild(inputEl);
formEl.appendChild(searchButtonEl);
//добавить форму к main
mainEl.appendChild(formEl);


