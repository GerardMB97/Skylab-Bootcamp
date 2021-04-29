function strictEquality(a,b){
    if (isNaN(a)){
        return false;
    }

    if (a==0 && typeof a == 'number'){
        if(Object.is(-a,b)){
            return true
        }
    }
    return Object.is(a,b)
}
describe('Given a strict equality function', () => {
    [
        {a: '0', b: -0, result: false},
        {a: -0, b: "0", result: false},
        {a: 0, b: -0, result: true},
        {a: -0, b: 0, result: true},
        {a: NaN, b: NaN, result: false},
        {a: 1, b: 1, result: true},
        {a: {}, b: {}, result: false},
        {a: '1', b: 1, result: false},
        {a: true, b: false, result: false},
        {a: false, b: false, result: true},
        {a: 'Water', b: 'Oil', result: false},
    ].forEach(comparison =>{
        describe(`When is invoked with values ${comparison.a} and ${comparison.b}`, () => {
            test(`It should return ${comparison.result}`, ()=>{

            //act
            let answer =  strictEquality(comparison.a, comparison.b);

            //assert
            expect(answer).toBe(comparison.result)
        })
    })
})
})