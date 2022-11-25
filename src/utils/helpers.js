export const fakeDelayPromise = (data) => {
	return (
		new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(data)
			}, 1000)
		})
	)
}