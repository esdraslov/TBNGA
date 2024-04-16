function guess(min, max, ToGuess, maxGuess) {
    let guesses = 0;
    let n = 0;
    let best = 0;
    let distance = 0;
    let atcMin = min;
    let atcMax = max;
    let rightGuess = false;
    while ((guesses < maxGuess) || !(rightGuess)) {
        n = Math.round(Math.random() * (atcMax - atcMin) + atcMin);
        distance = Math.abs(ToGuess - n);
        if (((distance < best) && (best > ToGuess)) || ((distance > best) && (best < ToGuess)) || (best === 0)) {
            best = distance;
        }
        if (n === ToGuess) {
            rightGuess = true;
        }
        guesses++;
    }
    return {best: best, guesses: guesses, win: rightGuess, lastGuess: n, ToGuess: ToGuess, min: atcMin, max: atcMax};
}