const string = "Привет, мир!"

const vowels = ["у", "е", "ы", "а", "о", "э", "я", "и", "ю", "ё", "Ё", "У", "Е", "Ы", "А", "О", "Э", "Я", "И", "Ю" ]

const getVowels = stringToFilter => {
    let extractedVowels = "";

    for (let i = 0; i < stringToFilter.length; i++) {
        const currentLetter = stringToFilter[i];
        
        if (vowels.includes(currentLetter)) {
            extractedVowels += currentLetter;
        }
    }
    
    return extractedVowels;
}

console.log(getVowels(string));