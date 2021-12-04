import Avatar from '../assets/Avatar.png';
export const integrations = {
  category: 'Integrations',
  item: [
    { id: 1, image: Avatar, name: 'ActiveCampaign', isSelected: false },
    { id: 2, image: Avatar, name: 'Google Analytics', isSelected: false },
    { id: 3, image: Avatar, name: 'Instagram', isSelected: false },
    { id: 4, image: Avatar, name: 'Woocommerce', isSelected: false },
    { id: 5, image: Avatar, name: 'Shopify', isSelected: false },
  ],
};

export const users = {
  category: 'Users',
  item: [
    { id: 1, image: Avatar, name: 'Louie Popp', isSelected: false },
    { id: 2, image: Avatar, name: 'Jonas Rafn', isSelected: false },
    { id: 3, image: Avatar, name: 'Fiona Rakipi', isSelected: false },
    { id: 4, image: Avatar, name: 'Martin Navne', isSelected: false },
    { id: 5, image: Avatar, name: 'Kristoffer Degn', isSelected: false },
  ],
};

export const data = [users, integrations];
