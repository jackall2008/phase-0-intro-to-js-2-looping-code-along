function writeCards(friends, eventName) {
    let newArray = [];
    for (let i = 0; i < friends.length; i++) {
        newArray.push(`Thank you, ${friends[i]}, for the wonderful surprise gift!`);
    }
    return newArray;
}
writeCards(friends);

function countDown(integer) {
    while (integer >= 0) {
        console.log(integer);
        integer--;
    }
}