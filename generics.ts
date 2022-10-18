const arrayOfNumbers: Array<number> = [1, 2, 3, 4, 5]
const arrayOfStrings: Array<string> = ['asdf', 'hello']
function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

