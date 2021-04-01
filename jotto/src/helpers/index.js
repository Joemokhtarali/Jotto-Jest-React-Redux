export function getLetterMatchCount(guessedWord, secretWord){
    const secretLetters = secretWord.split('')
    const guessedWordLettersObj = new Set(guessedWord)
    return secretLetters.filter(letter => guessedWordLettersObj.has(letter)).length
}