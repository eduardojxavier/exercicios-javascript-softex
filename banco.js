let banco = {
    conta: "123456",
    saldo: 1000,
    tipoDeConta: "Corrente",
    agencia: "7890",
  
    // Método para buscar o saldo
    buscarSaldo: function () {
      return this.saldo;
    },
  
    // Método para realizar um depósito
    deposito: function (valor) {
      this.saldo += valor;
      return `Depósito de R$ ${valor} realizado com sucesso. Novo saldo: R$ ${this.saldo}`;
    },
  
    // Método para realizar um saque
    saque: function (valor) {
      if (valor > this.saldo) {
        return "Saldo insuficiente. Saque não permitido.";
      } else {
        this.saldo -= valor;
        return `Saque de R$ ${valor} realizado com sucesso. Novo saldo: R$ ${this.saldo}`;
      }
    },
  
    // Método para obter o número da conta
    numeroDaConta: function () {
      return this.conta;
    },
  };
  
  // Exemplos de uso dos métodos
  console.log("Saldo atual:", banco.buscarSaldo());
  console.log(banco.deposito(500));
  console.log(banco.saque(200));
  console.log("Número da conta:", banco.numeroDaConta());