import { Sio4CoreMenuInterface } from '../menu';
export interface Sio4CoreAppInterface {
  appName: string;
  sidemenu: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none';
  color: string | undefined;
  menu: Sio4CoreMenuInterface | undefined;
}