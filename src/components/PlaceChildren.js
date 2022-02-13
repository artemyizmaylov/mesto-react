function PlaceChildren() {
  return (
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
  );
}

export default PlaceChildren;
