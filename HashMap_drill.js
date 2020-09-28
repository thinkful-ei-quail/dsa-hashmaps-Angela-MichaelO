const HashMap = require('./hashmap');
const HashMap_SC = require('./hashmapSC');

function main(){
  
  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;
  const lotr = new HashMap();
  const lotr_SC = new HashMap_SC();
  
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
  
  lotr_SC.set('Hobbit','Bilbo' );
  lotr_SC.set('Hobbit','Frodo' );
  lotr_SC.set('Wizard','Gandalf' );
  lotr_SC.set('Human','Aragorn' );
  lotr_SC.set('Elf','Legolas' );
  lotr_SC.set('Maiar','The Nercomancer' );
  lotr_SC.set('Maiar','Sauron' );
  lotr_SC.set('RingBearer','Gollum' );
  lotr_SC.set('LadyOfLight','Galadriel' );
  lotr_SC.set('HalfElven','Arwen' );
  lotr_SC.set('Ent','Treebeard' );
  
  console.log('OPEN ADDRESSING: ', lotr);
  console.log('SEPARATE CHAINING: ',lotr_SC);
  console.log(lotr.get('Maiar'));
  console.log(lotr.get('Hobbit'));
  
}
main();
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

  str = str.toLowerCase();
  const map1 = new HashMap();
  let final = '';

  for (let i = 0; i < str.length; i++) {
    try {
      map1.get(str.charAt(i))
    }
    catch {
      map1.set(str.charAt(i), str.charAt(i))
      final = final + str.charAt(i)
    }
  }

  return final

}

// console.log(deleteRepeat('google all that you think can think of'))
// console.log(deleteRepeat('zzzzzzzzyyyyyyyywwwwwwwwwwwwwwxxxxxxxxxxxxx'))

function isPalindrome(str) {
  const query = new HashMap();
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
// console.log(isPalindrome('aaccrr'))
// console.log(isPalindrome('aaccrddqq'))
// console.log(isPalindrome('north'))

const groupAnagrams = (strArr) => {
  const anagramMap = new Map()
  strArr.forEach(word => {
    let sorted = alphabetize(word)
    if (anagramMap.has(sorted)) {
      anagramMap.get(sorted).push(word)
    }
    else {
      anagramMap.set(sorted, [word])
    }
  })
  return [...anagramMap.values()]
}

const alphabetize = word => {
  let alphabetized = word.split('').sort().join('')
  return alphabetized
}

//console.log(groupAnagrams(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']))


