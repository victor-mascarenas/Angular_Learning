generateRandomNumbers = () => {
    let randomNumbers = [];
    for(let i = 0; i < 10; i++){
        let randomNumber = Math.floor((Math.random() * 9999) + 1);
        randomNumbers.push(randomNumber);
    }
    return randomNumbers;
}