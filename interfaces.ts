interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number,
        height: number,
    }
}

const rect1: Rect = {
    id: '1234',
    size: {
        width: 12,
        height: 20,
    },
    color: '#ccc'
}

const rect2: Rect = {
    id: '1234',
    size: {
        width: 12,
        height: 20,
    },
    color: '#ccc'
}

const rect3 = {} as Rect
const rect4 = <Rect>{}

// =======================

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '123',
    size: {
        width: 20,
        height: 10,
    },
    getArea(): number {
        return this.size.width * this.size.height
    },
}

// ======================

interface ICLock {
    time: Date,
    setTime(date: Date): void,
}

class Clock implements ICLock {
    time: Date = new Date()
    setTime(date: Date): void {
        this.time = date
    }
}

// =====================

interface Styles {
    [key: string]: string
}

const css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}