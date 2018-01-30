/*global db*/
//Create a function that accepts the 4 attributes plus a 5th variable called db. This variable would reference the mongodb like in the shell. 
function createPokemon (name, health, lastFought, attacks, stats, db){
    var newPokemon = {}
    newPokemon.name = name;
    newPokemon.health = health;
    newPokemon.lastFought = lastFought;
    newPokemon.attacks = attacks;
    newPokemon.stats = stats;
    newPokemon.db = db;
    return newPokemon;
};

//Write the javascript code that would insert the four attributes into the “monster” collection as a new document.
db.pokemons.insert(createPokemon('Charizard', 100, new Date(), ['Flamethrower', 'Hyper Beam'], {"attack": 150, "defense": 89}, 'pokemons'))

//Write the code that would then console.log all the documents inside the collection.
db.pokemons.find()

//Write the command that will find your monster based on a name
db.pokemons.find({"name": "Charizard"})

//Write the command that will find a monster based on one of the attacks it has (if possible use a command that will return more than one monster with the same attack type)
db.pokemons.find({"attacks": "Flamethrower"})

//Write the command that will find a monster based on their defense stat.
db.pokemons.find({"stats.defense": 89})
