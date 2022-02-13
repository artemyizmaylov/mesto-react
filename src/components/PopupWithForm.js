function PopupWithForm(props) {
  return (
    <div
      className={`popup ${props.name}-popup
      ${props.isOpen ? 'popup_opened' : ''}`}
    >
      <div className="popup__container">
        <button
          className="button popup__close-button"
          type="button"
          onClick={props.onClose}
        />
        <h2 className="popup__heading">{props.title}</h2>
        <props.children />
      </div>
    </div>
  );
}

export default PopupWithForm;
