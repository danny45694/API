async function fetchData(){

    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_shiny;
        const imgElement = document.getElementById("pokemonSprite");
        
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

        let pokeName = data.name;
        const pokeSpecies = document.getElementById("pokeSpecies");

        pokeNameCap = pokeName.charAt(0).toUpperCase() + pokeName.slice(1);
        pokeSpecies.textContent = pokeNameCap;
        pokeSpecies.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}