---
sidebar_position: 2
---

# ESLint

Created: August 28, 2021 3:54 PM

## O que é?

ESLint é um utilitário de _linting_ de JavaScript de código aberto originalmente criado por Nicholas C. Zakas em Junho de 2013.

O _linting_ de código é um tipo de análise estática frequentemente usada para encontrar padrões problemáticos ou código que não segue certas diretrizes de estilo.

Existem _linters_ de código para a maioria das linguagens de programação, e os compiladores às vezes incorporam _linting_ no processo de compilação.

---

## Por que é utilizado?

O JavaScript, por ser uma linguagem dinâmica, é especialmente propenso a erros do desenvolvedor.

Sem o benefício de um processo de compilação, o código JavaScript normalmente é executado para encontrar erros de sintaxe, entre outros. Ferramentas de _linting_ como ESLint permitem que os desenvolvedores descubram problemas com seu código JavaScript sem executá-lo.

O principal motivo da criação do ESLint foi para permitir que os desenvolvedores criassem suas próprias regras de _linting_. Ele foi projetado para ter todas as regras completamente plugáveis. As regras padrão são escritas como qualquer regra de plug-in. Eles podem seguir o mesmo padrão, tanto para as próprias regras quanto para os testes.

Embora venha com algumas regras integradas para torná-lo útil desde o início, é possível carregar regras dinamicamente a qualquer momento.

---

## Como funciona?

ESLint é escrito usando Node.js para fornecer um ambiente de tempo de execução rápido e fácil instalação via npm.

<aside>
💡 Pré-requisitos: Node.js `^10.12.0 ou >=12.0.0` desenvolvido com suporte SSL.

</aside>

O ESLint pode ser instalado via npm ou yarn:

```jsx
npm install eslint --save-dev

# or

yarn add eslint --dev
```

Você deve então definir um arquivo de configuração e a maneira mais fácil de fazer isso é usar a _flag_ `--init`:

```jsx
$ npx eslint --init

# or

$ yarn run eslint --init
```

Após executar `eslint --init`, você terá um arquivo `.eslintrc. {Js,yml,json}` em seu diretório. Nele, você verá algumas regras configuradas assim:

```jsx
{
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
}
```

Os nomes `"semi"` e `"quotes"` são os nomes das regras do ESLint. O primeiro valor é o nível de erro da regra e pode ser um desses valores:

- `"off"` ou `0` - desliga a regra
- `"warn"` ou `1` - liga a regra como um _warning_ (não afeta exit code)
- `"error"` ou `2` - liga a regra como um erro (exit code será 1)

Os três níveis de erro permitem você ter pleno controle sobre como o ESLint aplica as regras.

A configuração do arquivo `.eslintrc.{js,yml,json}` também incluirá a linha:

```jsx
{
    "extends": "eslint:recommended"
}
```

---

## Referências

- [https://eslint.org/docs/about/](https://eslint.org/docs/about/)
- [https://eslint.org/docs/user-guide/getting-started](https://eslint.org/docs/user-guide/getting-started)
