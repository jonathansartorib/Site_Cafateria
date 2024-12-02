# Café Supremo Delivery - Projeto Integrador Transdisciplinar

Este é um projeto de uma cafeteria online desenvolvido como parte do **Projeto Integrador Transdisciplinar** da faculdade. O projeto tem como objetivo demonstrar a integração de um sistema de cadastro e login de usuários, além de exibir informações de produtos (cafés) para o usuário autenticado.

## Descrição

O projeto consiste em um site de cafeteria, "Café Supremo Delivery", que permite aos usuários se cadastrarem, realizarem login e visualizarem ofertas da semana. A aplicação foi projetada para demonstrar a conexão com um banco de dados PostgreSQL, permitindo o registro de novos usuários e a autenticação de usuários já registrados.

A aplicação é composta por um frontend interativo e um backend que se comunica com um banco de dados PostgreSQL hospedado no **Render**. A partir desse sistema, os usuários podem acessar as ofertas de produtos de café, se cadastrar e realizar login de maneira segura.

## Funcionalidades

- **Cadastro de usuários**: Os usuários podem criar uma conta fornecendo nome, e-mail, senha e data de nascimento.
- **Login de usuários**: Os usuários podem fazer login usando suas credenciais (e-mail e senha).
- **Exibição de produtos**: Após o login, o usuário pode visualizar as ofertas da semana (produtos como café clássico e espresso intenso).
- **Validação de campos**: O sistema realiza validações para garantir que todos os campos sejam preenchidos corretamente antes de enviar os dados.

## Tecnologias Utilizadas

- **Frontend**: 
  - HTML
  - CSS
  - JavaScript (para interação com o servidor)
  
- **Backend**: 
  - Node.js
  - Express.js (framework para criação de servidores)
  - PostgreSQL (para o banco de dados)
  - Cors (para permitir requisições entre diferentes origens)
  
- **Hospedagem**:
  - **Frontend**: render.com
  - **Backend**: Render (para hospedar o servidor e banco de dados PostgreSQL)
  
- **Banco de Dados**: PostgreSQL hospedado no **Render**

## Como Rodar o Projeto Localmente

### 1. Clonando o repositório

Primeiro, clone o repositório em sua máquina local:

```bash
git clone https://github.com/SeuUsuario/Cafe-Supremo-Delivery.git
