// #1: Write a function that takes in an array of numbers. The function should return True if any two numbers in list sum to 0, and false otherwise.

function addToZero(numArr) {
    if (numArr.length < 2) return false;

    for (let i = 0; i < numArr.length; i++) {
        for (let j = i + 1; j < numArr.length; j++) {
            const total = numArr[i] + numArr[j]
            if (total === 0) {
                console.log(numArr[i], numArr[j])
                return true
            };
        }
    }

    return false;
}

// addToZero([]);
// -> False

// addToZero([1]);
// -> False

// addToZero([1, 2, 3]);
// -> False

addToZero([1, 2, 3, -2]);
// -> True

// addToZero([99, 42, 50, 3, -42, 3245])




// #3: A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

// For example:
function isPangram(sentenceStr) {
    sentenceStr = sentenceStr.toLowerCase();
    sentenceStr = sentenceStr.replace(/([^a-z])+/g, '')

    const letters = {};

    for (let i = 0; i < sentenceStr.length; i++) {
        if (!letters[sentenceStr[i]]) {
            letters[sentenceStr[i]] = 1;
        } else {
            letters[sentenceStr[i]] += 1;
        }
    }

    return Object.keys(letters).length === 26
}

// isPangram("The quick brown, fox jumps over the lazy dog!");
// -> True

// isPangram("I like cats, but not mice");
// -> False

isPangram('cdefghijklmnopqrstuvwxyzzz')