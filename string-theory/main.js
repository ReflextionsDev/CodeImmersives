// xify - returns the same string, but with every character replaced by an 'x' 

console.log('\n' + "xify: ")

function xify(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
        output = output + 'x';
    }
    return output;
}

console.log(xify('hello'));
console.log(xify('hi there'));

// yellingChars - returns the given string with an exclamation point after each character 

console.log('\n' + "yellingChars: ")

function yellingChars(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
        output += str[i] + '!'
    }
    return output;
}

console.log(yellingChars('yeet'));
console.log(yellingChars('hello there!'));

// indexedChars - adds the index of each character before that character in the given string 

console.log('\n' + "indexedChars: ")

function indexedChars(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
        output += i + str[i];
    }
    return output;
}

console.log(indexedChars("hello"));

// numberedChars - adds the number of each character before that character in the given string 

console.log('\n' + "numberedChars")

function numberedChars(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
        output += '(' + (i + 1) + ')' + str[i];
    }
    return output;
}

console.log(numberedChars('greetings!'));
console.log(numberedChars('hello'));

// exclaim - returns the given sentence with every question mark or period changed to an exclamation point 

console.log('\n' + "exclaim:");

function exclaim(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '?' || str[i] === '.') {
            output += '!';
        } else {
            output += str[i];
        }
    }
    return output;
}

console.log(exclaim('Hello! Anyone home? I am back.'));

// repeatIt - returns the given string repeated n times, where n is the second parameter 

console.log('\n' + "repeatIt:");

function repeatIt(str, n) {
    let output = '';
    for (let i = 0; i < n; i++) {
        for (let i = 0; i < str.length; i++) {
            output += str[i];
        }
    }
    return output;
}

console.log(repeatIt('yes', 2));
console.log(repeatIt('String', 3));
console.log(repeatIt('hello', 1));
console.log(repeatIt('hi', 0));

// truncate - shortens a long string to 15 characters plus an ellipsis (...) 

console.log('\n' + 'truncate: ');

function truncate(str) {
    let output = '';
    for (let i = 0; i < 15; i++) {
        output += str[i];
    }
    output += '...';
    return output;
}

console.log(truncate('The fault, dear Brutus, is not in our stars, but in ourselves.'));
console.log(truncate("Well, that's just, like, your opinion man."));

// ciEmailify - creates an email from a two-part name 

console.log('\n' + 'ciEmailify: ');

function ciEmailify(str) {
    let output = '';
    output = (str.split(" ")[0] + "." + str.split(" ")[1] + "@codeimmersives.com").toLowerCase();
    return output;
}

console.log(ciEmailify('colin jaffe'));
console.log(ciEmailify('Anthony DeRosa'));

// reverse - reverses the given string 

console.log('\n' + 'reverse: ')

function reverse(str) {
    let output = '';
    for (let i = str.length - 1; i > -1; i--) {
        output += str[i];
    }
    return output
}

console.log(reverse("reverse me"));
console.log(reverse("colin"));

// onlyVowels - returns only the vowels from a word 

console.log('\n' + 'onlyVowels: ')

function onlyVowels(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
        x = str[i];
        if (x === 'A' || x === 'E' || x === 'I' || x === 'O' || x === 'U' || x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') {
            output += x;
        }
    }
    return output;
}

console.log(onlyVowels("Colin Jaffe"));
console.log(onlyVowels('Anthony DeRosa'))
console.log(onlyVowels('quickly'))

// crazyCase - returns the given string with alternating lower and upper cases

console.log('\n' + 'crazyCase: ')

function crazyCaze(str) {

    let output = '';

    for (let i = 0; i < str.length; i++) {

        x = str[i]

        if (i % 2 == 0) {
            output += x.toLowerCase();
        } else {
            output += x.toUpperCase();
        }
    }

    return output
}

console.log(crazyCaze('multiple words here'))
console.log(crazyCaze('java is the same as javascript'))

// titleCase - returns a transformed version of the given string where every word starts with a capital letter and every non-word-starting letter is lowercased 

console.log('\n' + 'titleCase: ')

function titleCase(str) {

    let output = '';

    for (let i = 0; i < str.split(" ").length; i++) {

        let word = str.split(" ")[i];;
        let wordNew = '';

        for (let j = 0; j < word.length; j++) {
            if (j === 0) {
                wordNew += word[j].toUpperCase();
            } else {
                wordNew += word[j].toLowerCase();
            }
        }

        output += wordNew + " ";
    }

    return output;
}


console.log(titleCase('multiple words here'));
console.log(titleCase('return of the king'));

// camelCase - returns the given string in camel case 

console.log('\n' + 'camelCase: ')

function camelCase(str) {

    let output = '';

    for (let i = 0; i < str.split(" ").length; i++) {

        let word = str.split(" ")[i];;
        let wordNew = '';

        for (let j = 0; j < word.length; j++) {
            if (j === 0 && i !== 0) {
                wordNew += word[j].toUpperCase();
            } else {
                wordNew += word[j].toLowerCase();
            }
        }

        output += wordNew;
    }

    return output;
}

console.log(camelCase('multiple words here'));
console.log(camelCase('return of the king'));

// crazyCase2ReturnOfCrazyCase - same as crazyCase, but does NOT count spaces as letters to upper or lower case (see examples below!) 

console.log('\n' + 'crazyCase2: ')

function crazyCaze2(str) {

    let output = '';
    let count = 1;

    for (let i = 0; i < str.length; i++) {

        x = str[i];

        if (str[i] !== " ") {
            count++;
        }

        if (count % 2 == 0) {
            output += x.toLowerCase();
        } else {
            output += x.toUpperCase();
        }
    }

    return output
}

console.log(crazyCaze2('multiple words here'))
console.log(crazyCaze2('java is the same as javascript'))