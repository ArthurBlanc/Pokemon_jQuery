// Afffichage du premier paragraphe
$("p:eq(0)").show();

// Après un click sur le paragraphe "Pikachu"
$(".Pikachu").on("click",function() {
	$("p:eq(2)").fadeIn(1500); // Le prochain paragraphe apparait en fondu après 1500ms
	$("#Éclair")[0].play(); // Le son de l'attaque "Éclair" retenti
	$(".Pikachu").css("background","#F0E943 right center/150px no-repeat url(./img/pikachu.jpg)"); // L'image de Pikachu s'affiche
}); 

// Après un click sur le paragraphe "Salache"
$(".Salameche").on("click",function() {
	$("p:eq(4)").fadeIn(1500); // Le prochain paragraphe apparait en fondu après 1500ms
	$("#Déflagration")[0].play(); // Le son de l'attaque "Déflagration" retenti
	$(".Salameche").css("background","#F80 right center/150px no-repeat url(./img/salameche.jpg)"); // L'image de Salameche s'affiche
}); 

// Après un click sur le paragraphe "Bulbizarre"
$(".Bulbizarre").on("click",function() {
	$("p:eq(6)").fadeIn(1500); // Le prochain paragraphe apparait en fondu après 1500ms
	$("#Canon-Graine")[0].play(); // Le son de l'attaque "Canon Graine" retenti
	$(".Bulbizarre").css("background","#91C9BE right center/150px no-repeat url(./img/bulbizarre.jpg)"); // L'image de Bulbizarre s'affiche
}); 

// Après un click sur le paragraphe "Carapuce"
$(".Carapuce").on("click",function() {
	$("p:eq(8)").fadeIn(1500); // Le prochain paragraphe apparait en fondu après 1500ms
	$("#Écume")[0].play(); // Le son de l'attaque "Écume" retenti
	$(".Carapuce").css("background","#85C3D8 right center/150px no-repeat url(./img/carapuce.jpg)"); // L'image de Carapuce s'affiche
	$("#Générique-pokémon")[0].play(); // Le générique de Pokémon se lance
	$("body").css("background","url(./img/background.jpg)");  // Ajout d'une nouvelle image de background
}); 
