export const sortMatrix = arr => {
    let swapsCount = 0
    const start = window.performance.now();
    arr.forEach(row => {
        let len = row.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (row[j] > row[j + 1]) {
                    let tmp = row[j];
                    row[j] = row[j + 1];
                    row[j + 1] = tmp;
                    swapsCount++
                }
            }
        }
    })
    const end = window.performance.now();
    return {'result': arr, 'sortingTime': end - start, 'swapsCount': swapsCount}
}