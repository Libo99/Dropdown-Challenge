export interface Data {
  category: string;
  item: MenuItem[];
  isSelected: boolean;
}

export interface MenuItem {
  id: number;
  name: string;
  isSelected: boolean;
  image: any;
}
