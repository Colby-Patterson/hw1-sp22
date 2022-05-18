const { addItemToArray, addItemToANewArray, replaceItemToArray, replaceItemToANewArray } = require("../src/hw2");

it("test addItemToArray", () => {
    let arr = ['b','d']
    // this function should not return anything
    let x = addItemToArray(arr,'c',1)
    expect(arr).toEqual(['b','c','d']);
    addItemToArray(arr,'a',0)
    addItemToArray(arr,'f',4)
    
  
    expect(arr).toEqual(['a','b','c','d','f']);
    expect(x).toBe(undefined);
  });

  it("test addItemToANewArray", () => {
    let arr = ['b','d']
    // this function should return a new array
    let x = addItemToANewArray(arr,'c',1)
    let y = addItemToANewArray(x,'a',0)
    let z = addItemToANewArray(y,'f',4)
    
  
    expect(z).toEqual(['a','b','c','d','f']);
    // this function should not mutate array it was called on
    expect(arr).toEqual(['b','d']);
    expect(x).toEqual(['b','c','d']);
  });


it("test replaceItemToArray", () => {
    let arr = ['A','-','d']
    // this function should not return anything
    let x= replaceItemToArray(arr,'c',2)
    replaceItemToArray(arr,'a',0)
    replaceItemToArray(arr,'b',1)

    
  
    expect(arr).toEqual(['a','b','c']);
    expect(x).toBe(undefined);
  });

  it("test replaceItemToANewArray", () => {
    let arr = ['A','-','d']
    // this function should return a new array
    let x = replaceItemToANewArray(arr,'c',2)
    let y = replaceItemToANewArray(x,'a',0)
    let z = replaceItemToANewArray(y,'b',1)
    
  
    expect(z).toEqual(['a','b','c']);
    // this function should not mutate array it was called on
    expect(arr).toEqual(['A','-','d']);
  });