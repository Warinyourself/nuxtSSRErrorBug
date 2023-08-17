export const wait = (timeout = 500) => {
	return new Promise((resolve) => setTimeout(resolve, timeout))
}