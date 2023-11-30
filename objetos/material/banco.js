class Banco {
    constructor(numConta, saldo, cliente) {
      this.numConta = numConta;
      this.saldo = saldo;
      this.cliente = cliente;
    }

    saldo() {
      console.log(`Saldo da conta ${this.numConta}: $${this.saldo}`);
    }

    depositar(valor) {
      this.saldo += valor;
      console.log(`Depósito de $${valor} realizado com sucesso. Novo saldo: $${this.saldo}`);
    }

    sacar(valor) {
      if (valor <= this.saldo) {
        this.saldo -= valor;
        console.log(`Saque de $${valor} realizado com sucesso. Novo saldo: $${this.saldo}`);
      } else {
        console.log('Saldo insuficiente para saque. Reveja o valor e tente novamente.');
      }
    }
  }

  
  const novaConta = new Banco('123', 100, 'Eduardo');
  novaConta.saldo();
  novaConta.depositar(50);
  novaConta.sacar(10);