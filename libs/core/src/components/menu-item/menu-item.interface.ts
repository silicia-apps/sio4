export interface Sio4MenuItemInterface {
  menuItemId: number;
  icon: string | undefined;
  caption: string | undefined;
  url: string;
  type: 'download' | 'navigate';
  disabled: boolean;
  badge: number;
  tabbed: boolean;
  styleMenu: string;
}