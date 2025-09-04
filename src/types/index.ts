export enum ItemTypes {
  TEXT = 'text',
  IMAGE = 'image',
}

export interface IItem {
  id: string;
  type: ItemTypes,
  content: string, // url if type IMAGE, text if type TEXT
  position?: number, // fractional index
  categoryId?: string,
}

export interface ICategory {
  id: string;
  name: string;
}
