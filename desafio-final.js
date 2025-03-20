class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    // Define o tipo de ataque conforme o tipo do herói
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
      default:
        ataque = "usou um ataque desconhecido";
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

//heróis de exemplo
const heroi1 = new Heroi("Merlin", 150, "mago");
const heroi2 = new Heroi("Arthur", 35, "guerreiro");
const heroi3 = new Heroi("Shaolin", 40, "monge");
const heroi4 = new Heroi("Hanzo", 28, "ninja");

heroi1.atacar(); // "O mago atacou usando magia"
heroi2.atacar(); // "O guerreiro atacou usando espada"
heroi3.atacar(); // "O monge atacou usando artes marciais"
heroi4.atacar(); // "O ninja atacou usando shuriken"
