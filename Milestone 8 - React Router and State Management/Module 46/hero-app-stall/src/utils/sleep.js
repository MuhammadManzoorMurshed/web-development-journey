export const sleep = (ms) => {
    const promise = new Promise((resolve) => {
        return setTimeout(resolve, ms);
    })

    return promise;
}