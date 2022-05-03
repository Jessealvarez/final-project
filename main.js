//create code to generate the pokedex entries in a list//
let pokeList = document.querySelector('#list');
let entries = document.createElement('ol');
entries.className = 'list-group list-group-numbered';
entries.id = 'id';
pokeList.appendChild(entries);

//array to store entries in for later
let pokemonArray = [];


//data display for each pokemon
let pokepic = document.querySelector('#id-picture')
let pokeName = document.querySelector('.card-title')
let pokeHeight = document.querySelector('#height')
let pokeWeight = document.querySelector('#weight')
let pokeNumber = document.querySelector('#id-number')
let firstType = document.querySelector('#type-one')
let secondType = document.querySelector('#type-two')

//make each entry clickable
let nameClick = document.querySelectorAll('#id li');

fetch('https://pokeapi.co/api/v2/pokemon?limit=898')
    
.then(function (httpResponse){
    return httpResponse.json();
    
})
.then(function (data){
   
    return data;
})

.then(function(entryId){
    for (let i = 1; i < 898; i++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${[i]}`)
            .then(function (httpResponse) {
                return httpResponse.json();
            })
            .then(function (data) {
                
                
                pokemonArray.push(data);

                let entry = document.createElement("li");
                entry.className = "list-group-item entry"
                

                entry.addEventListener('click',(e)=>{
                    
                    pokepic.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${[i]}.png`

                    pokeName.innerHTML = data.name;
                    pokeNumber.innerHTML = "no." + [i];
                    pokeHeight.innerHTML = "height:" + data.height + "ft";
                    pokeWeight.innerHTML = "weight:" + data.weight + "lbs";
                    
                     // create if statement so that if there is no second type, clear the html content of second type
                    firstType.innerHTML = data.types[0].type.name;
                    if(data.types[1]){
                    secondType.innerHTML =data.types[1].type.name;
                    }else{
                    secondType.innerHTML = "";
                    }
                })


                //append each entry to the 'entries' OL to make the clickable list
                entries.appendChild(entry);

                //fill in the data for each entry on each newly created blank space on the list
                entry.innerHTML = data.name;
                nameClick = document.querySelectorAll('#id li');
                
                
                let submitButton = document.querySelector('#submit-button');
                let searchedPokemon = document.querySelector('#user-input');
               


                //this is for the search bar function
                submitButton.addEventListener('click', (e)=>{
                    e.preventDefault();

                    for(let i=1; i <898; i++){

                    if(pokemonArray[i].name === searchedPokemon.value)
                    {
                    
                    
                    pokepic.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonArray[i].id}.png`;

                    pokeName.innerHTML = pokemonArray[i].name;
                    pokeNumber.innerHTML = "no." + pokemonArray[i].id;
                    pokeHeight.innerHTML = "height:" + pokemonArray[i].height + "ft";
                    pokeWeight.innerHTML = "weight:" + pokemonArray[i].weight + "lbs";
                   
                    firstType.innerHTML = pokemonArray[i].types[0].type.name;
                    if(pokemonArray[i].types[1]){
                    secondType.innerHTML =pokemonArray[i].types[1].type.name;
                    }else{
                        secondType.innerHTML = "";
                    }
                    break;
                    }
                    
                }
                })
                
                
            })
    }
   
    
})

 
