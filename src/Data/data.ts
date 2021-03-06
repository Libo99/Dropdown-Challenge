import Avatar from '../assets/Avatar.png';
export const integrations = {
  category: 'Integrations',
  isSelected: false,
  item: [
    {
      id: 1,
      image:
        'https://www.activecampaign.com/site/assets/mark-blue-1627270023.svg',
      name: 'ActiveCampaign',
      isSelected: false,
      type: 'Integration',
    },
    {
      id: 2,
      image:
        'https://play-lh.googleusercontent.com/Ac7UebUnwu5-zLt4gN1HlW5KgZhquPJbNhQk2chzdrMjoTPxKJQkxBL5FGAJgp3lCw',
      name: 'Google Analytics',
      isSelected: false,
      type: 'Integration',
    },
    {
      id: 3,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png',
      name: 'Instagram',
      isSelected: false,
      type: 'Integration',
    },
    {
      id: 4,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/WooCommerce_logo.svg/1200px-WooCommerce_logo.svg.png',
      name: 'Woocommerce',
      isSelected: false,
      type: 'Integration',
    },
    {
      id: 5,
      image: 'https://nsales.dk/wp-content/uploads/2021/04/shopify-bag.png',
      name: 'Shopify',
      isSelected: false,
      type: 'Integration',
    },
  ],
};

export const users = {
  category: 'Users',
  isSelected: true,
  item: [
    {
      id: 1,
      image: Avatar,
      name: 'Louie Popp',
      isSelected: false,
      type: 'User',
    },
    {
      id: 2,
      image: Avatar,
      name: 'Jonas Rafn',
      isSelected: false,
      type: 'User',
    },
    {
      id: 3,
      image: Avatar,
      name: 'Fiona Rakipi',
      isSelected: false,
      type: 'User',
    },
    {
      id: 4,
      image: Avatar,
      name: 'Martin Navne',
      isSelected: false,
      type: 'User',
    },
    {
      id: 5,
      image: Avatar,
      name: 'Kristoffer Degn',
      isSelected: false,
      type: 'User',
    },
  ],
};

export const data = [users, integrations];
