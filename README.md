This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.





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
└── next.config.js                 # Configurações do Next.js
```

### Detalhamento da Estrutura:

- **app/**: Essa pasta pode conter configurações específicas da aplicação, como a inicialização do servidor Express (se estiver usando com Next.js para SSR) ou configurações específicas do Next.js, além de middlewares globais.

- **domain/**: Aqui ficam as entidades do seu domínio e os serviços de domínio. Os `models` representam as entidades de negócio, enquanto os `services` encapsulam a lógica de negócio complexa que pode envolver várias entidades.

- **infra/**: A camada de infraestrutura inclui tudo relacionado ao Prisma, implementações de interfaces de repositório (para abstrair o acesso aos dados), e outras integrações com sistemas externos ou serviços como envio de e-mails, armazenamento de arquivos, etc.

- **interfaces/**: Nesta pasta, você define as interfaces que facilitam a comunicação entre as diferentes camadas da sua aplicação. Isso pode incluir interfaces para os repositórios (definindo os métodos de acesso aos dados que os repositórios de infraestrutura devem implementar), Data Transfer Objects (DTOs), e qualquer outro contrato necessário para a interação entre camadas.

- **usecases/**: Os casos de uso contêm a lógica de aplicação. Eles são responsáveis por executar as operações específicas solicitadas pelos usuários da aplicação, orquestrando o fluxo de dados entre a interface do usuário e a camada de domínio, e utilizando os serviços de domínio para executar regras de negócio.

