import { Routes } from '@angular/router';
import {VillageOverview} from './village/village-overview/village-overview';

export const routes: Routes = [
  {
    path: '',
    component: VillageOverview,
    title: 'VillageService Overview',
  },
];
