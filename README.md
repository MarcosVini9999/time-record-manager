# Pontog GO

Com o PontoGo seus colaboradores poderão bater seus pontos de forma fácil e rápida, possuindo também uma Dashboard intuitiva.

![Image](https://user-images.githubusercontent.com/66041553/264820225-297ecc4c-548d-46cb-b2a0-9c48891a3140.png)

## ❓ Como iniciar ?

```bash

$ git clone https://github.com/MarcosVini9999/time-record-manager.git

```

```bash
# Instalar as dependencias

$ npm i

# Run

$ npx run dev
```

## ⚙ Tecnologias

Tecnologias que usei para desenvolver a aplicação:

- [ReactJS](https://react.dev/)

- [Vite](https://vitejs.dev/)

- [Material UI](https://mui.com/)

- [Apollo](https://www.apollographql.com/docs/)

- [GraphQL](https://graphql.org/)

## Sobre o Projeto

Dois produtos foram desenvolvidos, um sistema para bater pontos de funcionários, e uma Landing Page para a divulgação de tal ferramenta.

Dessa forma, o projeto foi dividio em algumas rotas, como mostrado na imagem abaixo.

![Image](https://user-images.githubusercontent.com/66041553/264815387-51fbe73e-b6cc-4b92-9f29-6e40ccc1db34.png)

## Rotas 🛣

### Landing Page "/"

![Image](https://user-images.githubusercontent.com/66041553/264815553-de7c4e9f-7583-4b8e-bbb7-ecd089c5ef26.png)

A Landing Lage foi divida em 5 Containers, são eles, o Header, UpSection, Sponsors, PlansSection e o Footer. Desse modo, é possível encontrar uma pasta <a href="https://github.com/MarcosVini9999/time-record-manager/tree/main/src/containers/ladingPage" target="_blank">/containers/ladingPage</a> com todos os componentes que representam esses Containers.

### Login "/login"

![Image](https://user-images.githubusercontent.com/66041553/264816127-bae5446c-01b4-48c8-b24c-0f3b68f1a05b.png)

A página de Login, que se encontra <a href="https://github.com/MarcosVini9999/time-record-manager/tree/main/src/pages/LoginPage" target="_blank">aqui</a> usa uma mutation do GraphQL para fazer o login do usuário.

### Dashboard "/dashboard"

![Image](https://user-images.githubusercontent.com/66041553/264816229-1cab2162-3b59-43d3-a48e-677e8dc561f8.png)

A <a href="https://github.com/MarcosVini9999/time-record-manager/tree/main/src/pages/DashboardPage" target="_blank">página do administrador</a> é similar à página Meus Registros, porém ela não disponibiliza o botão para bater o ponto. Vale ressaltar que ela possui um menu que se encontra em um componente <a href="https://github.com/MarcosVini9999/time-record-manager/tree/main/src/components/Layout" target="_blank">Layout</a>, e esse menu engloba a página do administrador através das <a href="https://github.com/MarcosVini9999/time-record-manager/blob/main/src/components/Routes/router.tsx" target="_blank">rotas do projeto</a>.

### Meus Registros "/meus-registros"

![Image](https://user-images.githubusercontent.com/66041553/264816311-32565485-8264-4915-9141-214c2651d4d8.png)

Similar à página do administrador, a <a href="https://github.com/MarcosVini9999/time-record-manager/tree/main/src/pages/TimeRecordPage" target="_blank">página do usuário</a> permite ao usuário logado bater ponto através de um <a href="https://github.com/MarcosVini9999/time-record-manager/tree/main/src/components/PontoGoDrawer" target="_blank">Drawer</a>, assom como mostrado na imagem acima.
