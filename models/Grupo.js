class Grupo {
  constructor(peça) {
    this._integrantes = [];
    this._peça = peça;
  }

  /*Recebe um tema e define o tema da peça a qual o grupo irá participar  */
  definirTemaPeca(tema) {
    this._peça.setTema(tema);
  }

  /* Adiciona um array de Pessoas ao Grupo*/
  incluirIntegrante(pessoa) {
    for (let i = 0; i < pessoa.length; i++) {
      this._integrantes.push(pessoa);
    }
  }

  /*Recebe um array de nomes e personagens
  cria atores principais tendo os nomes das pessoas
  passados como parametro. Cada ator receberá o personagem na mesma ordem do
  array personagens passados como parametro.
  Depois os adiciona no array papeis*/
  definirAtoresPrincipais(nomes, personagens) {
      if (nomes.length != personagems.length) {
       throw "Número de atores e personagens deve ser igual";
      }
    this._peça.papeisPrincipais(nome,personagens);
  }
  /*Recebe um array de nomes, personagens e cria atores secundarios
  tendo os nomes das pessoas passados como parametro. Cada pessoa interpretará
  o personagem na ordem do array de personagens
  Depois os adiciona no array papeis*/
  definirAtoresSecundarios(nomes,personagens) {
    if (nomes.length != personagems.length) {
      throw "Número de atores e personagens deve ser igual";
    }
    this._peça.papeisSecundarios(nomes,personagens);
  }

  /*Recebe uma String com o nome da Pessoa e seu personagem,
  atribui o papel de AtorSecundario depois o adiciona no array papeis*/

  /*Recebe um array de nomes, funcoes e cria atores secundarios
  tendo os nomes das pessoas passados como parametro. Cada pessoa exercera
  a funcao na ordem do array de personagens
  Depois os adiciona no array papeis*/
  definirBastidores(nomes, funcoes) {
    if (nomes.length != funcoes.length) {
      throw "Número de pessoas e funcoes deve ser igual";
    }
    this._peça.bastidores(nomes,funcoes);
    }

  /*Recebe nomes de pessoas para serem escritores. Depois os adiciona em papeis*/
  definirEscritores(nomes) {
    this._peça.escritores(nomes);
  }
  /*Recebe um nome para ser escritor da peça e o adiciona em papeis*/
 
}