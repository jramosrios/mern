function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}
// function fiveHeadsSync() {
//     let headsCount = 0;
//     let attempts = 0;
//     while (headsCount < 5) {
//         attempts++;
//         let result = tossCoin();
//         console.log(`${result} was flipped`);
//         if (result === "heads") {
//             headsCount++;
//         } else {
//             headsCount = 0;
//         }
//     }
//     return `It took ${attempts} tries to flip five "heads"`;
// }
// console.log(fiveHeadsSync());
// console.log("This is run after the fiveHeadsSync function completes");

function fiveHeads() {
    return new Promise((resolve, reject) => {
        // your code here!
        let headCount = 0;
        let attempts = 0;
        let maxAttempts = 100;

        while (headCount < 5 && attempts <= maxAttempts) {
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped`)
            if (result === "heads") {
                headCount++;
            } else {
                headCount = 0
            }
        }
        if (attempts <= maxAttempts) {
            resolve(`It took ${attempts} to get 5 heads in a row`)
        } else {
            reject("You failed to get 5 heads in 100 tries!")
        }

    });
}
fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err));
console.log("When does this run now?");
