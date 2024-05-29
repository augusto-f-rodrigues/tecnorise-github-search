# Tecnorise - GitHub Search

Este projeto é uma aplicação desenvolvida em Next Js o conceito mobile-first para a pesquisa de repositórios GitHub.

## Índice

- [Recursos Principais](#recursos-principais)
- [Recursos Extras](#recursos-extras)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Scripts Disponíveis](#scripts-disponíveis)

## Recursos Principais

- Pesquisa de Repositórios GitHub: Pesquisa repositórios por nome usando a API GraphQL do GitHub.
- Exibição de Resultados: Lista repositórios com nome do repositório, nome do autor, foto de perfil e a principal tecnologia usada no repositório.
- Detalhes do Repositório: Modal com informações detalhadas ao clicar em um repositório.
- Interface Responsiva: Design mobile-first, adaptável a diferentes dispositivos.
- Feedback de Carregamento: Indicador visual durante a busca de dados.
- Gestão de Estado com Redux: Uso do Redux Toolkit para gerenciamento eficiente do estado.

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Material UI](https://mui.com/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GraphQL](https://graphql.org/)

## Pré-requisitos

Certifique-se de ter o Node.js e o npm instalados.

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/augusto-f-rodrigues/tecnorise-github-search
cd tecnorise-github-search
npm install
```

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Cria a build de produção da aplicação.
- `npm run start`: Inicia o servidor da aplicação em modo de produção.
- `npm run lint`: Executa a verificação de lint para encontrar e corrigir problemas no código.