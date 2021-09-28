export {};

// Typed Function
const getItem = (arr: number[]): number => {
    return arr[1];
}

// Generic Function
const getItem2 = <T>(arr: T[]): T => {
    return arr[1];
};

const getItem3 = <T>(arr: T[]): T => {
    return arr[1];
}

//Array
let arr1: Array<number>;