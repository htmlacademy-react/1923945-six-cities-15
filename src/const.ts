import {PlaceCardProps} from './components/place-card/place-card.tsx';

export const Setting = {
  placesFound: 312,
};

export const cardsData:PlaceCardProps[] =
  [
    {
      id: 1,
      type: 'Apartment',
      price: 120,
      title: 'Beautiful & luxurious apartment at great location',
      rating: 80,
      label: 'Premium',
      unit: 'night',
      imageSrc: 'img/apartment-01.jpg',
      inBookmark: true
    },
    {
      id: 2,
      type: 'Room',
      price: 80,
      title: 'Wood and stone place',
      rating: 80,
      label: '',
      unit: 'night',
      imageSrc: 'img/room.jpg',
      inBookmark: false
    },
    {
      id: 3,
      type: 'Apartment',
      price: 132,
      title: 'Canal View Prinsengracht',
      rating: 80,
      label: 'Premium',
      unit: 'night',
      imageSrc: 'img/apartment-02.jpg',
      inBookmark: false
    },
    {
      type: 'Apartment',
      price: 180,
      title: 'Nice, cozy, warm big bed apartment',
      rating: 100,
      label: 'Premium',
      unit: 'night',
      imageSrc: 'img/apartment-03.jpg',
      inBookmark: true
    },
    {
      type: 'Room',
      price: 80,
      title: 'Wood and stone place',
      rating: 80,
      label: 'Premium',
      unit: 'night',
      imageSrc: 'img/room.jpg',
      inBookmark: false
    }
  ];
