import { useEffect, useRef } from 'react';
import PopupWithForm from './PopupWithForm';
import validate from '../utils/FormValidator';

function EditAvatarPopup(props) {
  const { isOpen, onClose, onUpdateAvatar } = props;

  const link = useRef();
  const form = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: link.current.value,
    });

    link.current.value = '';
  }

  useEffect(() => {
    validate(form.current);
  }, []);

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
    >
      <form
        ref={form}
        className="popup__form"
        name="avatar"
        method="post"
        noValidate
        onSubmit={handleSubmit}
      >
        <label className="popup__input-label" htmlFor="avatar-link">
          <input
            ref={link}
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
  );
}

export default EditAvatarPopup;
