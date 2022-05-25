export const postBrowserLinks = {
	index: () => '/post',
	show: (id: number) => `/post/${id}`,
}

export const homeBrowserLinks = {
	index: () => '/',
}

export const menuBrowserLinks = {
	index: () => homeBrowserLinks.index(),
	posts: () => postBrowserLinks.index(),
	about: () => '/about',
}
