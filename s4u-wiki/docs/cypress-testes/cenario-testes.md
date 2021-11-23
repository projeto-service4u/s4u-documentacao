---
sidebar_position: 1
---

# Cenários de Teste

<details>
<summary><b>Login</b></summary>

1. Validações gerais
   **Dado que** sou um prestador cadastrado
   **Quando** acesso o site
   **Então** devo visualizar o logo Service4U
   **E** os campos de email e senha
   **E** o botão **Login.**

2. Validar email obrigatório
   **Dado que** sou um prestador cadastrado
   **Quando** acesso o site
   **E** preencho apenas a senha
   **Então** o botão de **Login** deve ficar desabilitado

3. Validar senha obrigatória
   **Dado que** sou um prestador cadastrado
   **Quando** acesso o site
   **E** preencho apenas o email
   **Então** o botão de **Login** deve ficar desabilitado

4. Requerer usuário e senha válidos
   **Dado que** sou um prestador cadastrado
   **Quando** acesso o site
   **E** preencho os campos de email e senha com dados inválidos
   **Então** ao clicar em **Login** devo receber uma mensagem de que email e senha não conferem.

5. Login com sucesso
   **Dado que** sou um prestador cadastrado
   **Quando** acesso o site
   **E** preencho meu email e senha
   **Então** devo realizar meu login com sucesso
   **E** visualizar a página principal com o texto **Clientes**.

</details>
        
<details>
<summary><b>Clientes</b></summary>

1. Validações gerais
   **Dado que** sou um prestador cadastrado
   **Quando** efetuo login com sucesso
   **Então** devo visualizar o título **Clientes**
   **E** o botão **Novo Cliente**
   **E** visualizar as colunas **Nome, Email, Telefone** e **Ações
   E** a listagem de itens já cadastrados ou não.

2. Validar itens do modal
   **Dado que** sou um prestador cadastrado
   **Quando** acesso a tela de Clientes
   **E** clico no botão **Novo cliente**
   **Então** devo visualizar o modal com o título **Adicionar novo cliente
   E** os campos **Nome Email** e **Telefone
   E** os botões de **Salvar** e **Fechar**

3. Validar fechamento do modal
   **Dado que** sou um prestador cadastrado
   **Quando** acesso a tela de Clientes
   **E** clico no botão **Novo cliente**
   **Então** ao clicar no botão **Fechar** devo voltar para a tela de **Clientes**

4. Validar botão Salvar desabilitado
   **Dado que** sou um prestador cadastrado
   **Quando** acesso a tela de Clientes
   **E** clico no botão **Novo cliente**
   **Então** ao deixar os campos vazios o botão **Salvar** deve \*\*\*\*estar desabilitado

5. Cadastro de cliente com sucesso
   **Dado que** sou um prestador cadastrado
   **Quando** acesso a tela de Clientes
   **E** clico no botão **Novo cliente**
   **Então** após preencher os dados de **Nome, Email, Telefone** e clicar em **Salvar** devo receber uma mensagem de sucesso
   **E** visualizar na listagem após fechar o modal

6. Validar tela de Nova Lista Padrão para um cliente
   **Dado que** sou um prestador cadastrado
   **Quando** acesso a tela de Clientes
   **E** clico no botão **Visualizar** na coluna Ações de determinado cliente
   **E** clico no botão **Nova Lista**
   **Então** devo visualizar o título **Nova Lista Padrão**, os botões **Salvar Lista**, **Voltar** e **Adicionar
   E** os dados de **Produto**, **Quantidade, Unidade/Medida
   E** as informações de lista desse cliente, com as colunas **Nome, Quantidade** e **Unidade - Medida**

7. Vincular lista padrão ao cliente
   **Dado que** sou um prestador cadastrado
   **Quando** acesso a tela de Clientes
   **E** clico no botão **Visualizar** na coluna Ações de determinado cliente
   **E** clico no botão Nova Lista
   **E** devo preencher o **Nome da Lista**, selecionar **Produto**, **Quantidade** e **Unidade-Medida
   Então** após clicar em **Salvar Lista** a mesma deve ser criada com sucesso
   **E** os dados de **Nome**, **Data** e **Ações** devem ser mostrados na tela de dados do cliente

8. Visualizar dados e listas do cliente
   **Dado que** sou um prestador cadastrado
   **Quando** acesso a tela de Clientes
   **E** clico no botão **Visualizar** na coluna Ações de determinado cliente
   **Então** devo visualizar o título **Cliente**, os botões **Nova lista** e **Voltar
   E** os dados de **Nome**, **Email, Telefone
   E** as informações de lista desse cliente, com as colunas **Nome, Data** e **Ações**

