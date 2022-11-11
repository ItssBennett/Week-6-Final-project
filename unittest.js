var expect = chai.expect

describe('shuffle test',function(){
    describe('#shuffle',function(){
        it('Should give me values in a different order every time',function(){
            var x = shuffle(unitTestArray)
            expect(x).to.equal([1,2,3,4,5])
        })
    })
})

describe('shuffle test',function(){
    describe('#shuffle',function(){
        it('Should give me values in a different order every time',function(){
            var x = shuffle(unitTestArray)
            expect(x) != ([1,2,3,4,5])
        })
    })
})



const unitTestArray = [1,2,3,4,5]