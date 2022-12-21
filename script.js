function makeUser() {
    return {
      name: "Іван",
      ref: this
    };
}
  
let user = makeUser();
  
alert(user.ref.name); //undefined
  
let calculator = {
    a: null,
    b: null,
    read() {
        this.a = parseFloat(prompt());
        this.b = parseFloat(prompt());
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() ); 

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() {
        alert(this.step);
        return this;
    }
}
  
ladder.up().up().down().showStep().down().showStep();