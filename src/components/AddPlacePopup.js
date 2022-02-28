import { useRef, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import validate from '../utils/FormValidator';

function AddPlacePopup(props) {
  const { isOpen, onClose, onAddPlace } = props;

  const name = useRef();
  const link = useRef();
  const form = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    const card = {
      name: name.current.value,
      link: link.current.value,
    };

    onAddPlace(card);

    name.current.value = '';
    link.current.value = '';
  }

  useEffect(() => {
    validate(form.current);
  }, []);

  return (
    <PopupWithForm
      name="place"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
    >
      <form
        ref={form}
        className="popup__form"
        name="place"
        method="post"
        noValidate
        onSubmit={handleSubmit}
      >
        <label className="popup__input-label" htmlFor="place-name">
          <input
            ref={name}
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
            ref={link}
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
