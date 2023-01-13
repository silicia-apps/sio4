import { Sio4MenuItemInterface } from '../sio4-menu-item';
export interface Sio4MenuInterface {
  menuId: string;
  enabled: boolean;
  layout: 'flat' | 'accordion';
  label: string | undefined;
  color: string | undefined;
  toggleIcon: string;
  toggleIconSlot: string;
  lines: 'full' | 'inset' | 'none';
  position: 'top' | 'bottom' | 'hover';
  menuItems: Sio4MenuItemInterface[] | undefined;
}