var url = "https://pokeapi.co/api/v2/pokemon/";

class Pokedex {
	constructor(theme){
		this.theme = theme
		this.pokemonList = pokemonArray;
		this.favorites = [];
		this.sprites = [];
	}
	playTheme(){
		this.theme.play();
	}
	getList(){
		for (var i = 0; i < this.pokemonList.length; i++) {
			$('#name-list').append('<div class="pokemon-name" data-name="'+ this.pokemonList[i]+'" id="'+ this.pokemonList[i] +'"><p>' + this.pokemonList[i] + '</p></div>');
		}
	}
	showDetails(pokemon_name){
		cachedFetch(url + pokemon_name) .then(r => r.json()) .then(res => { 
			//your code here where res is the json response with your pokemon data
			$('#info-list').html('<ul><li>' + res.name + ' NO. ' + res.id + '</li><li>Height: ' + res.height + '</li><li>Weight: ' + res.weight + '</li><li>Type: ' + res.types[0].type.name + '</li></ul>');
			$('#sprite-display').html('<img id="front-default" src="' + res.sprites.front_default + '"><img id="back-default" src="' + res.sprites.back_default + '"><img id="front-shiny" src="' + res.sprites.front_shiny + '"><img id="back-shiny" src="' + res.sprites.back_shiny + '">');
		});
	}
	clearDetails(){
		$('#info-list').empty();
		$('#sprite-display').empty();
	}
	clearFavList(){
		$('#favorite-list').empty();
	}
	addFavoriteList(){
		for (var i = 0; i < this.favorites.length; i++) {
			this.favorites[i];
		$('#favorite-list').append('<div class="favorite-pokemon" data-name=' + this.favorites[i] + '>' + this.favorites[i] + '</div>');
		//<button class="remove-favorite"></button>
		}
	}
	showFavTitle(){
		$('#info-list').html('<h4>Favorites List</h4>');
	}
	showDefaultScreen(){
		$('#info-list').html('<ul><li>Select a Pokemon</li><li>Height: </li><li>Weight: </li><li>Type: </li></ul>');
	}
	addFav(new_favorite){
		// for (var i = 0; i < this.favorites.length; i++) {
			// if (this.favorites[i].data('name') !== new_favorite){
				this.favorites.push(new_favorite);
			// }
		//}
		}
	removeFav(remove_favorite){
		//this.favorites.splice(remove_favorite, 1)
		this.favorites = this.favorites.filter(pokemon => pokemon !== remove_favorite);
	}
	// setActive(selected){
	// 	$(document).removeClass('active')
	// 	selected.addClass('active')
	// }
}

//$('#id').html(array.map(name => '<li>${name}</li>'))

$(function(){
	var theme = $('#theme');
	var pokedex = new Pokedex(theme[0]);
	pokedex.getList();

	var blue_button = $('.blue-button');
	blue_button.click(function(){
		pokedex.playTheme();
	});

	var pokename = $(".pokemon-name");
	pokename.click(function(){
		pokedex.showDetails($(this).data('name'));
		$('.active').removeClass('active');
		$(this).addClass('active');
	});
	pokedex.addFavoriteList();

	var add_fav_button = $('#left-circle-button');
		add_fav_button.click(function(){
		var active_pokemon = $('.active');
		pokedex.clearFavList();
		pokedex.addFav(active_pokemon.data('name'));
		pokedex.addFavoriteList();
	});

	var fav_button = $("#left-wide-button");
	var white_screen = $("#white-screen");
	var fav_screen = $("#favorite-screen");
	fav_button.click(function(){
		pokedex.clearDetails();
		white_screen.css("display", "none");
		fav_screen.css("display", "block");
		pokedex.showFavTitle();
	});

	var default_screen_button = $("#right-wide-button")
	default_screen_button.click(function(){
		fav_screen.css("display", "none");
		white_screen.css("display", "block");
		//.show and .hide as replacement?^^
		pokedex.showDefaultScreen();
	});
	
	var fav_list = $("#favorite-list");
	var remove_fav_button = $("#remove-favorite");
	//poke_fav = $(".favorite-pokemon");
	$(document).on('dblclick', '.favorite-pokemon', function(){
		pokedex.removeFav($(this).data('name'));
		pokedex.clearFavList();
		pokedex.addFavoriteList();
	});
});


// for dynamic elements
// $(document).on('click', '.pokemon-name', function(){

// })