# Teste Morla Corban

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

```
yarn install ou npm install
```

Ambiente de desenvolvimento

```
yarn start ou npm start
```

Ambiente de desenvolvimento

```
yarn build ou npm run build
```

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

``

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
