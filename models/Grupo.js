class Grupo{

  constructor(peça){
      this._papeis = [];
      this._peça = peça;
  }

  /*Recebe um array de nomes e personagens
  cria atores principais tendo os nomes das pessoas
  passados como parametro. Cada ator receberá o personagem na mesma ordem do
  array personagens passados como parametro.
  Depois os adiciona no array papeis*/
  definirAtoresPrincipais(nomes, personagens){
      if(nomes.length != personagems.length){
          throw "Número de atores e personagens deve ser igual";
      }

      for(let i= 0; i < nomes.length; i++){
            definirAtorPrincipal(nomes[i],personagens[i]);
      }

  }

  /*Recebe uma String com o nome da Pessoa e personagem e atribui o papel
  de AtorPrincipal, depois o adiciona no array papeis*/
  definirAtorPrincipal(nome, personagem){
      this._papeis.push( new AtorPrincipal(nome, personagem));
  }

  /*Recebe um array de nomes, personagens e cria atores secundarios
  tendo os nomes das pessoas passados como parametro. Cada pessoa interpretará
  o personagem na ordem do array de personagens
  Depois os adiciona no array papeis*/
  definirAtoresSecundarios(nomes,personagens){
    if(nomes.length != personagems.length){
        throw "Número de atores e personagens deve ser igual";
    }

    for(let i= 0; i < nomes.length; i++){
          definirAtorSecundario(nomes[i],personagens[i]);
    }
  }

  /*Recebe uma String com o nome da Pessoa e seu personagem,
  atribui o papel de AtorSecundario depois o adiciona no array papeis*/
  definirAtorSecundario(nome){
      this._papeis.push( new AtorSecundario(nome));
  }

  /*Recebe um array de nomes, funcoes e cria atores secundarios
  tendo os nomes das pessoas passados como parametro. Cada pessoa exercera
  a funcao na ordem do array de personagens
  Depois os adiciona no array papeis*/
  definirBastidores(nomes, funcoes){
    if(nomes.length != funcoes.length){
        throw "Número de pessoas e funcoes deve ser igual";
    }

    for(let i= 0; i < nomes.length; i++){
          definirBastidor(nomes[i],funcoes[i]);
    }
  }
  /*Recebe uma String com o nome da Pessoa e sua função no bastidor. Depois o
  adiciona no array papeis */
  definirBastidor(nome, funcao){
      this._papeis.push( new Bastidor(nome, funcao));
  }
  /*Recebe nomes de pessoas para serem escritores. Depois os adiciona em papeis*/
  definirEscritores(nomes){
      nomes.forEach( definirEscritor(nome));
  }
  /*Recebe um nome para ser escritor da peça e o adiciona em papeis*/
  definirEscritor(nome){
      this._papeis.push( new Escritor(nome));
  }
