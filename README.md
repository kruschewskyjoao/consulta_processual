# Aplicação de consulta processual

### Descrição sobre a aplicação
- A aplicação é de consulta processual, onde você vai realizar todas as consultas dos seus processos.
- É uma aplicação Full Stack, o back-end é Api RESTful onde foi utilizado express, sequelize, docker e middlewares de erro. Já no front-end foi utilizado o React com algumas bibliotecas extras que vão ser instalados ao dar npm install.

## Para rodar o back-end é necessário o Docker
- Documentação de instalação para Ubuntu: https://docs.docker.com/engine/install/ubuntu/
- Documentação para instalação macOs: https://docs.docker.com/desktop/install/mac-install/

## Caso de estar utilizando windows
### Recomendo uso de wsl2 para simular o linux
- Documentação wsl2: https://learn.microsoft.com/pt-br/windows/wsl/install
- Documentação Docker wsl2: https://docs.docker.com/desktop/windows/wsl/

### Node versão 16.18.0 (Versão utilizada)
- Baixar versão exata que foi utilizada: https://nodejs.org/download/release/v16.18.0/

# Clone o repositório
- git clone git@github.com:kruschewskyjoao/consulta_processual.git

# Entre na página do projeto
- cd consulta_processual

#### Rode o back-end com Docker
- cd back-end
- docker-compose up -d --build
#### Vamos entrar no container:
- docker exec -it back_end_jus bash
#### No container, vamos dar um npm i:
- npm install
#### Ainda no container, vamos popular o banco:
- npm run db:reset
#### Deixar o banco rodando:
- npm run dev

## Rode o front-end
#### Abra outro terminal e navegue até a pasta front-end
#### Instale as dependências
- npm install
#### Após instalar:
- npm start

# Após isso, a aplicação já estará funcionando.

### Exemplos de CNJ válidos:
- 1008126-92.2015.8.26.0132
- 2428331-12.2016.6.23.1102
- 3387126-32.2011.2.12.2313

#### Botão home está funcionando. Ele retorna a página inicial e limpa o input.

## Para realizar testes

### Na pasta front-end, digite:
- npm run test

### Na pasta back-end, digite:
- npm run test
