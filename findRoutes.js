const exemplo1 = [["GRU", "SSA"], ["GIG", "POA"], ["SSA", "GIG"], ["POA", "FOR"]]

const exemplo2 = [["B", "C"], ["C", "D"], ["A", "B"]];

const exemple3 = [["Salvador", "Fortaleza"],["São Paulo", "Rio de Janeiro"],["Fortaleza", "Manaus"],["Rio de Janeiro", "Salvador"]]

const exemplo4 = [["BRA","MEX"],["JPN","PHL"],["MEX","JPN"],["PHL","USA"],["USA","AUS"],["AUS","PRY"]]

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

console.log(findRoutes(exemplo1))  // "GRU, SSA, GIG, POA, FOR"
console.log(findRoutes(exemplo2)) // "A, B, C, D"
console.log(findRoutes(exemple3)) // "São Paulo, Rio de Janeiro, Salvador, Fortaleza, Manaus"
console.log(findRoutes(exemplo4)) // "BRA, MEX, JPN, PHL, USA"
