var menuOmnie = $("#menuOmnie");
var menuZakres = $("#menuZakres");
var menuKontakt = $("#menuKontakt");

var omnie = $("#omnie");
var zakres = $("#zakres");
var kontakt = $("#kontakt");

menuOmnie.click(showOmnie);
  function showOmnie() {
    omnie.removeClass("hidden")
}

menuZakres.click(showZakres);
function showZakres(){
  zakres.removeClass("hidden")
}

menuKontakt.click(showKontakt);
function showKontakt(){
  kontakt.removeClass("hidden")
}
