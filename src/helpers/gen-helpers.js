import faker from 'faker'

const genHelpers = {}

genHelpers.firstNameGen = () => {
  let firstNameArray = []
  function generator () {
    let tryName = faker.name.firstName()
    if (firstNameArray.length < 15) {
      if (firstNameArray.includes(tryName)) {
        console.log('already present')
        generator()
      } else {
        firstNameArray.push(tryName)
        generator()
      }
    }
  }
  generator()
  return firstNameArray
}

genHelpers.lastNameGen = () => {
  let lastNameArray = []
  function generator () {
    let tryName = faker.name.lastName()
    if (lastNameArray.length < 15) {
      if (lastNameArray.includes(tryName)) {
        console.log('already present')
        generator()
      } else {
        lastNameArray.push(tryName)
        generator()
      }
    }
  }
  generator()
  return lastNameArray
}

genHelpers.scoreGen = () => {
  let sumArray = []
  let scoreArray = []
  function generator () {
    let tryScore = {
      strength: Math.ceil((Math.random() * 31) + 2),
      speed: Math.ceil((Math.random() * 31) + 2),
      agility: Math.ceil((Math.random() * 31) + 2)
    }
    let sum = Object.values(tryScore).reduce((a, b) => a + b)
    if (sumArray.length < 15) {
      if (sumArray.includes(sum)) {
        console.log('already present')
        generator()
      } else {
        scoreArray.push(tryScore)
        sumArray.push(sum)
        generator()
      }
    }
  }
  generator()
  return {
    scoreArray,
    sumArray
  }
}

export default genHelpers
