const getSlug = (slug?: string | string[] | undefined) => {
	if (!slug) return 'null'
	if (typeof slug === 'string' && slug[0] === '[')
		return slug.slice(1, -1).split(',').shift()
	return typeof slug === 'string' ? slug : slug.shift()
}

export default getSlug
