import { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {
  const { isOpen, onClose, onUpdateUser } = props;

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleChange(e) {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'about') {
      setDescription(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
    >
      <form
        className="popup__form"
        name="profile"
        method="post"
        onSubmit={handleSubmit}
        noValidate
      >
        <label className="popup__input-label" htmlFor="profile-name">
          <input
            value={name || ''}
            onChange={handleChange}
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
            value={description || ''}
            onChange={handleChange}
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
  );
}

export default EditProfilePopup;
