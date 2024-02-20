export interface MenuOptions {
  path: string;
  title: string;
  icon?: string;
  isLink?: string;
  isHidden?: boolean;
  close?: boolean;
  children?: MenuOptions[];
}
