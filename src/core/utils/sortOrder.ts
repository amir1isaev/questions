const sortOrder = (a: any, b: any) => {
	if (a.order > b.order) {
		return 1
	} else {
		return -1
	}
}


export default sortOrder