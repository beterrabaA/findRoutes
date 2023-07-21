function findRoutes(array) {
    // empty mapped list
    const routes = {}

    // filling mapped list
    for ([start, end] of array) {
        routes[start] = end
    }

    // empty array to push the start path
    const startPath = []

    // finding start point
    for (key of Object.keys(routes)) {
        if (!Object.values(routes).includes(key)) {
            startPath.push(key)
        }
    }

    // finding the next city and pushing the routes
    while (startPath.length < Object.keys(routes).length + 1) {
        const nextCity = routes[startPath[startPath.length - 1]];
        startPath.push(nextCity);
    }

    // stringifing the return
    return startPath.join(', ')
}
