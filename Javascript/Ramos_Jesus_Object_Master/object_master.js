const pokémon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);
//an array with just the names of the pokemon whose only type is poison Questions: == poison vs === poison
const onlyPoison = pokémon.filter(pokemonType => pokemonType.types == 'poison').map(pokemon => pokemon.name)
console.log(onlyPoison)

// an array of pokemon objects where the id is evenly divisible by 3
const divByThree = pokémon.filter(poke => poke.id % 3 === 0);
console.log(divByThree);

// an array of pokemon objects that are "fire" type
const fireTypes = pokémon.filter(pokeType => pokeType.types.includes('fire'));
console.log(fireTypes);

// an array of pokemon objects that have more than one type
const twoTypes = pokémon.filter(pokeTypes => pokeTypes.types.length === 2);
console.log(twoTypes);

// an array with just the names of the pokemon 
const pokeNames = pokémon.map(names => names.name);
console.log(pokeNames)

//an array with just the names of pokemon with an id greater than 99
const greaterThan99 = pokémon.filter(pokemon => pokemon.id > 99).map(pokemon => pokemon.name)
console.log(greaterThan99)


// an array containing just the first type of all the pokemon whose second type is flying Questions: wanted to grab name as well
const secondFlying = pokémon.filter(pokemonType => pokemonType.types[1] === 'flying').map(pokemonNameType => pokemonNameType.types[0])
console.log(secondFlying)

// a count of the number of pokemon that are normal type
const normalPokes = pokémon.filter(normalTypes => normalTypes.types.includes('normal')).length;
console.log(normalPokes)