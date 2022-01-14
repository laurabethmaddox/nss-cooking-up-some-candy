const buyChocolate = () => {
    const buyCandyObject = {
        type: "Milk Chocolate"
    }
    return buyCandyObject
}

let candyObject = buyChocolate()
console.log(candyObject)

const addFlavoring = (candyObject) =>  {
    candyObject.flavor = "Mint"

    return candyObject
}

let mintCandy = addFlavoring(candyObject)
console.log(mintCandy)

const makeBarkMixture  = (mintCandy) => {
    if (candyObject.flavor === "Mint") {
        candyObject.mixed = true
    } else {
        candyObject.mixed = false
    }
    return mintCandy
}

let mixedCandy = makeBarkMixture(mintCandy)
console.log(mixedCandy)

const bakeCandy = (mixedCandy) => {
    if (candyObject.mixed === true) {
        candyObject.baked = true
    } else {
        candyObject.baked = false 
    }
    return mixedCandy
}

let bakedCandy = bakeCandy(mixedCandy)
console.log(bakedCandy)

const breakBark = (bakedCandy) => {
    if (candyObject.baked === true) {
        return ["Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece"]
    } 
}

let brokenBark = breakBark(bakedCandy)
console.log(brokenBark)