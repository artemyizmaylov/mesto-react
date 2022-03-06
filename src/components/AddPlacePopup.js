import { useRef, useEffect, useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  const { isOpen, onClose, onAddPlace } = props;

  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen]);

  function handleChange(e) {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'link') {
      setLink(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const card = {
      name,
      link,
    };

    onAddPlace(card);
  }

  return (
    <PopupWithForm
      name="place"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
    >
      <form
        className="popup__form"
        name="place"
        method="post"
        noValidate
        onSubmit={handleSubmit}
      >
        <label className="popup__input-label" htmlFor="place-name">
          <input
            value={name || ''}
            onChange={handleChange}
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
            value={link || ''}
            onChange={handleChange}
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
          className="button popup__confirm-button popup__confirm-button"
          type="submit"
        >
          Создать
        </button>
      </form>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
