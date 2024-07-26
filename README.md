# Objetivo do exercício

O objetivo do exercício é criar uma classe mãe e duas classes filhas que herdam dessa classe mãe. Para isso, idealizei um sistema simples de conta bancária que implementa funcionalidades básicas de contas do tipo corrente e poupança, usando JavaScript.

## Funcionalidades

- **Conta Bancária**
  - Consulta de saldo
  - Depósito
  - Saque
- **Conta Corrente**
  - Saque com limite de cheque especial
- **Conta Poupança**
  - Aplicação de juros

## Classes e Métodos

### `contaBancaria`

#### Construtor
```javascript
function contaBancaria(numeroDaConta, saldo)
```

##### Parâmetros
- `numeroDaConta`: Número da conta bancária.
- `saldo`: Saldo inicial da conta.

##### Métodos
- `consultarSaldo()`: Exibe o saldo atual da conta.
- `getSaldo()`: Retorna o saldo atual da conta.
- `setSaldo(valor)`: Define o saldo da conta.
- `depositar(valor)`: Deposita um valor na conta.
- `sacar(valor)`: Saca um valor da conta se houver saldo suficiente.

### `contaCorrente`

#### Construtor
```javascript
function contaCorrente(numeroDaConta, saldo, limiteChequeEspecial)
```

##### Parâmetros
- `numeroDaConta`: Número da conta corrente.
- `saldo`: Saldo inicial da conta.
- `limiteChequeEspecial`: Limite do cheque especial.

##### Métodos
- `sacar(valor)`: Saca um valor da conta considerando o limite de cheque especial.

### `contaPoupanca`

#### Construtor
```javascript
function contaPoupanca(numeroDaConta, saldo, taxaJuros)
```

##### Parâmetros
- `numeroDaConta`: Número da conta poupança.
- `saldo`: Saldo inicial da conta.
- `taxaJuros`: Taxa de juros aplicada na conta.

##### Métodos
- `renderJuros()`: Aplica o rendimento de juros no saldo da conta.
