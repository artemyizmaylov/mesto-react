function ImagePopup(props) {
  return (
    <div
      className={`popup image-popup
      ${props.card && 'popup_opened'}`}
    >
      {props.card && (
        <div className="popup__image-container">
          <button
            className="button popup__close-button"
            type="button"
            onClick={props.onClose}
          ></button>
          <img
            src={props.card.link}
            alt={props.card.name}
            className="popup__img"
          />
          <h2 className="popup__heading popup__image-name">
            {props.card.name}
          </h2>
        </div>
      )}
    </div>
  );
}

export default ImagePopup;
