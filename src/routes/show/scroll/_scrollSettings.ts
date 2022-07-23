export const SETTINGS = {
	BLUR: {
		a: {
			min: -1,
			max: 1,
			default: 0.05,
			step: 0.01
		},
		b: {
			min: -100,
			max: 100,
			default: -15,
			step: 5
		},
		effect: {
			name: 'blur',
			unit: 'px'
		}
	},
	HUE_ROTATE: {
		a: {
			min: -1,
			max: 2,
			default: 1,
			step: 0.1
		},
		b: {
			min: -100,
			max: 100,
			default: -10,
			step: 5
		},
		effect: {
			name: 'hue-rotate',
			unit: 'deg'
		}
	},
	GRAYSCALE: {
		a: {
			min: -1,
			max: 1,
			default: 0.2,
			step: 0.01
		},
		b: {
			min: -100,
			max: 100,
			default: -60,
			step: 5
		},
		effect: {
			name: 'grayscale',
			unit: '%'
		}
	},
	OPACITY: {
		a: {
			min: -1,
			max: 1,
			default: -0.1,
			step: 0.01
		},
		b: {
			min: -100,
			max: 100,
			default: 60,
			step: 5
		},
		effect: {
			name: 'opacity',
			unit: '%'
		}
	}
};
