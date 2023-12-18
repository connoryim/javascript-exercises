const palindromes = function (word) {
    var punctuation = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g
    var letters = word.toLowerCase().replace(punctuation,"").split("");
    letters = letters.filter(word =>{
        return /\S/.test(word);
    });
    console.log(letters);
    for(i = 0; i<= letters.length; i++){
        var j = letters.length - i -1;
        if (letters[i]!== letters[j]) {
            console.log(letters[i]);
            console.log(letters[j]);
            return false;            
        }
    };
    return true;
};

// Do not edit below this line
module.exports = palindromes;
