# Regras de Desenvolvimento

## Padrão de Commit

1. Mensagens de commit devem ser claras e descritivas:

    > - Use o presente do indicativo: "Adiciona funcionalidade X" ao invés de "Adicionei funcionalidade X".  
    > - Limite a linha principal a 50 caracteres.
    > - Use a linha de descrição para detalhes adicionais, se necessário, separada por uma linha em branco.

2. Prefixos para tipos de commit:

    > - ```feat```: Adição de uma nova funcionalidade.
    > - ```fix```: Correção de bugs.
    > - ```docs```: Alterações na documentação.
    > - ```style```: Alterações de formatação, que não afetam o código (espaços em branco, formatação, ponto e vírgula, etc.).
    > - ```refactor```: Mudança no código que não adiciona uma funcionalidade nem corrige um bug.
    > - ```test```: Adição ou correção de testes.

***Exemplo de commit:***

```bash
git commit -m "feat: adiciona validação de email no formulário de cadastro."
```

## Padrão de Criação de Pastas e Nomes de Arquivos

1. Nomes de pastas:

    > - Use nomes em minúsculas separados por hífens.
    > - Use nomes das pastas padrões do desenvolvimento em inglês.
    > - Evite abreviações, a menos que sejam universalmente reconhecidas.

### Exemplo de pastas

- components/
- services/
- models/
- utils/
- usuarios-admin/

### Nomes de arquivos

> - Arquivos de componentes: Use ***PascalCase***.
> - Arquivos de funções, variáveis, classes, interfaces: Use ***kebab-case***.

***Exemplo:***

- components/HeaderComponent.ts
- services/api-service.ts
- models/usuario-model.ts
- utils/formatar-data.ts
- config/database-config.ts

## Padrão de Nomes para Classes, Funções e Variáveis

1. Classes:

    > - Use PascalCase para nomes de classes.

    ***O nome deve ser um substantivo que representa claramente o que a classe faz.***

    ***Exemplo:***

    ```javascript
    class UsuarioPerfil {
        // código da classe
    }
    ```

2. Funções

    > - Use camelCase para nomes de funções.

    ***Use verbos que indiquem claramente o que a função faz.***

    ***Exemplo:***

    ```javascript
    function pegarDadosDeUsuario() {
        // código da função
    }
    ```

3. Variáveis

> - Use camelCase para nomes de variáveis.
> - Utilize nomes significativos que descrevam claramente o propósito da variável.

***Para constantes, use UPPER_CASE.***

***Exemplo:***

```javascript
let idadeDoUsuario = 25;
const IDADE_MAXIMA = 100;
const IDADE_MINIMA = 18;
```

Seguindo essas regras, o desenvolvimento se torna mais organizado e legível, facilitando a colaboração e manutenção do código.

## Nomenclaturas

### Camel case

Camel case deve começar com a primeira letra minúscula e a primeira letra de cada nova palavra subsequente maiúscula:

> ***coisasParaFazer***
>
> ***idadeDoAmigo***
>
> ***valorFinal***

### Pascal case

Também conhecido como ***“upper camel case”*** ou ***“capital case”***, pascal case combina palavras colocando todas com a primeira letra maiúscula:

> ***CoisasParaFazer***
>
> ***IdadeDoAmigo***
>
> ***ValorFinal***

### Snake case

Em snake case, conhecido também como ***“underscore case”***, utilizamos underline no lugar do espaço para separar as palavras. Quando o snake case está em caixa alta, ele é chamado de ***“screaming snake case”***:

> coisas_para_fazer
>
> idade_do_amigo
>
> valor_final
>
> PRIMEIRO_NOME
>
> LISTA_INICIAL

### Kebab case

Kebab case utiliza o traço para combinar as palavras. Quando o kebab case está em caixa alta, ele é chamado de ***“screaming kebab case”***:

> coisas-para-fazer
>
> idade-do-amigo
>
> valor-final
>
> PRIMEIRO-NOME
>
> LISTA-INICIAL
