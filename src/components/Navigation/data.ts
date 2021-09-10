import { RoutePattern } from '../../routes/RoutePattern';
import { MenuItemsTypes } from './types';

export const menuItems: MenuItemsTypes[] = [
  {
    name: 'home',
    to: RoutePattern.Home,
  },
  {
    name: 'experience',
    to: RoutePattern.Experience,
  },
  {
    name: 'about',
    to: RoutePattern.About,
  },
];
