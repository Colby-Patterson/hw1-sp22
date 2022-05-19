const { characters, getNames, getHeights, getNamesandHeights, getFirstNames } = require("../src/hw4.js");

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