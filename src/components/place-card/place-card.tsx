export type PlaceCardProps = {
  id?: number;
  label?: string;
  imageSrc: string;
  price: number;
  title: string;
  type: 'Apartment' | 'Room';
  rating: number;
  unit: string;
  inBookmark?: boolean;
}


export function PlaceCard({type, price, rating, title, label, unit, imageSrc, id, inBookmark}: PlaceCardProps) {
  return (
    <article className="cities__card place-card" key={id}>
      {
        label && (
          <div className="place-card__mark">
            <span>{label}</span>
          </div>
        )
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={imageSrc} width="260" height="200" alt={title}/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;{unit}</span>
          </div>
          <button className={`place-card__bookmark-button button ${inBookmark ? 'place-card__bookmark-button--active' : ''}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
