const characters = [
  {
      name: 'Luke Skywalker',
      height: 172,
      mass: 77,
      eye_color: 'blue',
      gender: 'male',
  },
  {
      name: 'Darth Vader',
      height: 202,
      mass: 136,
      eye_color: 'yellow',
      gender: 'male',
  },
  {
      name: 'Leia Organa',
      height: 150,
      mass: 49,
      eye_color: 'brown',
      gender: 'female',
  },
  {
      name: 'Anakin Skywalker',
      height: 188,
      mass: 84,
      eye_color: 'blue',
      gender: 'male',
  },
];

//***MAP***
//1. Get array of all names
function getNames(people) {
  return people.map(person=>{
    return person.name
  })
}
//2. Get array of all heights
function getHeights(people) {
  return people.map(person=>{
    return person.height
  })
}
//3. Get array of objects with just name and height properties
function getNamesandHeights(people){
  return people.map(person=>{
    return [person.name, person.height]
  })
}
//4. Get array of all first names
function getFirstNames(people){
  return people.map(person=>{
    let split_name = person.name.split(' ')
    return split_name[0]
  })
}

//***REDUCE***
//1. Get total mass of all characters
//2. Get total height of all characters
//3. Get total number of characters by eye color
//4. Get total number of characters in all the character names

//***FILTER***
//1. Get characters with mass greater than 100
function massOver100(people){
  return people.filter(person=>{
    return person.mass > 100
  })
}
//2. Get characters with height less than 200
function heightUnder200(people){
  return people.filter(person=>{
    return person.height < 200
  })
}
//3. Get all male characters
function getMaleChars(people){
  return people.filter(person=>{
    return person.gender === 'male'
  })
}
//4. Get all female characters
function getFemaleChars(people){
  return people.filter(person=>{
    return person.gender === 'female'
  })
}

//***SORT***
//1. Sort by mass
function sortByMass(people){
  return characters.sort((a, b)=> {
    return a.mass - b.mass
  })
}
//2. Sort by height
function sortByHeight(people){
  return characters.sort((a, b)=> {
    return a.height - b.height
  })
}
//3. Sort by name
function sortByName(people){
  return characters.sort((a, b)=> {
    if (a.name > b.name){
      return 1
    }
    if (a.name < b.name){
      return -1
    }
    return 0
  })
}
//4. Sort by gender
function sortByGender(people){
  return characters.sort((a, b)=> {
    if (a.gender > b.gender){
      return 1
    }
    if (a.gender < b.gender){
      return -1
    }
    return 0
  })
}

//***EVERY***
//1. Does every character have blue eyes?
function blueEyesCheck(people){
  return people.every(person=>{
    return person.eye_color === 'blue'
  })
}
//2. Does every character have mass more than 40?
function massOver40Check(people){
  return people.every(person=>{
    return person.mass > 40
  })
}
//3. Is every character shorter than 200?
function heightUnder200Check(people){
  return people.every(person=>{
    return person.height < 200
  })
}
//4. Is every character male?
function allMaleCheck(people){
  return people.every(person=>{
    return person.gender === 'male'
  })
}

//***SOME***
//1. Is there at least one male character?
function atLeastOneMale(people){
  return people.some(person=>{
    return person.gender === 'male'
  })
}
//2. Is there at least one character with blue eyes?
function atLeastOneBlueEyes(people){
  return people.some(person=>{
    return person.eye_color === 'blue'
  })
}
//3. Is there at least one character taller than 210?
function oneTallerThan210(people){
  return people.some(person=>{
    return person.height > 210
  })
}
//4. Is there at least one character that has mass less than 50?
function oneMassLessThan50(people){
  return people.some(person=>{
    return person.mass < 50
  })
}

//***Bonus***/
// come up with your own

module.exports = {
  characters,
  getNames,
  getHeights,
  getNamesandHeights,
  getFirstNames,
  massOver100,
  heightUnder200,
  getMaleChars,
  getFemaleChars,
  sortByMass,
  sortByHeight,
  sortByName,
  sortByGender,
  blueEyesCheck,
  massOver40Check,
  heightUnder200Check,
  allMaleCheck,
  atLeastOneMale,
  atLeastOneBlueEyes,
  oneTallerThan210,
  oneMassLessThan50
};