generateRandomNumbers = () => {
    let randomNumbers = [];
    for(let i = 0; i < 105; i++){
        let randomNumber = Math.floor((Math.random() * 9999) + 1);
        randomNumbers.push(randomNumber);
    }
    return randomNumbers;
}