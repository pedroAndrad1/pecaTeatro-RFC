class Peca {
  cosntructor() {
    this._tema;
    this._historia = new Historia();
    this._papeisPrincipais = new Map();
    this._papeisSecundarios = new Map();
    this._bastidores = new Map();
    this._escritores = [];
  }

  set tema(tema) {
    this._tema = tema;
  }

  get tema() {
    return this._tema;
  }

  get historia() {
    return this._historia;
  }

  set bastidores(pessoas, funcoes) {
    for (let i = 0; i < pessoas.length; i++) this._bastidores.set(funcoes[i],pessoas[i]);
  }

  get bastidores() {
    return this._bastidores;
  }

  set papeisPrincipais(pessoas, personagens) {
    for (let i = 0; i < pessoas.length; i++) this._papeisPrincipais.set(personagens[i],pessoas[i]);
  }

  get papeisPrincipais() {
    return this._papeisPrincipais;
  }

  set papeisSecundarios(pessoas,personagens) {
    for (let i = 0; i < pessoas.length; i++) this._papeisSecundarios.set(personagens[i],pessoas[i]);
  }
  
  get papeisSecundarios() {
    return this._papeisSecundarios;
  }

  set escritores (escritores){
    for (let i = 0; i < escritores.length; i++) this._escritores.push(escritores[i]);
  }

  get escritores(){
      return this._escritores;
  }

}