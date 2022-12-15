function fizzbuzz() {
    const aMap = {
        3: 'Fizz',
        5: 'Buzz'
    }
    let dividedBy = d => { return x => x % d === 0 }
    for (let i = 1; i <= 100; i++) {
        let sMsg = String();
        for (let k in aMap) sMsg += aMap[k].repeat(dividedBy(k)(i))
        console.log(sMsg.length > 0 ? sMsg : i.toString())
    }
}


fizzbuzz()