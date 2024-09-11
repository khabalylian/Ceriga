import { StaticImageData } from 'next/image';

export interface IData {
	type: string;
	sizes: number;
	article: string;
	image: StaticImageData;
}