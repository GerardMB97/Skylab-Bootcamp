let proto = {
    __length: 0,
    set length(newLength) {
        this.__length += newLength;
    },
    get length() {
        return this.__length;
    },
    push() {
        for (let value in arguments) {
            let index = this.length
            this[index] = arguments[value];
            this.length = 1
        }
    },
    map(callback) {
        let newArray = {
            __proto__: proto
        }
        for (let i = 0; i < this.length; i++) {
            let newValue = callback(this[i])
            newArray.push(newValue)
        }
        return newArray
    },
    filter(callback) {
        let newArray = {
            __proto__: proto
        }
        for (let i = 0; i < this.length; i++) {
            let meetsCondition = callback(this[i])
            if (meetsCondition) {
                newArray.push(this[i])
            }
        }
        return newArray
    },
    findIndex(callback) {
        let firstIndex = -1;
        for (let i = 0; i < this.length; i++) {
            let meetsCondition = callback(this[i])
            if (meetsCondition) {
                firstIndex = i;
                break;
            }
        }
        return firstIndex;
    },
    find(callback) {
        let firstMatch = undefined;
        for (let i = 0; i < this.length; i++) {
            let meetsCondition = callback(this[i])
            if (meetsCondition) {
                firstMatch = this[i]
                break;
            }
        }
        return firstMatch;
    },
    some(callback) {
        let someMatch = false;
        for (let i = 0; i < this.length; i++) {
            let meetsCondition = callback(this[i])
            if (meetsCondition) {
                someMatch = true;
                break;
            }
        }
        return someMatch;
    },
    every(callback) {
        let someMissMatch = true;
        for (let i = 0; i < this.length; i++) {
            let meetsCondition = callback(this[i])
            if (! meetsCondition) {
                someMissMatch = false;
                break;
            }
        }
        return someMissMatch
    },
    reduce(callback) {
        let accumulator = this[0]
        for (let i = 1; i < this.length; i++) {
            accumulator = callback(this[i], accumulator)
        }
        return accumulator
    }

}
let fakeArray = {
    __proto__: proto
}
let testArray = {}
describe('Given an object', () => {
    describe('When hasOwnProperty is called with argument \'length\'', () => {
        test('Then return false', () => {
            expect(fakeArray.hasOwnProperty('length')).toBe(false)
        })
    })

    describe('When function length is called', () => {
        test('Then return 0', () => {
            expect(fakeArray.length).toBe(0)
        })
    })
    describe('When function push is called with argument \'Skylab\'', () => {
        test('Then object[0] will be \'Skylab\'', () => {

            fakeArray.push('Skylab')
            expect(fakeArray[0]).toBe('Skylab')

        })
        test('Then length property will be 1', () => {
            expect(fakeArray.length).toBe(1)
        })
    })
    describe('When function push is called with argument \'Bootcamp\'', () => {
        test('Then object[1] will be \'Bootcamp\'', () => {
            fakeArray.push('Bootcamp')
            expect(fakeArray[1]).toBe('Bootcamp')
        })
        test('Then length property will be 2', () => {
            expect(fakeArray.length).toBe(2)
        })
    })
    describe('When function push is called with argument 202101', () => {
        test('Then object[2] will be 202101', () => {
            fakeArray.push(202101)
            expect(fakeArray[2]).toBe(202101)
        })
        test('Then length property will be 3', () => {
            expect(fakeArray.length).toBe(3)
        })
    })
    describe('When function push is called with argument true', () => {
        test('Then object[3] will be true', () => {
            fakeArray.push(true)
            expect(fakeArray[3]).toBe(true)
        })
        test('Then length property will be 4', () => {
            expect(fakeArray.length).toBe(4)
        })
    })

    describe('When function map is called with argument (element => element.length) ', () => {
        test('Then newArray[0] will be 6', () => {
            let newArray = fakeArray.map(x => x.length)
            expect(newArray[0]).toBe(6)

        })
        test('Then newArray.length will be 4', () => {
            let newArray = fakeArray.map(x => x.length)
            expect(newArray.length).toBe(4)
        })
    })
    describe('When function map is called with argument (element=>element = SkyLab Rocks)', () => {
        test('Then newArray[0] will be SkyLab Rocks', () => {
            let newArray = fakeArray.map(x => x = 'SkyLab Rocks')
            expect(newArray[0]).toBe('SkyLab Rocks')
        })
        test('Then newArray[1] should also be SkyLab Rocks', () => {
            let newArray = fakeArray.map(x => x = 'SkyLab Rocks')
            expect(newArray[1]).toBe('SkyLab Rocks')
        })
    })

    describe('When function filter is called with argument (x => x===true)', () => {
        test('Then newArray[0] should be true', () => {
            let newArray = fakeArray.filter(x => x === true)
            expect(newArray[0]).toBe(true)
        })
        test('Then newArray.length should be one', () => {
            let newArray = fakeArray.filter(x => x === true)
            expect(newArray.length).toBe(1)
        })
        test('Then newArray[1] should be undefined', () => {
            let newArray = fakeArray.filter(x => x === true)
            expect(newArray[1]).toBe(undefined)
        })
    })
    describe('When filter is called with argument x=>typeof(x)==="string"', () => {
        test('Then newArray.length should return 2', () => {
            let newArray = fakeArray.filter(x => typeof(x) === 'string')
            expect(newArray.length).toBe(2)
        })
    })
    describe('When findIndex is called with argument x=>typeof(x)==="number"', () => {
        test('Then it should return 2', () => {
            let typeNumberIndex = fakeArray.findIndex(x => typeof(x) === 'number')
            expect(typeNumberIndex).toBe(2)
        })
    })
    describe('When findIndex iscalled with argument x=> typeof(x)==="boolean"', () => {
        test('Then it should return 3', () => {
            let typeBooleanIndex = fakeArray.findIndex(x => typeof(x) === 'boolean')
            expect(typeBooleanIndex).toBe(3)
        })
    })

    describe('When findIndex is called with argument x=> typeof(x) === "object"', () => {
        test('Then it should return -1', () => {
            let typeObject = fakeArray.findIndex(x => typeof(x) === 'object')
            expect(typeObject).toBe(-1)
        })
    })
    describe('When find iscalled with argument x=> typeof(x)==="boolean"', () => {
        test('Then it should return true', () => {
            let typeBooleanIndex = fakeArray.find(x => typeof(x) === 'boolean')
            expect(typeBooleanIndex).toBe(true)
        })
    })
    describe('When find is called with argument x=> typeof(x)==="number"', () => {
        test('Then it should return 202101', () => {
            let typeBooleanIndex = fakeArray.find(x => typeof(x) === 'number')
            expect(typeBooleanIndex).toBe(202101)
        })
    })
    describe('When find is called on an object[1,2,3,4,5] with argument x=> x > 10 it should return undefined', () => {
        test('Then it should return undefined', () => {
            let newArray = {
                __proto__: proto
            }
            newArray.push(1, 2, 3, 4)
            let someBiggerThan10 = newArray.find(x => x > 10)
            expect(someBiggerThan10).toBe(undefined)
        })
    })
    describe('When some is called with argument x=> x>10', () => {
        test('Then it should return true', () => {
            let newArray = {
                __proto__: proto
            }
            newArray.push(1, 2, 3, 4)
            let someBiggerThan10 = newArray.some(x => x > 10)
            expect(someBiggerThan10).toBe(false)
        })
    })
    describe('When every is called with argument x=> typeof(x)==="boolean"', () => {
        test('Then it should return false', () => {
            let everyBoolean = fakeArray.every(x => typeof(x) === 'boolean')
            expect(everyBoolean).toBe(false)
        })
    })
    describe('When every is called on an object {0:1, 1:1, 2:1} with argument x=> typeof(x)==="number"', () => {
        test('Then it should return true', () => {
            let newArray = {
                __proto__: proto
            }
            newArray.push(1, 2, 3, 4)
            let everyNumber = newArray.every(x => typeof(x) === 'number')
            expect(everyNumber).toBe(true)
        })
    })
    describe('When reduce is called on an object [1,2,3,4] with argument (a,b)=> {return a+b}', () => {
        test('Then it should return 10', () => {
            let newArray = {
                __proto__: proto
            }
            newArray.push(1, 2, 3, 4)
            let reduceResult = newArray.reduce((a, b) => {
                return a + b
            })
            expect(reduceResult).toBe(10)
        })
    })
    describe('When reduce is called on an object [1,2,3,4] with arguments (a,b)=> {return a*b}', () => {
        test('Then it should return 24', () => {
            let newArray = {
                __proto__: proto
            }
            newArray.push(1, 2, 3, 4)
            let reduceResult = newArray.reduce((a, b) => {
                return a * b
            })
            expect(reduceResult).toBe(24)
        })
    })
})
