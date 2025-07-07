import {Building} from './building';

export interface Village {
  id?: number;
  name: string;
  gold: number;
  wood: number;
  stone: number;
  iron: number;
  buildings: Building[];
}
