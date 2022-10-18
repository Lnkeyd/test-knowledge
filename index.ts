const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = 'Hello TypeScript'

const numberArray: number[] = [1,2,3,5,8,13]

const numberArray2: Array<number> = [2234,42342,423]

const words: string[] = ['Hello', 'TypeScript']

// Tuple
const contact: [string, number] = ['Evgeniy', 1234567]

// Any

let variable: any = 'New'

// Functions
function sayMyName(name: string): void {
    console.log(name)
}

sayMyName('Hiesanbearg')

// Never

function throwError(message: string): never {
    throw new Error(message)
}

function infinite(): never {
    while (true) {

    }
}

//Type

type Login = string

const login: Login = 'admin'

// Unit
type ID = string | number
const id1: ID = 1234
const id2: ID = '1235'

type SomeType = string | null | undefined