9. Exclusão de Lista Padrão do cliente
   **Dado que** sou um prestador cadastrado
   **Quando** acesso a tela de Clientes
   **E** clico no botão **Visualizar** na coluna Ações de determinado cliente
   **Então** ao clicar no botão **Excluir** em uma das listas existentes a mesma deve deixar de ser exibida

10. Exclusão de cliente
    **Dado que** sou um prestador cadastrado
    **Quando** acesso a tela de Clientes
    **E** clico no botão **Excluir** na coluna Ações de determinado cliente
    **Então** o cliente em questão deve ser excluído e removido da listagem

</details>

<details>
<summary><b>Produto</b></summary>

1. Validações gerais
   **Dado que** sou um prestador cadastrado
   **Quando** efetuo login com sucesso
   **E** clico no menu **Produto**
   **Então** devo visualizar o título **Produtos**
   **E** o botão **Adicionar Item**
   **E** visualizar as colunas **Nome** e **Unidade/Medida
   E** a listagem de itens já cadastrados ou não.

2. Validar itens do modal
   **Dado que** sou um prestador cadastrado
   **Quando** acesso a tela de Produtos
   **E** clico no botão **Adicionar item**
   **Então** devo visualizar o modal com o título **Adicionar Item
   E** os campos **Nome Produto** e **Unidade/Medida
   E** os botões de **Enviar** e **Fechar**

3. Validar fechamento do modal
   **Dado que** sou um prestador cadastrado
   **Quando** acesso a tela de Produtos
   **E** clico no botão **Adicionar item**
   **Então** ao clicar no botão **Fechar** devo voltar para a tela de **Produtos**

4. Validar botão Enviar desabilitado
   **Dado que** sou um prestador cadastrado
   **Quando** acesso a tela de Produtos
   **E** clico no botão **Adicionar item**
   **Então** ao deixar os campos vazios o botão **Enviar** deve \*\*\*\*estar desabilitado

5. Cadastro de produto com sucesso
   **Dado que** sou um prestador cadastrado
   **Quando** acesso a tela de Produtos
   **E** clico no botão **Adicionar item**
   **Então** após preencher os dados de **Nome** e **Unidade/Medida** e clicar em **Enviar** devo receber uma mensagem de sucesso
   **E** visualizar na listagem após fechar o modal

6. Exclusão de produto com sucesso
   **Dado que** sou um prestador cadastrado
   **Quando** acesso a tela de Produtos
   **E** clico no botão **Excluir** de determinado produto
   **Então** devo receber a mensagem de confirmação e o mesmo removido da listagem

</details>

<details>
  <summary><b>Lista Padrão</b></summary>

1. Validações gerais
   **Dado que** sou um prestador cadastrado
   **Quando** efetuo login com sucesso
   **E** clico no menu **Lista Padrão**
   **Então** devo visualizar o título **Lista Padrão**
   **E** o botão **Adicionar nova lista**
   **E** visualizar as colunas **Nome** e **Ações
   E** a listagem de listas já cadastrados ou não.

2. Cadastro de Lista Padrão com sucesso
   **Dado que** sou um prestador cadastrado
   **Quando** acesso a tela de Lista Padrão
   **E** clico no botão **Adicionar nova lista**
   **E** após preencher os dados de **Nome da lista, Produto, Quantidade,** **Unidade-Medida
   Então** ao clicar nos botões **Adicionar** e **Enviar,** devo receber uma mensagem de sucesso
   **E** visualizar a lista na listagem após fechar o modal

3. Visualizar informações de Lista Padrão
   **Dado que** sou um prestador cadastrado
   **Quando** acesso a tela de **Lista Padrão**
   **E** clico no botão **Visualizar** na coluna Ações de determinado lista
   **Então** devo visualizar o título **Lista Padrão**, os botões **Imprimir lista** e **Voltar
   E** as colunas **Nome, Quantidade, Unidade-Medida
   E** as informações de itens pertencentes à lista

4. Imprimir Lista Padrão
   **Dado que** sou um prestador cadastrado
   **Quando** acesso a tela de **Lista Padrão**
   **E** clico no botão **Visualizar** na coluna Ações de determinado lista
   **Então** ao clicar no botão **Imprimir lista** devo ser direcionado para a tela de impressão

5. Excluir Lista Padrão
   **Dado que** sou um prestador cadastrado
   **Quando** acesso a tela de Lista Padrão
   **E** clico no botão Excluir na coluna Ações de determinado lista
   **Então** a Lista Padrão em questão deve ser removida da lista

</details>
