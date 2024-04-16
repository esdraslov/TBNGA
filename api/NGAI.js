function guess(min, max, ToGuess, maxGuess) {
    let guesses = 0;
    let n = 0;
    let best = 0;
    let distance = 0;
    let atcMin = min;
    let atcMax = max;
    let rightGuess = false;
    let guessToWin = 0;
    while ((guesses <= maxGuess)) {
        if (!rightGuess) {
            n = Math.round(Math.random() * (atcMax - atcMin) + atcMin);
            distance = Math.abs(ToGuess - n);
            if (((n < best) && (best > ToGuess)) || ((n > best) && (best < ToGuess)) || (best === 0)) {
                best = distance;
            }
            if (n < ToGuess) {
                atcMin++;
            } else if (n > ToGuess) {
                atcMax--;
            }
            if (n === ToGuess) {
                rightGuess = true;
            }
            guessToWin++
        }
        guesses++;
    }
    return {best: best, guesses: guessToWin, win: rightGuess, lastGuess: n, ToGuess: ToGuess, min: atcMin, max: atcMax};
}