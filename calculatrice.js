var maCalculatrice = function() {
    this.dernier_resultat = 0;
    var memoire = 0;

    
    this.addition = function (a) {
        this.dernier_resultat = this.dernier_resultat + a;
        return this;
    };

    this.soustraction = function(a) {
        this.dernier_resultat = this.dernier_resultat - a;
        return this;
    };

    this.multiplication = function(a) {
        this.dernier_resultat = this.dernier_resultat * a;
        return this;
    };

    this.division = function(a) {
        if (a === 0) {
            alert("Division par 0");
            return this;
        }
        else {
            this.dernier_resultat = this.dernier_resultat / a;
            return this;
        }
    };

    this.sin = function() {
        this.dernier_resultat = Math.sin(this.dernier_resultat);
        return this;
    };

    this.cos = function() {
        this.dernier_resultat = Math.cos(this.dernier_resultat);
        return this;
    };
    
    this.tan = function() {
        this.dernier_resultat = Math.tan(this.dernier_resultat);
        return this;
    };

    this.factorielle = function() {
        if (this.dernier_resultat < 0) {
            alert("Factorielle d'un négatif impossible");
            return this;
        }

        this.dernier_resultat = this.aux_factorielle(this.dernier_resultat);
        return this;
    };

    this.aux_factorielle = function(n) {
        if(n === 0) {
            return 1;
        } else {
            return n * this.aux_factorielle(n - 1);
        }
    };

    this.met_en_memoire = function() {
        memoire = this.dernier_resultat;
    };
    
    this.retourne_memoire = function() {
        this.dernier_resultat = memoire;
        return this.dernier_resultat;
    };
};



var uneCalculatrice = new maCalculatrice();

uneCalculatrice.addition(6);
console.log("+ 6 = " + uneCalculatrice.dernier_resultat);

uneCalculatrice.soustraction(3);
console.log("- 3 = " + uneCalculatrice.dernier_resultat);

uneCalculatrice.multiplication(4);
console.log("x 4 = " + uneCalculatrice.dernier_resultat);

uneCalculatrice.division(3);
console.log("/ 3 = " + uneCalculatrice.dernier_resultat);

uneCalculatrice.division(0);
console.log("/ 0 = " + uneCalculatrice.dernier_resultat );

uneCalculatrice.met_en_memoire();
console.log("" + uneCalculatrice.dernier_resultat + " envoyé en mémoire" );

uneCalculatrice.dernier_resultat = 6;
uneCalculatrice.factorielle();
console.log("6! = " + uneCalculatrice.dernier_resultat );

uneCalculatrice.dernier_resultat = 3.1416/2;
uneCalculatrice.sin();
console.log("sin(pi/2) = " + uneCalculatrice.dernier_resultat );

uneCalculatrice.dernier_resultat = 0;
uneCalculatrice.cos();
console.log("cos(0) = " + uneCalculatrice.dernier_resultat );

uneCalculatrice.dernier_resultat = 1.4142;
uneCalculatrice.tan();
console.log("tan(1.4142) = " + uneCalculatrice.dernier_resultat );

uneCalculatrice.dernier_resultat = 0;
uneCalculatrice.tan();
console.log("tan(0) = " + uneCalculatrice.dernier_resultat );