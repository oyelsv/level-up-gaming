import { ITag } from './tag';

export interface IProduct {
  id: string;
  price: string;
  title: string;
  description: string;
  tags: ITag[];
  thumbnail: string;
}
