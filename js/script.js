var menuOmnie = $("#menuOmnie");
var menuZakres = $("#menuZakres");
var menuKontakt = $("#menuKontakt");

var omnie = $("#omnie");
var zakres = $("#zakres");
var kontakt = $("#kontakt");

menuOmnie.click(showOmnie);  //menu on click in big version
  function showOmnie() {
    omnie.removeClass("hidden")
    omnie.addClass("text")
    $(".warsaw").addClass("hidden")
    zakres.addClass("hidden")
    zakres.removeClass("text")
    kontakt.addClass("hidden")
    kontakt.removeClass("text")
}

menuZakres.click(showZakres); //menu on click in big version
function showZakres(){
  zakres.removeClass("hidden")
  zakres.addClass("text")
  $(".warsaw").addClass("hidden")
  omnie.addClass("hidden")
  omnie.removeClass("text")
  kontakt.addClass("hidden")
  kontakt.removeClass("text")
}

menuKontakt.click(showKontakt); //menu on click in big version
function showKontakt(){
  kontakt.removeClass("hidden")
  kontakt.addClass("text")
  $(".warsaw").addClass("hidden")
  omnie.addClass("hidden")
  omnie.removeClass("text")
  zakres.addClass("hidden")
  zakres.removeClass("text")
}

//to click hamburger menu in small version
let setMenu = $(".bar")
$(".small").click(openBar)
function openBar(){
  setMenu.toggleClass("big")
  setMenu.toggleClass("display")
}

//to reload page:

$("h1").click(backToMain)
function backToMain(){
  window.location.reload()
}
