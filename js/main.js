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
formEl.classList.add('search');
formEl.addEventListener('submit', async (e) => {
  //сбросить стандартное поведение в браузере
  e.preventDefault();

  //забираю значение из этого ипута, которое буду вводить
  //позволяет забрать неограниченное количество значений из формы
  const inputsValue = Object.fromEntries(new FormData(e.target));
  //сетевой запрос
  const response = await fetch(
    `https://api.github.com/users/${inputsValue.name}`
  );
  if (response.ok) {
    const data = await response.json();
    //использовать функцию для создания карточки
    //добавить результат функции выше в mainEl
  } else {
    alert('Пользователь не найден');
  }
  console.log(response);
});

const inputEl = document.createElement('input');
inputEl.classList.add('search-input');
inputEl.setAttribute('name', 'name');

const searchButtonEl = document.createElement('button');
searchButtonEl.classList.add('search-button');
//атрибут тип, должен быть сабмит. Когда будем навешивать на форму обработчика, его события будут сабмитами
searchButtonEl.setAttribute('type', 'submit');
//задаём значение
searchButtonEl.innerText = 'Search';

//добавить инпут и кнопку к форме
formEl.appendChild(inputEl);
formEl.appendChild(searchButtonEl);
//добавить форму к main
mainEl.appendChild(formEl);

function createProfileEl(profileData) {
  const element = document.createElement('div');
  element.classList.add('profile');
  element.innerHTML = `<img src="${profileData.avatar_url}" alt="avatar" class="search-image">
	<p class="search-text"><span>Name: </span>${profileData.name}</p>
	<p class="search-text"><span>City: </span>${profileData.location}</p>
	<p class="search-text"><span>About me: </span>${profileData.bio}</p>`;
}

function createBtnEl() {}
