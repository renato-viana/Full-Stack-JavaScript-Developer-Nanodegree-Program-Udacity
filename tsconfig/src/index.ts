const myName = "your name";

const hello = (userName: string): string => `hello, ${userName}`;

console.log(hello);

let lista: number[] = [1, 2, 3];

interface Student {
    readonly name: "Renato";
    lastName?: "Viana";
    age: number;
}

const multiply = (num1: number, num2: number) => {
    return num1 * num2;
};

const concat = (str1:string, str2:string) =>{
    return str1 + str2;
};

const concatArr = (arr1, arr2) => {
    return [...arr1, ...arr2];
  };