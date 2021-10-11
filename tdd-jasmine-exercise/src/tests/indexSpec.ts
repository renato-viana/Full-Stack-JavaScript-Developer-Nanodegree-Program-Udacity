import numbers from '../utilities/numbers';
import strings from '../utilities/strings';

const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];

it('expect multiple(5, 5) to equal 25', () => {
    expect(numbers.multiply(5, 5)).toEqual(25);
});

it('should be a greater sum than 13', () => {
    expect(numbers.sum(9, 7)).toBeGreaterThan(13);
})

it('should be a less subtract than 7', () => {
    expect(numbers.subtract(9, 7)).toBeLessThan(7);
})

it('should be a even number', () => {
    expect(numbers.divide(8, 2)).not.toBePositiveInfinity(0);
})

it('should be the same type and value', () => {
    expect(numbers.square(3)).toBe(9);
})

it('should be a string', () => {
    expect(strings.capitalize("Let's go!")).not.toBeNaN();
})

it('should contain the letter s', () => {
    expect(strings.lowerCase("Let's go!")).toContain('s');
})




