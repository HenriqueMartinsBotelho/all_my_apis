# Projeto Full Stack

Vídeo apresentação: -[https://youtu.be/zDf7HbNw9hY](https://youtu.be/zDf7HbNw9hY)

## Pré-requisitos

Antes de começar, certifique-se de que você tem instalado em sua máquina:

- [Node.js](https://nodejs.org/en/) (vX.X.X ou superior)
- [Docker](https://www.docker.com/products/docker-desktop)
- [pnpm](https://pnpm.io/installation) (vX.X.X ou superior)

## Rodando o Frontend

Para instalar as dependências e rodar o servidor de desenvolvimento do frontend:

1. Navegue até a pasta do frontend

   ```
   cd frontend
   ```

2. Instale as dependências:

   ```
   pnpm i
   ```

3. Inicie o servidor de desenvolvimento:
   ```
   pnpm run dev
   ```

Agora, o frontend deve estar rodando em [http://localhost:3000](http://localhost:3000).

## Rodando o Backend

Para subir o backend e o banco de dados PostgreSQL com Docker:

1. Na raiz do projeto, inicie os serviços utilizando Docker Compose. Isso irá subir o banco de dados PostgreSQL:

   ```
   docker-compose up
   ```

2. Em um novo terminal, inicie o servidor do backend:
   ```
   pnpm run start
   ```

## Acesso

- **Frontend**: Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.
- **Backend/API**: A API estará disponível em [http://localhost:5001](http://localhost:5001).
