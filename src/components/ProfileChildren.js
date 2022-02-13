function ProfileChildren() {
  return (
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
  );
}

export default ProfileChildren;
