
// This 4 methods are trying to illustrate a couple ideas
// Mutation: does your function change the things passed to it
// Adding an item vs replacing in item in array.


/**
 * adds item to the array passed at given index
 * @param {array} arr: the array to add item to
 * @param {any} item: the item to add to array
 * @param {number} index: the index to add to array
 * @returns {undefined}
 */
 const addItemToArray = (arr, item, index)=>{
   arr.splice(index, 0, item)
}

/**
 * adds item to a new array at given index
 * @param {array} arr: the array to add item to
 * @param {any} item: the item to add to array
 * @param {number} index: the index to add to array
 * @returns {array} a new array with item added
 */
const addItemToANewArray=(arr, item, index)=>{
  let newArray = [...arr]
  newArray.splice(index, 0, item)
  return newArray
}

/**
 * replace item to the array passed at given index
 * @param {array} arr: the array to add item to
 * @param {any} item: the item to add to array
 * @param {number} index: the index to add to array
 * @returns {undefined}
 */
 const replaceItemToArray = (arr, item, index)=>{
  arr.splice(index, 1, item)
}

/**
 * replace item to a new array at given index
 * @param {array} arr: the array to add item to
 * @param {any} item: the item to add to array
 * @param {number} index: the index to add to array
 * @returns {array} a new array with item added
 */
const replaceItemToANewArray=(arr, item, index)=>{
  let newArray = [...arr]
  newArray.splice(index, 1, item)
  return newArray
}

module.exports = {
    addItemToArray,
    addItemToANewArray,
    replaceItemToArray,
    replaceItemToANewArray
  };
