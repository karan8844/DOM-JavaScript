async function getRandomNumber() {
    const randomDelay = Math.random() * 3000;
    await new Promise(resolve => setTimeout(resolve, randomDelay));
    const randomNumber = Math.random();
    console.log('random number', randomNumber);
}
getRandomNumber();