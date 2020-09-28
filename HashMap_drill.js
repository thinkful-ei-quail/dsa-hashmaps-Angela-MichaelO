const HashMap = require('./hashmap');

function main(){
  
  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;
  const lotr = new HashMap();
  
  lotr.set('Hobbit','Bilbo' );
  lotr.set('Hobbit','Frodo' );
  lotr.set('Wizard','Gandalf' );
  lotr.set('Human','Aragorn' );
  lotr.set('Elf','Legolas' );
  lotr.set('Maiar','The Nercomancer' );
  lotr.set('Maiar','Sauron' );
  lotr.set('RingBearer','Gollum' );
  lotr.set('LadyOfLight','Galadriel' );
  lotr.set('HalfElven','Arwen' );
  lotr.set('Ent','Treebeard' );
  
  console.log(lotr);
  console.log(lotr.get('Maiar'));
  console.log(lotr.get('Hobbit'));
  
}
//main();
//#1
//Print your hash map and notice the length and items that are hashed in your
//hash map. Have you hashed all the items you were asked to?
//No, missing Bilbo and The Necromancer

//What are the values of Maiar and Hobbit that you have? Is there a discrepancy?
//The values are Sauron and Frodo. The discrepancy is that Bilbo and The
//Necromancer were never added and are missing 

//What is the capacity of your hash table after you have hashed all the above
//items? Explain your answer.
//The capacity is 24. The capacity grew in size by the MAX_LOAD_RATIO as items
//were being set in the hash table


//#2
//The output is 20 for map1 and 10 for map2 because the second key overrides the
//first since they are the same thing
const WhatDoesThisDo = function () {
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap();
  map1.set(str1, 10);
  map1.set(str2, 20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3, 20);
  map2.set(str4, 10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
};
//WhatDoesThisDo();

function deleteRepeat(str) {
  HashMap.MAX_LOAD_RATIO = 0.8;
  HashMap.SIZE_RATIO = 3;

  str = str.toLowerCase()
  const map1 = new HashMap()
  let final = ''

  for (let i = 0; i < str.length; i++) {
    try {
      let char = map1.get(str.charAt(i))
    }
    catch {
      map1.set(str.charAt(i), str.charAt(i))
      final = final + str.charAt(i)
    }
  }

  return final

}

console.log(deleteRepeat('google all that you think can think of'))
console.log(deleteRepeat('zzzzzzzzyyyyyyyywwwwwwwwwwwwwwxxxxxxxxxxxxx'))

function isPalindrome(str) {
  HashMap.SIZE_RATIO = 3;
  HashMap.MAX_LOAD_RATIO = 0.8;

  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    try {
      let count = query.get(str.charAt(i))
      count++
      query.set(str.charAt(i), count)
    }

    catch {
      query.set(str.charAt(i), 1)
    }
  }

  if (str.length % 2 === 0) {
    let palindrome = true
    for (let i = 0; i < str.length; i++) {
      if (query.get(str.charAt(i)) !== 2) {
        palindrome = false
      }
    }
    return palindrome;
  }

  if (str.length % 2 === 1) {
    let oneLetters = 0
    for (let i = 0; i < str.length; i++) {
      if (query.get(str.charAt(i)) === 1) {
        oneLetters = oneLetters + 1
      }
    }
    if (oneLetters > 1) {
      return false
    }
    return true
  }

}

// console.log(isPalindrome('aaccrrdd'))
// console.log(isPalindrome('aaccrddqq'))
// console.log(isPalindrome('north'))

