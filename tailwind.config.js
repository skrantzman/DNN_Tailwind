module.exports = {
	purge: [],
	theme: {
		extend: {
			fontFamily: {
				open_sans: ["Open Sans", "Helvetica", "Arial", "sans-serif"],
			},
			colors: {
				dnnblue: {
					100: "#E6F6FC",
					200: "#BFE8F8",
					300: "#99DBF4",
					400: "#4DBFEC",
					500: "#00A4E4",
					600: "#0094CD",
					700: "#006289",
					800: "#004A67",
					900: "#003144",
				},
				dnnbrown: {
					100: "#EDEAEA",
					200: "#D1CACA",
					300: "#B5AAAA",
					400: "#7E6A6B",
					500: "#472A2B",
					600: "#402627",
					700: "#2B191A",
					800: "#201313",
					900: "#150D0D",
				},
				dnnred: {
					100: "#FDECEC",
					200: "#FBCFD0",
					300: "#F9B2B3",
					400: "#F4787B",
					500: "#EF3E42",
					600: "#D7383B",
					700: "#8F2528",
					800: "#6C1C1E",
					900: "#481314",
				},
			},
			gradients: (theme) => ({
				"dk_blue-lt_blue": [theme("colors.dnnblue.700"), theme("colors.blue.400")],
				"blue-green": [theme("colors.blue.500"), theme("colors.green.500")],
				"purple-blue": [theme("colors.purple.500"), theme("colors.blue.500")],
			}),
			minHeight: {
				"16": "4rem",
				"32": "8rem",
				"64": "16rem",
			},
		},
	},
	variants: {
		backgroundColor: ["responsive", "hover", "focus", "active"],
		gradients: ["responsive", "hover"],
	},
	plugins: [require("@tailwindcss/typography"), require("./plugins/gradients")],
};
