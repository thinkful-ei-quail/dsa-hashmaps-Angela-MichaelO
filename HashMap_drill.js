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
main();