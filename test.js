/*global db*/
console.log(new Date());
db.pokemons.insert([{
    "name": "Bulbasaur",
    "health": 45,
    "fought": "2018-01-29T17:33:15.430Z",
    "attacks": ["tackle", "growl", "leech seed"],
    "stats": {
        "attack": 49,
        "defense": 49
    }
},
{
    "name": "Charmander",
    "health": 39,
    "fought": "2018-01-29T17:33:15.430Z",
    "attacks": ["growl", "scratch", "ember"],
    "stats": {
        "attack": 52,
        "defense": 43
    }
},
{
    "name": "Squirtle",
    "health": 44,
    "fought": "2018-01-29T17:33:15.430Z",
    "attacks": ["tackle", "tail whip", "water gun"],
    "stats": {
        "attack": 48,
        "defense": 65
    }
}])

