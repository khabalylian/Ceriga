import { StaticImageData } from 'next/image';

export interface IData {
	id?: number;
	type: string;
	sizes: number;
	article: string;
	image: StaticImageData;
}