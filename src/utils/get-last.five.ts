function getLastFive<T>(list: T[]): T[] {
    if (list.length <= 5) return list;
    const result = [];
    for (let i = 0, length = list.length; i < 5; i++) {
        result.push(list[length - 5 + i]);
    }
    return result;
}
export { getLastFive };
