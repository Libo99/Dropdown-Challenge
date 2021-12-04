export interface Data {
  category: string;
  item: MenuItem[];
}

export interface MenuItem {
  id: number;
  name: string;
  isSelected: boolean;
  image: any;
}
