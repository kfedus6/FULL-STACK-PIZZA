export const getPageCount = (totalCount: number, limit: number) => {
    return Math.ceil(Number(totalCount) / limit)
}

export const getPagesArray = (totalCount: number) => {
    let result = []
    for (let i = 0; i < totalCount; i++) {
        result.push(i + 1)
    }
    return result
}
