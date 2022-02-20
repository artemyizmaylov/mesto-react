import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import { useState } from 'react';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setOsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setOsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setOsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <form className="popup__form" name="profile" method="post" noValidate>
          <label className="popup__input-label" htmlFor="profile-name">
            <input
              type="text"
              name="name"
              id="profile-name"
              className="popup__input popup__input_type_name"
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="popup__input-error profile-name-error"></span>
          </label>
          <label className="popup__input-label" htmlFor="profile-about">
            <input
              type="text"
              name="about"
              id="profile-about"
              className="popup__input popup__input_type_about"
              placeholder="О себе"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="popup__input-error profile-about-error"></span>
          </label>
          <button className="button popup__confirm-button" type="submit">
            Сохранить
          </button>
        </form>
      </PopupWithForm>

      <PopupWithForm
        name="place"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <form className="popup__form" name="place" method="post" noValidate>
          <label className="popup__input-label" htmlFor="place-name">
            <input
              type="text"
              name="name"
              id="place-name"
              className="popup__input popup__input_type_place"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="popup__input-error place-name-error"></span>
          </label>
          <label className="popup__input-label" htmlFor="place-link">
            <input
              type="url"
              name="link"
              id="place-link"
              className="popup__input popup__input_type_link"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__input-error place-link-error"></span>
          </label>
          <button
            className="button popup__confirm-button popup__confirm-button_disabled"
            type="submit"
          >
            Создать
          </button>
        </form>
      </PopupWithForm>

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <form className="popup__form" name="avatar" method="post" noValidate>
          <label className="popup__input-label" htmlFor="avatar-link">
            <input
              type="url"
              name="avatar"
              id="avatar-link"
              className="popup__input popup__input_type_link"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="popup__input-error avatar-link-error"></span>
          </label>
          <button className="button popup__confirm-button">Сохранить</button>
        </form>
      </PopupWithForm>

      <PopupWithForm name="confirm" isOpen={false}>
        <button className="button popup__confirm-button" type="button">
          Да
        </button>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
