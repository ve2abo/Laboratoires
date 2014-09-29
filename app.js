$(document).ready(function() {
    
    var Calc = new Calculator();
    
    var ecran = $('#affichage');

    $("#B1").click(function(event){
        Calc.value(1);
        transitionFonduTexte(Calc.getEquation());
    });
    
    //tests
    $("#B2").click(function(event){
        Calc.value(2);
        transitionFonduTexte(Calc.getEquation());
    });
    
    $("#B3").click(function(event){
        Calc.value(3);
        transitionFonduTexte(Calc.getEquation());
    });
    
    $("#B4").click(function(event){
        Calc.value(4);
        transitionFonduTexte(Calc.getEquation());
    });
    
    $("#B5").click(function(event){
        Calc.value(5);
        transitionFonduTexte(Calc.getEquation());        
    });
    
    $("#B6").click(function(event){
        Calc.value(6);
        transitionFonduTexte(Calc.getEquation());
    });
    
    $("#B7").click(function(event){
        Calc.value(7);
        transitionFonduTexte(Calc.getEquation());
    });
    
    $("#B8").click(function(event){
        Calc.value(8);
        transitionFonduTexte(Calc.getEquation());
    });
    
    $("#B9").click(function(event){
        Calc.value(9);
        transitionFonduTexte(Calc.getEquation());
    });
    
    $("#B0").click(function(event){
        Calc.value(0);
        transitionFonduTexte(Calc.getEquation());
    });
    
    $("#Add").click(function(event){
        Calc.add();
        transitionFonduTexte(Calc.getEquation());
    });
    
    $("#Sous").click(function(event){
        Calc.subtract();
        transitionFonduTexte(Calc.getEquation());
    });
    
    $("#Mult").click(function(event) {
        Calc.multiply();
        transitionFonduTexte(Calc.getEquation());
    });
    
    $("#Divide").click(function(event){
        Calc.divide();
        transitionFonduTexte(Calc.getEquation());
    });
    
    $("#Fact").click(function(event){
        Calc.factorial();
        transitionFonduTexte(Calc.getEquation());
    });
    
    $("#Equal").click(function(event) {
        transitionFonduTexte(Calc.equals());
    });
    
    $("#Sin").click(function(event){
        Calc.sin();
        transitionFonduTexte(Calc.getEquation());
    });
    
    $("#Cos").click(function(event){
        Calc.cos();
        transitionFonduTexte(Calc.getEquation());
    });
    
    $("#Tan").click(function(event) {
        Calc.tan();
        transitionFonduTexte(Calc.getEquation());
    });
    
    $("#SetMem").click(function(event){
        Calc.setMemory(Calc.equals());
    });
    
    $("#RecMem").click(function(event){
        Calc.value(Calc.getMemory());
        transitionFonduTexte(Calc.getEquation());
    });
    
    $("#Cancel").click(function(event) {
        Calc.clear();
        transitionFonduTexte(Calc.getEquation());
    });

    function transitionFonduTexte(sTexte) {
        ecran.fadeOut(100,function() {
            ecran.text(sTexte);
            ecran.fadeIn(100)
        });
    }

    function afficherLatitudeLongitude(position) {
        var sPosition = 'Latitude : ' + position.coords.latitude + ' Longitude : ' + position.coords.longitude;
        transitionFonduTexte(sPosition);   
        console.log(sPosition);
    }

    $('#geo').click(function(event){
        //if navigator.geo
        navigator.geolocation.getCurrentPosition(afficherLatitudeLongitude);
        
    });


});