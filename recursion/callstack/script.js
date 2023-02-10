function funcThree(){
    console.log("three")
}

function funcTwo(){
    funcThree()
    console.log("two")
}

function funcOne(){
    funcTwo()
    console.log("one")
}

funcOne()