
var url = "http://pokeapi.co/api/v2/pokemon/"

cachedFetch(url) .then(r => r.json()) .then(res => { 
//your code here where res is the json response with your pokemon data 
	$().append();
});

$.get(url, function(res){
	for (var i = 0; i < res.name.length; i++) {
		console.log(res.name[i])
	}
});




// var pokedex = new Pokedex();
// var $button = $('#get-pokemon-button');
// var $detail_section = $('#detail-section');
// $btn.click(function(){
// 	var pokemon_name = $(this).data('name');
// 	$detail_section.html(pokemon.pokeDataAsHTML(pokemon_name));
// });

// <div class="child-pokemon" data-name="charmander">charmander</div>