import type { ScreenSize } from '$lib/types/utils.type';

export const squaresScreen1: Array<SquareConfig> = [
	{ center: { x: 0.03, y: 0.07 }, size: 285, angle: 45, width: 1, color: '#1C2EFF', screen: 'xs' },
	{ center: { x: 0.5, y: -0.06 }, size: 285, angle: 25, width: 1, color: '#1C2EFF', screen: 'md' },
	{ center: { x: 0.7, y: 0.2 }, size: 100, angle: 55, width: 1, color: '#1C2EFF', screen: 'xs' },
	{ center: { x: 0.96, y: 0.25 }, size: 300, angle: 85, width: 1, color: '#1C2EFF', screen: 'md' },
	{ center: { x: 0.02, y: 0.63 }, size: 100, angle: 35, width: 1, color: '#1C2EFF', screen: 'xs' },
	{ center: { x: 0.98, y: 0.72 }, size: 100, angle: 15, width: 1, color: '#1C2EFF', screen: 'xs' },

	{ center: { x: 0.26, y: -0.1 }, size: 400, angle: 85, width: 2, color: '#FFED32', screen: 'md' },
	{ center: { x: 0.72, y: -0.05 }, size: 300, angle: 55, width: 2, color: '#FFED32', screen: 'xs' },
	{ center: { x: 0.97, y: 0.02 }, size: 100, angle: 5, width: 2, color: '#FFED32', screen: 'md' },
	{ center: { x: 0.04, y: 0.33 }, size: 100, angle: 25, width: 2, color: '#FFED32', screen: 'xs' },
	{ center: { x: 0.89, y: 0.45 }, size: 100, angle: 65, width: 2, color: '#FFED32', screen: 'xs' },
	{ center: { x: 0.01, y: 0.9 }, size: 100, angle: 65, width: 2, color: '#FFED32', screen: 'xs' },
	{ center: { x: 0.98, y: 0.91 }, size: 100, angle: 65, width: 2, color: '#FFED32', screen: 'xs' }
];

export const squaresScreen2: Array<SquareConfig> = [
	{ center: { x: 0.03, y: 0.27 }, size: 285, angle: 45, width: 1, color: '#1C2EFF', screen: 'xs' },
	{ center: { x: 0.5, y: 0.22 }, size: 235, angle: 25, width: 1, color: '#1C2EFF', screen: 'md' },
	{ center: { x: 0.7, y: 0.2 }, size: 100, angle: 55, width: 1, color: '#1C2EFF', screen: 'xs' },
	{ center: { x: 0.96, y: 0.25 }, size: 300, angle: 85, width: 1, color: '#1C2EFF', screen: 'md' },
	{ center: { x: 0.02, y: 0.63 }, size: 100, angle: 35, width: 1, color: '#1C2EFF', screen: 'xs' },
	{ center: { x: 0.98, y: 0.72 }, size: 100, angle: 15, width: 1, color: '#1C2EFF', screen: 'xs' },

	{ center: { x: 0.26, y: 0.28 }, size: 400, angle: 85, width: 2, color: '#FFED32', screen: 'md' },
	{ center: { x: 0.72, y: 0.27 }, size: 300, angle: 45, width: 2, color: '#FFED32', screen: 'xs' },
	{ center: { x: 0.97, y: 0.02 }, size: 100, angle: 5, width: 2, color: '#FFED32', screen: 'md' },
	{ center: { x: 0.04, y: 0.33 }, size: 100, angle: 25, width: 2, color: '#FFED32', screen: 'xs' },
	{ center: { x: 0.89, y: 0.45 }, size: 100, angle: 65, width: 2, color: '#FFED32', screen: 'xs' },
	{ center: { x: 0.01, y: 0.9 }, size: 100, angle: 65, width: 2, color: '#FFED32', screen: 'xs' },
	{ center: { x: 0.98, y: 0.91 }, size: 100, angle: 65, width: 2, color: '#FFED32', screen: 'xs' }
];

export type SquareConfig = {
	center: {
		x: number;
		y: number;
	};
	size: number;
	angle: number;
	width: number;
	color: string;
	screen: ScreenSize;
};
