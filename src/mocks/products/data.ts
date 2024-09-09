import { IProduct } from '@/features/product/models';

export const products: IProduct[] = [
  {
    id: '1',
    thumbnail: '/static/ps5_controller@2x.jpg',
    title: 'PS5 Controller',
    price: '70.00$',
    description: 'A sleek, ergonomic PlayStation controller with responsive buttons and adaptive triggers.',
    tags: [
      {
        label: 'Tech',
      },
      {
        label: 'Black',
      },
    ],
  },
  {
    id: '2',
    thumbnail: '/img/gamecube@2x.jpg',
    title: 'Gamecube',
    price: '120.00$',
    description: 'A compact and durable GameCube console with a unique, cube-shaped design.',
    tags: [
      {
        label: 'Tech',
      },
      {
        label: 'Grey',
      },
    ],
  },
  {
    id: '3',
    thumbnail: '/img/steamdeck@2x.jpg',
    title: 'Steam Deck',
    price: '350.00$',
    description: 'A powerful, portable Steam Deck console with a vibrant touchscreen and ergonomic controls.',
    tags: [
      {
        label: 'Tech',
      },
      {
        label: 'Grey',
      },
    ],
  },
  {
    id: '4',
    thumbnail: '/img/sega_handleheld@2x.jpg',
    title: 'Sega Handheld',
    price: '50.00$',
    description: 'A classic Sega handheld console with a vibrant screen and a library of iconic games.',
    tags: [
      {
        label: 'Tech',
      },
      {
        label: 'Black',
      },
    ],
  },
  {
    id: '5',
    thumbnail: '/img/playdate@2x.jpg',
    title: 'Playdate',
    price: '220.00$',
    description: 'A charming, pocket-sized Playdate console with a unique crank controller.',
    tags: [
      {
        label: 'Tech',
      },
      {
        label: 'Black',
      },
    ],
  },
  {
    id: '6',
    thumbnail: '/img/nintendo_switch@2x.jpg',
    title: 'Nintendo Switch',
    price: '350.00$',
    description: 'Console with a vibrant display, detachable Joy-Con controllers.',
    tags: [
      {
        label: 'Tech',
      },
      {
        label: 'Black',
      },
    ],
  },
];
