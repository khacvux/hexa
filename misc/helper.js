
export const convertTime = (millis) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);

    return (minutes < 10 ? '0' : '')
        + minutes
        + ":"
        + (seconds < 10 ? '0' : '')
        + seconds;
}
