// import { first } from "./index";

// test("should first", () => {
//   expect(first([1, 2, 3], 1)).to;
// });

const { mathOperations, chunk, first, last } = require("./teste");
const exf = require('../../tp-node/echo')


describe("Calculator tests", () => {
    test("adding 1 + 2 should return 3", () => {
        expect(mathOperations.sum(1, 2)).toBe(3);
    });
});

const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
});

test("returns the first n elements of the array", () => {
    expect(first([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
});

test("function return last element ", () => {
    expect(last([1, 2, 3, 4, 5], 3)).toEqual([3, 4, 5]);
});

myColor = ["Red", "Green", "White", "Black"];

test("test the list colors", () => {
    const myColor = ["Red", "Green", "White", "Black"];

    // Use expect with toEqual to make assertions
    expect(myColor.toString()).toEqual("Red,Green,White,Black");

    // Use expect with toEqual to make assertions
    expect(myColor.join()).toEqual("Red,Green,White,Black");

    // Use expect with toEqual to make assertions
    expect(myColor.join("")).toEqual("RedGreenWhiteBlack");
});

// test(" function chunk test", () => {});

test("chunk function", () => {
    // Test case 1: array length is divisible by size
    expect(chunk([1, 2, 3, 4, 5, 6], 2)).toEqual([
        [1, 2],
        [3, 4],
        [5, 6],
    ]);

    // Test case 2: array length is not divisible by size
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([
        [1, 2],
        [3, 4],
        [5]
    ]);

    // Test case 3: size is greater than array length
    expect(chunk([1, 2, 3], 5)).toEqual([
        [1, 2, 3]
    ]);

    // Test case 4: empty array
    expect(chunk([], 2)).toEqual([]);

    // Add more test cases as needed to thoroughly test your function
});







describe('echo function', () => {
    beforeEach(() => {
        jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should print the message the specified number of times', () => {
        const message = 'Hello, Jest!';
        const times = 3;

        exf(message, times);

        expect(console.log).toHaveBeenCalledTimes(times);
        expect(console.log).toHaveBeenCalledWith(message);
    });
});