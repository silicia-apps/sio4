import { sio4Color } from '../../global/types';
import { Sio4MenuInterface } from '../menu';
export interface Sio4AppInterface {
  appname: string;
  sidemenu: 'overlay'| 'reveal'| 'push' | 'toogle' | 'none';
  color: sio4Color;
  tab: 'side' | 'bottom' | 'top' | 'none';
  menu: Sio4MenuInterface | undefined;
}