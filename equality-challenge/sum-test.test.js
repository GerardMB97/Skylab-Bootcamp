function sum(a, b) {
    return a+b;
}

describe('Given a sum function', function() {
    [
        {a: 1, b: 1, result: 2},
        {a: 999, b: 1, result: 1000},
        {a: 0, b: 0, result: 0},
        {a: 10, b: 10, result: 20},
        {a: 1000000, b: 1, result: 1000001},
    ].forEach(operation => {
        describe(`When is invoked with values ${operation.a} and ${operation.b}`, function() {
            test(`Then return ${operation.result}`, function() {
                // act
                let answer = sum(operation.a, operation.b);
    
                // assert
                expect(answer).toBe(operation.result)
            })
        })    
    })
})