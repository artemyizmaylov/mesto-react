function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <>
      <button className="button place__trash-button" type="button"></button>
      <div className="place__image-container" onClick={handleClick}>
        <div
          style={{ backgroundImage: `url(${props.card.link})` }}
          className="place__img"
        />
      </div>
      <div className="place__info">
        <h2 className="place__name">{props.card.name}</h2>
        <div className="place__like">
          <button className="button place__like-button" type="button"></button>
          <p className="place__like-count">{props.card.likes.length}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
