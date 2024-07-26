function contaBancaria(numeroDaConta, saldo){
    this.numeroDaConta = numeroDaConta;
    let _saldo = saldo;

    this.consultarSaldo = function(){
        if (_saldo >= 0){
            console.log(`O seu saldo atual é: R$${_saldo}`);
        }else{
            console.log(`O seu saldo atual é: -R$${Math.abs(_saldo)}. Pague o que deve!`);
        }
    }

    this.getSaldo = function(){
        return _saldo;
    }

    this.setSaldo = function(valor){
        _saldo = valor;
    }

    this.depositar = function(valor){
        _saldo += valor;
        console.log(`O valor de R$${valor} foi depositado na sua conta com sucesso!`)
    }

    this.sacar = function(valor){
        if (valor <= _saldo){
            _saldo -= valor;
            console.log(`O valor de R$${valor} foi sacado da sua conta com sucesso!`)
        }
        else{
            console.log('O valor que você deseja sacar excede o valor disponível em sua conta!')
        }
    }
}

function contaCorrente (numeroDaConta, saldo, limiteChequeEspecial){
    const _limiteChequeEspecial = limiteChequeEspecial;

    contaBancaria.call(this, numeroDaConta, saldo);

    this.sacar = function(valor){
        if (valor <= this.getSaldo() + _limiteChequeEspecial){
            // this.saldo -= valor;
            this.setSaldo(this.getSaldo() - valor);
            console.log(`O valor de R$${valor} foi sacado da sua conta com sucesso!`)
        }else{
            console.log('Saldo insuficiente, mesmo considerando o limite de cheque especial!')
        }
    }
}

function contaPoupanca(numeroDaConta, saldo, taxaJuros){
    const _taxaJuros = taxaJuros;

    contaBancaria.call(this, numeroDaConta, saldo);

    this.renderJuros = function(){
        const rendimento = this.getSaldo() * (_taxaJuros/100);
        // this.saldo += rendimento;
        this.setSaldo(this.getSaldo() + rendimento)
        console.log(`Rendimento de R$${rendimento} aplicado!`)
    }
}

pedro = new contaCorrente('100234', 10000, 500);
joana = new contaPoupanca('102322', 7000, 20);
gustavo = new contaCorrente('101122', 5000, 100);

console.log('-----------------------------------------------');

pedro.consultarSaldo();
pedro.sacar(300);
pedro.depositar(2000);
pedro.consultarSaldo();
console.log('-----------------------------------------------');

joana.consultarSaldo();
joana.sacar(700);
joana.depositar(1000);
joana.consultarSaldo();
joana.renderJuros();
joana.consultarSaldo();
console.log('-----------------------------------------------');

gustavo.consultarSaldo();
gustavo.sacar(100);
gustavo.depositar(500);
gustavo.consultarSaldo();
gustavo.sacar(5450);
gustavo.consultarSaldo();
console.log('-----------------------------------------------');