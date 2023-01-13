function writeCards(names, event) {
    const personalizedCards = [];
    for (let i = 0; i < names.length; i++) {
       personalizedCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return personalizedCards;
}

function countDown(number) {
    let i = number;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}
