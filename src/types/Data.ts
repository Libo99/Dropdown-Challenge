export interface Data {
  category: string;
  item: MenuItem[];
  isSelected: boolean;
}

export interface MenuItem {
  name: string;
  isSelected: boolean;
}
