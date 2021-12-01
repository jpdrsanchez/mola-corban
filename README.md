# Teste Morla Corban

Acessar o Teste Concluído: [Clique Aqui](https://teste-mola-corban.vercel.app/)

Implementar uma página principal em React, contendo uma listagem com informações básicas de registros vindos de uma API externa.

## Depêndencias Utilizadas

- ⚛️ Create React APP
  - Por se tratar de um projeto feito em ReactJS, o pacote Create React APP já possuí um SETUP muito bem configurado com uso do `Webpack`, `Babel` e o `ESLint` integrado para padronização de código.
- ✔️ Prettier
  - Utilização do `Prettier` para padronização de código
- 📅 Axios
  - Utilização da biblioteca `Axios` para consumo dos dados vindos a API, a escolha dessa lib se deu principalmente por podermos configurar diversas informações da requisição e podermos reutilizá-las em outras funções de requisição.
- 🗺️ React Router Dom
  - Uso da biblioteca `React Router Dom` para realização do roteamento de páginas com React, visto que no projeto teriamos duas páginas, uma para listagem dos items e uma para os detalhes, atualmente em sua versão 6 essa biblioteca trás diversas funcionalidades excelentes para mexer com o roteamento da aplicação
- 💅 Chakra UI
  - Excelente biblioteca de componentes para uma estilização rápida, prática e bonita de um projeto, como nesse projeto o foco foi nas funcionalidades optei pelo uso desta biblioteca para que não fosse perdido um tempo muito grande com os estilos da aplicação e ainda assim obtivéssemos um resultado elegante de estilo.
- ⚛️ Redux e Redux Toolkit
  - Para gerenciamento do estado global da aplicação optei pela utilização da biblioteca Redux, em específica com uso do pacote `Redux Toolkit` um pacote criado pela própria equipe do Redux que ajuda a eliminar a repetição na criação de Actions e Reducers juntando toda a lógica em Slicers, e também trazendo funções `Thunk` integradas para requisições assíncronas

## Instruções

Instação do projeto

**_IMPORTANTE_**
O projeto utiliza de váriaveis ambiente para o funcionamento das requisições, antes de iniciar a instalação local rode o comando:

```
cp .env.example .env.local
```

Caso não funcione por estar utilizando o terminal do windows, cria manualmente o arquivo `.env.local` e copie o conteúdo de dentro de `.env.example` para o `.env.local`

```
yarn install ou npm install
```

Ambiente de desenvolvimento

```
yarn start ou npm start
```

Ambiente de produção

```
yarn build ou npm run build
```
