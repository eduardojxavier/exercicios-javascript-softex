class Carro{
    constructor(modelo, ano, cor){
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }

    exibirDetalhes(){
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Cor: ${this.cor}`);
    }

    acelerar(velocidade){
        console.log(`${this.modelo} acelerou até ${velocidade} KM/h.`)
    }

    frear(){
        console.log(`${this.modelo} freou.`)
    }
    

    const novoCarro = new Carro('Palio','2007','Cinza');
    novoCarro.exibirDetalhes();
    novoCarro.acelerar(100);
    novoCarro.frear();
}