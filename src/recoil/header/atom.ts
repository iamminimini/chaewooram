import { atom } from 'recoil';

export const isSubMenuVisibleState = atom<boolean>({
  key: 'isSubMenuVisibleState',
  default: false,
});

export const isDarkThemeState = atom({
  key: 'isDarkThemeState',
  default: true,
});
