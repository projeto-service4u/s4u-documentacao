---
sidebar_position: 3
---

# Prettier

Created: August 28, 2021 3:54 PM

## O que é?

Prettier é um formatador de código opinativo com suporte para Javascript, Angular, Vue, entre outros.

Ele remove todo o estilo original e garante que todo o código gerado esteja de acordo com um estilo consistente, pega seu código e o reimprime do zero, levando em consideração o comprimento da linha.

Por exemplo:

```jsx
foo(arg1, arg2, arg3, arg4);
```

Ele se encaixa em uma única linha, então vai ficar como está. No entanto, todos nós nos deparamos com essa situação:

```jsx
foo(
  reallyLongArg(),
  omgSoManyParameters(),
  IShouldRefactorThis(),
  isThereSeriouslyAnotherOne()
);
```

De repente, nosso formato anterior para chamar a função falha porque é muito longo. Prettier fará o trabalho meticuloso de reimprimi-lo assim:

```jsx
foo(
  reallyLongArg(),
  omgSoManyParameters(),
  IShouldRefactorThis(),
  isThereSeriouslyAnotherOne()
);
```

Ele impõe um estilo de código consistente (ou seja, formatação de código que não afetará o AST) em toda a sua base de código porque desconsidera o estilo original analisando-o e imprimindo novamente o AST analisado com suas próprias regras que levam o comprimento máximo da linha em consideração, embrulhando o código quando necessário.

---

## Por que é utilizado?

De longe, o maior motivo para adotar o Prettier é interromper todos os debates em andamento sobre estilos. É geralmente aceito que ter um guia de estilo comum é valioso para um projeto e equipe, mas chegar lá é um processo muito doloroso e pouco gratificante. As pessoas ficam muito emocionadas com maneiras específicas de escrever código e ninguém gosta de perder tempo escrevendo e recebendo críticas.

Geralmente apresentado por pessoas com experiência na base de código atual e em JavaScript, mas as pessoas que se beneficiam desproporcionalmente com isso são novatas na base de código. Pode-se pensar que é útil apenas para pessoas com experiência em programação muito limitada, mas vimos isso acelerar o tempo de desenvolvimento de engenheiros experientes que ingressaram na empresa, já que eles provavelmente usavam um estilo de codificação diferente antes, e desenvolvedores vindos de uma diferente linguagem de programação.

Trabalhamos muito para usar os estilos de codificação menos controversos, passamos por muitas rodadas de consertar todos os casos extremos e aperfeiçoamos a experiência inicial. Quando você estiver pronto para inserir o Prettier em sua base de código, não apenas será fácil para você fazê-lo tecnicamente, mas a base de código recém-formatada não deverá gerar grande controvérsia e ser aceita sem dor por seus colegas de trabalho.

---

## Como funciona?

Primeiro é necessário instalá-lo localmente:

```jsx
npm install --save-dev --save-exact prettier
```

Em seguida, crie um arquivo de configuração vazio para que os editores e outras ferramentas saibam que você está usando o Prettier:

```jsx
echo {}> .prettierrc.json
```

Crie um arquivo `.prettierignore` para permitir que o Prettier CLI e os editores saibam quais arquivos não formatar:

```jsx
# Ignore artifacts:
build
coverage
```

Agora, formate todos os arquivos com o Prettier:

```jsx
npx prettier --write .
```

Formatar a partir da linha de comando é uma boa maneira de começar, mas você obtém o máximo do Prettier executando-o em seu editor, por meio de um atalho de teclado ou automaticamente sempre que salvar um arquivo. Quando uma linha fica tão longa durante a codificação que não cabe na tela, basta apertar uma tecla e vê-la magicamente ser quebrada em várias linhas! Ou quando você cola algum código e o recuo fica todo bagunçado, deixe Prettier corrigi-lo para você sem sair do seu editor.

---

## Referências

- [https://prettier.io/docs/en/index.html](https://prettier.io/docs/en/index.html)
- [https://prettier.io/docs/en/why-prettier.html](https://prettier.io/docs/en/why-prettier.html)
- [https://prettier.io/docs/en/install.html](https://prettier.io/docs/en/install.html)
