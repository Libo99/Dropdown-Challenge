export interface Data {
  item: MenuItem[];
  isSelected: boolean;
}

export interface MenuItem {
  id: number;
  name: string;
  isSelected: boolean;
  image: any;
}
