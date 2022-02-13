function AvatarChildren() {
  return (
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
  );
}

export default AvatarChildren;
