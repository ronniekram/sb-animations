module.exports = {
	theme: {
		colors: {
			current: `currentColor`,
			transparent: `transparent`,
			white: `#FFFFFF`,
			black: `#000000`,
      primary: {
        DEFAULT: `rgba(0, 76, 81, 1)`,
        dark: `rgba(1, 60, 64, 1)`,
        light: `rgba(6, 129, 137, 1)`,
        screen: `rgba(0, 76, 81, 0.1)`,
      },
      accent: {
        primary: `rgba(255, 163, 123, 1)`,
        screen: `rgba(255, 163, 123, 0.25)`,
      },
      yellow: {
        100: `rgba(255, 252, 229, 1)`,
      },
		},
		fontSize: {
			"2xs": [`11px`, `14.3px`],
			"xs": [`12px`, `24px`],
			"sm": [`14px`, `22.4px`],
			"base": [`16px`, `25.6px`],
			"lg": [`18px`, `28.8px`],
			"xl": [`20px`, `35px`],
			"2xl": [`24px`, `36px`],
			"3xl": [`30px`, `39px`],
			"4xl": [`36px`, `43.2px`],
			"5xl": [`48px`, `48px`],
			"6xl": [`60px`, `57px`],
			"7xl": [`72px`, `68.4px`],
			"8xl": [`96px`, `91.2px`],
			"9xl": [`108px`, `102.6px`],
			"10xl": [`160px`, `152px`],
		},
		fontWeight: {
			thin: 200,
			light: 300,
			regular: 400,
			medium: 500,
			semi: 600,
			bold: 700,
			black: 900,
		},
		fontFamily: {
			sans: [`Roboto`, `sans-serif`],
			condensed: [`Roboto Condensed`, `sans-serif`],
			mono: [`Roboto Mono`, `monospace`],
		},
    extend: {
      boxShadow: {
        primary: {
          lg: `0px 10px 15px rgba(6, 129, 137, 0.3)`,
          sm: `0px 3px 5px rgba(6, 129, 137, 0.3)`,
        },
        accent: {
          lg: `0px 10px 15px rgba(255, 163, 123, 0.35)`,
          sm: `0px 3px 5px rgba(255, 163, 123, 0.4)`,
        },
      },
    },
	},
};