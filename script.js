function openSignIn() {
  let image = document.querySelector('.image'); // Selects the element with class 'image'
  let page = document.querySelector('.page'); // Selects the element with class 'page'

  // Check if there is no element with class 'sign_in' already present
  if (!document.querySelector('.sign_in')) {
    // Create a new div element for the sign-in form
    let signIn = document.createElement("div");
    signIn.classList.add("sign_in"); // Adds the class 'sign_in' to the newly created div
    signIn.innerHTML = `
      <div class="sign_in__container">
        <button onclick="closeSignIn()" class="sign_in__icon_cancel">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
          </svg>
        </button>
        <p class="sign_in__title">Войти в систему</p>
        <div class="sign_in__inputs">
          <input class="sign_in__input" type="text" placeholder="Email/Телефон">
          <input class="sign_in__input" type="text" placeholder="Пароль">
        </div>
        <div class="sign_in__check">
          <input type="checkbox">
          <p>Запомнить пароль</p>
        </div>
        <a class="sign_in__link" href="">Восстановить</a>
        <div class="sign_in__buttons">
          <button class="sign_in__button">Войти</button>
          <button class="sign_in__button">Зарегистрироваться</button>
        </div>
      </div>
    `;

    // Inserts the created sign-in form element after the '.image' element
    image.insertAdjacentElement('afterend', signIn);

    // Delays setting opacity to 1 to allow for smooth transition
    setTimeout(() => {
      signIn.style.opacity = '1';
    }, 0);
  }
}

function closeSignIn() {
  document.querySelector('.sign_in').remove(); // Removes the element with class 'sign_in' from the DOM
}