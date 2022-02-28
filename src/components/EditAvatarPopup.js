import { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const input = useRef();
  const { isOpen, onClose, onUpdateAvatar } = props;

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: input.current.value,
    });

    input.current.value = '';
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
    >
      <form
        className="popup__form"
        name="avatar"
        method="post"
        noValidate
        onSubmit={handleSubmit}
      >
        <label className="popup__input-label" htmlFor="avatar-link">
          <input
            ref={input}
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
