import { Sio4MenuInterface } from '../sio4-menu';
export interface Sio4AppInterface {
  atitle: string;
  sidemenu: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none';
  color: string | undefined;
  menu: Sio4MenuInterface | undefined;
}