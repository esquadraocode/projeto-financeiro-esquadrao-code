# <center>App Financeiro</center>

Projeto de uma aplicação financeira simples para o ***Curso de Formação DEV da Cod3r***.

Este projeto está sendo realizado pela equipe "Esquadrão Code" formada pelos alunos:  

- Wene Alves - Líder
- Edson Dionísio - Dev
- Marcos Vinicius - Ouvinte/Dev
- Matheus Costa - Dev
- Elmerson - Dev
- Raphael Silvestre - Ouvinte
- Rafael Missio - Dev
- Tiago Cordeiro - Dev

Este é um projeto [Next.js](https://nextjs.org/) inicializado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Iniciando

- Primeiro, clone o projeto do repositório do Github na pasta onde deseja salvar o projeto, através do comando:

```bash
git clone git@github.com:esquadraocode/projeto-financeiro-esquadrao-code.git
```

- Depois instale as dependências do projeto com o comando:

```bash
npm install
# ou
yarn install
# ou
pnpm install
# ou
bun install
```

- Agora execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Acesse [http://localhost:3000/](http://localhost:3000) em seu navegador e veja o resultado.

### Estrutura do Projeto

```text-plane
APP-FINANCEIRO/
│
├── src/
│   ├── app/                       # Configurações específicas da aplicação e inicialização
│   │   └── ...                    # Inicialização do servidor, configurações do Next.js, etc.
│   │
│   ├── domain/
│   │   ├── models/                # Modelos de domínio que representam as entidades
│   │   │   └── ...                # Ex: User.ts, Product.ts
│   │   ├── services/              # Serviços de domínio que contêm lógica de negócios
│   │   │   └── ...                # Ex: UserService.ts, ProductService.ts
│   │   └── ...                    # Outras abstrações de domínio, como exceções de domínio
│   │
│   ├── infra/
│   │   ├── prisma/                # Configurações e scripts do Prisma
│   │   │   ├── schema.prisma      # Esquema do Prisma, definição de modelos
│   │   │   └── seed.ts            # Script de seed para o banco de dados
│   │   └── ...                    # Outras implementações de infraestrutura (ex: repositórios, APIs externas)
│   │
│   ├── interfaces/
│   │   └── ...                    # Interfaces para comunicação entre camadas (ex: Repositórios, DTOs)
│   │
│   └── usecases/
│       └── ...                    # Casos de uso, contendo a lógica de aplicação (ex: CreateUserUseCase.ts)
│
├── prisma/
│   ├── migrations/                # Pasta de migrações geradas pelo Prisma Migrate
│   └── schema.prisma              # Esquema do Prisma, definição de modelos
│
├── public/
│   └── ...                        # Arquivos estáticos (imagens, favicon.ico)
│
├── styles/
│   └── ...                        # Estilos globais
│
├── .env                           # Variáveis de ambiente
├── tsconfig.json                  # Configurações do TypeScript
└── next.config.mjs                 # Configurações do Next.js
```

### Detalhamento da Estrutura

- **/app**:  
Essa pasta pode conter configurações específicas da aplicação, como a inicialização do servidor Express (se estiver usando com Next.js para SSR) ou configurações específicas do Next.js, além de middlewares globais.

- **/domain**:  
Aqui ficam as entidades do seu domínio e os serviços de domínio. Os `models` representam as entidades de negócio, enquanto os `services` encapsulam a lógica de negócio complexa que pode envolver várias entidades.

- **/infra**:  
A camada de infraestrutura inclui tudo relacionado ao Prisma, implementações de interfaces de repositório (para abstrair o acesso aos dados), e outras integrações com sistemas externos ou serviços como envio de e-mails, armazenamento de arquivos, etc.

- **/interfaces**:  
Nesta pasta, você define as interfaces que facilitam a comunicação entre as diferentes camadas da sua aplicação. Isso pode incluir interfaces para os repositórios (definindo os métodos de acesso aos dados que os repositórios de infraestrutura devem implementar), Data Transfer Objects (DTOs), e qualquer outro contrato necessário para a interação entre camadas.

- **/usecases**:  
Os casos de uso contêm a lógica de aplicação. Eles são responsáveis por executar as operações específicas solicitadas pelos usuários da aplicação, orquestrando o fluxo de dados entre a interface do usuário e a camada de domínio, e utilizando os serviços de domínio para executar regras de negócio.
