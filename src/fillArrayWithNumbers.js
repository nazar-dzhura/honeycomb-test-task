export const createRandomArray = (rows, columns) => {
    const sortedArray = fillSortedArray(rows, columns)
    const shuffledArray = shuffleArray(sortedArray)
    return twoDimsOfOne(shuffledArray, rows, columns)
}

const fillSortedArray = (rows, columns) => {
    const arr = []
    const countOfNumbers = rows*columns
    for (let i = 0; i < countOfNumbers; i++) {
        arr.push(i + 1)
    }
    return arr
}

const shuffleArray = arr => {
    const shuffledArray = []
    while (arr.length !== 0) {
        const randomInt = createRandomInt(0, arr.length)
        shuffledArray.push(arr[randomInt])
        arr.splice(randomInt, 1)
    }
    return shuffledArray
}

const twoDimsOfOne = (arr, rows, columns) => {
    const twoDimArray = []
    for (let i = 0; i < rows; i++) {
        twoDimArray.push(arr.splice(0, columns))
    }
    return twoDimArray
}

const createRandomInt = (min, max) => {
    return Math.floor(Math.random()*(max-min) + min)
}