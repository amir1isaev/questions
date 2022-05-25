const hexInRgba = (hex: any, alpha = 1) => {
	const [r, g, b] = hex.match(/\w\w/g).map((x: any) => parseInt(x, 16))
	return `rgba(${r},${g},${b},${alpha})`
}

export default hexInRgba
