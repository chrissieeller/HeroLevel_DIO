class hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
}

atacar() {
    let ataque;
    switch (this.tipo) {
      case "mago":
        ataque = "usou magia";
        break;
      case "guerreiro":
        ataque = "usou espada";
        break;
      case "monge":
        ataque = "usou artes marciais";
        break;
      case "ninja":
        ataque = "usou shuriken";
        break;
    }
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

const heroi = new hero("Chres", 28, "monge");
heroi.atacar(); 