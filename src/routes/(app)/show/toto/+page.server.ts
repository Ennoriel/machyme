import { randomHexColor } from 'chyme';

export const load = () => {
	return {
		c1: randomHexColor(),
		c2: randomHexColor()
	};
};
