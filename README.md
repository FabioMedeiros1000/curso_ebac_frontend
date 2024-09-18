# Testes Automatizados com Cypress

Esta branch contém testes automatizados desenvolvidos com [Cypress](https://www.cypress.io/) para validar as funcionalidades principais de uma aplicação de agenda de contatos. O objetivo é garantir a confiabilidade das operações de inclusão, alteração e remoção de contatos.

## Funcionalidades Testadas

Os testes cobrem as seguintes funcionalidades da aplicação:

- **Inclusão de contato**: Verifica se um novo contato pode ser adicionado com sucesso.
- **Alteração de contato**: Valida a capacidade de editar informações de um contato existente.
- **Remoção de contato**: Garante que contatos possam ser excluídos corretamente.

## Instruções para Execução dos Testes

Siga os passos abaixo para clonar o repositório, instalar as dependências e executar os testes:

1. Clone o repositório:
   ```bash
   git clone git@github.com:FabioMedeiros1000/curso_ebac_frontend.git
   ```

2. Acesse a branch específica com os testes Cypress:
   ```bash
   git checkout exercicio_cypress
   ```

3. Instale as dependências do projeto:
   ```bash
   npm install
   ```

4. Execute os testes:
   ```bash
   npm run cypress open
   ```

## Aplicação Testada

Os testes automatizados são aplicados à seguinte aplicação de agenda de contatos:  
[Agenda de Contatos - Aplicação React](https://agenda-contatos-react.vercel.app/)

---

## Ferramentas Utilizadas

- **Cypress**: Framework de testes end-to-end para aplicações web.
- **Node.js & npm**: Para gerenciamento de dependências e execução de scripts.

## Observações

- Certifique-se de estar na branch `exercicio_cypress` antes de rodar os testes.
- Caso encontre algum problema, verifique se todas as dependências estão corretamente instaladas.
