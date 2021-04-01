import { getLetterMatchCount } from './index'

describe('getLetterMatchCount', () => {
    const secretWord = 'party'
    test('returns correct count when there are no matching letters', () => {
        const matchingLetters = getLetterMatchCount('bones', secretWord)
        expect(matchingLetters).toBe(0)
    });
    test('returns correct count when there are three matching letters', () => {
        const matchingLetters = getLetterMatchCount('park', secretWord)
        expect(matchingLetters).toBe(3)
    });
    test('returns correct count when there are duplicate letters', () => {
        const matchingLetters = getLetterMatchCount('parka', secretWord)
        expect(matchingLetters).toBe(3)
    });
    test('returns correct count when it is success' , () => {
        const matchingLetters = getLetterMatchCount('party', secretWord)
        expect(matchingLetters).toBe(5)
    });
}) 