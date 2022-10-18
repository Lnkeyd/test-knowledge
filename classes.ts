class TypeScript {
    version: string
    constructor(version: string) {
        this.version = version
    }

    info(name: string): string {
        return `${name}: Typescript is ${this.version}`
    }
}

class Car {
    readonly model: string
    readonly numberOfWheels: number = 4

    constructor(theModel: string) {
        this.model = theModel
    }
}

// ============
// Modifiers

class Animal {
    protected voice: string = ''
    public color: string = 'black'

    private go() {
        console.log('Go')
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

// protected = класс Animal и все наследники (но не инстансы!)
// private = доступны только в том классе, в котором были определены

