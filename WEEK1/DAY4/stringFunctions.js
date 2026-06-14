function wordLength() {
    let word = "Hello World"

    //Method 1:
    console.log(word.substring(6, 11));
    console.log(word.substring(6, 11).length);

    //Method 2 :
    console.log(word.slice(6, 11));
    console.log(word.slice(6, 11).length);

    //Method 3 :
    let s = " fly me to the moon "
    console.log(s.slice(-5));
    console.log(s.trim().split(" ").at(-1).length);
}

function wordLength2(stringLength) {
    let stringLength1 = stringLength.trim().split(" ")
    let lastWord = stringLength1.at(-1);

    console.log("The last word is " + lastWord + " with length " + lastWord.length);
}

wordLength()
wordLength2("fly me to the moon ")

function checkAnagram(string1, string2) {

    const str1 = string1.replace(/\s+/g, '').toLowerCase();
    const str2 = string2.trim().toLowerCase();
    const str11 = ([...str1].sort().join(''));
    const str21 = ([...str2].sort().join(''));

    let isAnagram = true
    let isNotAnagram = false

    if (str11 === str21) {
        console.log("words are anagram");
        console.log(isAnagram)
    }
    else {
        console.log("words are not anagram");
        console.log(isNotAnagram)
    }
}

checkAnagram("Listen", " Silent ");
checkAnagram("hello", " world ");