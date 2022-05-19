const { characters, getNames, getHeights, getNamesandHeights, getFirstNames, massOver100, heightUnder200, getMaleChars, getFemaleChars, sortByMass, sortByHeight, sortByName, sortByGender } = require("../src/hw4.js");

it('tests map functions', ()=>{
  // Testing getNames function
  let charNames = getNames(characters)
  expect(charNames[0]).toBe(characters[0].name)
  expect(charNames[1]).toBe(characters[1].name)

  // Testing getHeights function
  let charHeights = getHeights(characters)
  expect(charHeights[0]).toBe(characters[0].height)
  expect(charHeights[1]).toBe(characters[1].height)

  // Testing getNamesandHeights function
  let charNamesandHeights = getNamesandHeights(characters)
  expect(charNamesandHeights[0]).toEqual([characters[0].name, characters[0].height])
  expect(charNamesandHeights[1]).toEqual([characters[1].name, characters[1].height])

  // Testing getFirstNames function
  let charFirstNames = getFirstNames(characters)
  expect(charFirstNames[0]).toBe('Luke')
  expect(charFirstNames[1]).toBe('Darth')
})

it('tests filter functions', ()=>{
  // Testing massOver100 function
  let charMassOver100 = massOver100(characters)
  expect(charMassOver100.length).toBe(1)

  // Testing heightUnder200 function
  let charHeightUnder200 = heightUnder200(characters)
  expect(charHeightUnder200.length).toBe(3)

  // Testing getMaleChars function
  let maleChars = getMaleChars(characters)
  expect(maleChars.length).toBe(3)

  // Testing getFemaleChars function
  let femaleChars = getFemaleChars(characters)
  expect(femaleChars.length).toBe(1)
})

it('tests sort functions', ()=>{
  // Testing sortByMass function
  let sortedByMass = sortByMass(characters)
  expect(sortedByMass[0].name).toBe('Leia Organa')
  expect(sortedByMass[3].name).toBe('Darth Vader')

  // Testing sortByHeight function
  let sortedByHeight = sortByHeight(characters)
  expect(sortedByHeight[0].name).toBe('Leia Organa')
  expect(sortedByHeight[3].name).toBe('Darth Vader')

  // Testing sortByName function
  let sortedByName = sortByName(characters)
  expect(sortedByName[0].name).toBe('Anakin Skywalker')
  expect(sortedByName[3].name).toBe('Luke Skywalker')

  // Testing sortByGender function
  let sortedByGender = sortByGender(characters)
  expect(sortedByGender[0].gender).toEqual('female')
  expect(sortedByGender[3].gender).toEqual('male')
})