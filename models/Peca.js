class Peca{
    cosntructor(){
        this._tema;
        this._historia = new Historia();
    }

    set tema(tema){
        this._tema = tema;
    }

    get historia(){
        return this._historia;
    }
}
