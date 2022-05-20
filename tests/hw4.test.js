const { characters, getNames, getHeights, getNamesandHeights, getFirstNames, massOver100, heightUnder200, getMaleChars, getFemaleChars, sortByMass, sortByHeight, sortByName, sortByGender, blueEyesCheck, massOver40Check, heightUnder200Check, allMaleCheck, atLeastOneMale, atLeastOneBlueEyes, oneTallerThan210, oneMassLessThan50, totalMass, totalHeight, byEyeColor, totalCharsInNames } = require("../src/hw4.js");

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

it('tests "every" functions', ()=>{
  // Testing blueEyesCheck function
  let allBlueEyes = blueEyesCheck(characters)
  expect(allBlueEyes).toBe(false)

  // Testing massOver40Check function
  let allMassOver40 = massOver40Check(characters)
  expect(allMassOver40).toBe(true)

  // Testing heightUnder200Check function
  let allHeightUnder200 = heightUnder200Check(characters)
  expect(allHeightUnder200).toBe(false)

  // Testing allMaleCheck function
  let allMale = allMaleCheck(characters)
  expect(allMale).toBe(false)
})

it('tests "some" functions', ()=>{
  // Testing atLeastOneMale function
  let oneMale = atLeastOneMale(characters)
  expect(oneMale).toBe(true)

  // Testing atLeastOneBlueEyes function
  let blueEyes = atLeastOneBlueEyes(characters)
  expect(blueEyes).toBe(true)

  // Testing oneTallerThan210 function
  let tallerThan210 = oneTallerThan210(characters)
  expect(tallerThan210).toBe(false)

  // Testing massLessThan50 function
  let massUnder50 = oneMassLessThan50(characters)
  expect(massUnder50).toBe(true)
})

it('tests reduce functions', ()=>{
  // Testing totalMass function
  let totalMassOfCharacters = totalMass(characters)
  expect(totalMassOfCharacters).toBe(346)

  //Testing totalHeight function
  let totalHeightOfCharacters = totalHeight(characters)
  expect(totalHeightOfCharacters).toBe(712)

  let characterEyeColorCount = byEyeColor(characters)
  expect(characterEyeColorCount).toEqual({ blue: 2, yellow: 1, brown: 1 })

  let totalChars = totalCharsInNames(characters)
  expect(totalChars).toBe(48)
})