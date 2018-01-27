var url = ("https://pokeapi.co/api/v2/pokemon/")

	class Pokedex {
		constructor(){
			this.kanto = pokemonArray
			this.selectedPokemon = null
		}
		getList(){
			for (var i = 0; i < this.kanto.length; i++) {
				$('#name-list').append('<div class="pokemon-name"><a href="' + this.kanto[i] + '">' + this.kanto[i] + '</a></div>');
			}
		}
		showDetails(pokemon_name){
			cachedFetch(url + pokemon_name) .then(r => r.json()) .then(res => { 
				//your code here where res is the json response with your pokemon data
				console.log(res)
		});
	}
}

// 	getList(){
// 		cachedFetch(url) .then(r => r.json()) .then(res => { 
// //your code here where res is the json response with your pokemon data 
// 	$.get(url, function(res){
// 		for (var i = 0; i < this.kanto.length; i++) {
// 			console.log(this.kanto[i])
// 		}
// 	});
// });

$(function(){
	var pokedex = new Pokedex();
	//var name_list = $('#name_list')
	pokedex.getList();
	pokedex.showDetails('bulbasaur');
});
//cachedFetch(url) .then(r => r.json()) .then(res => { 
//your code here where res is the json response with your pokemon data 
	//$().append();
// });

// $.get(url, function(res){
// 	for (var i = 0; i < res.length; i++) {
// 		console.log(res[i])
// 	}
// });




// class Pokedex {
// 	constructor(pokemon){
// 		this.pokemon = pokemon
// 		this.kanto = 
// 	}
// }