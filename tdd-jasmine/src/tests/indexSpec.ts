import multiple from '../index';

it('expect multiple(5, 5) to equal 25', () => {
    expect(multiple(5, 5)).toEqual(25);
});

it('expect multiple(5, 5) to be 25', () => {
    expect(multiple(5, 5)).toBe(25);
});
