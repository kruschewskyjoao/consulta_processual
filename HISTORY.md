# Testes

No back-end realizei testes de integração:
Casos positivos e negativos:
 - Error status 404 : Caso a pessoa passe um cnj inválido (não existente no banco de dados).
 - Ok status 200 : Caso a pessoa passe um cnj válido.

No front-end fiz os seguintes testes
- Se existe input na tela.
- Se o botão está na tela.
- Se existe um select.
- Se o botão ao inserir um cnj inválido aparece mensagem de erro na tela.
- Caso cnj for válido, vai redirecionar página.

# Ideias que eu implementaria
- Faria login para pessoas cadastradas no sistema.
- Caso não tivesse login, opção de criar conta.
- Ao entrar com login, já teria na tela inicial todos os processos da pessoa.
- Feito login, opção de filtrar (filtrar por data, por nomes, etc).
- Botão de realizar outra consulta (Já ná pagína de resultado).
- Varia uma validação com o número de cnj (ex: os primeiros números ao digitar já daria errado ou não).
- Colocaria uma opção de mandar para email a cada atualização nova.
- Conteúdo na página inicial e mais na tela de resultado.
- Caso você não seja advogado, também pode criar conta para salvar todos seus procesos e acompanhar melhor.(infos básicas)

# Algumas decições
## Ferramentas
- Express + express async errors
- Sequelize
- Chai e Sinon
- Docker
- React
- Context Api e Hooks
- Axios
- InputMask
- Tailwind

# Dificuldades

- Testar InputMask, não consegui testar o input utilizando essa biblioteca userEvent não esta funcionando.
- Testar o axios, tive dificuldade para realizar os testes do mesmo.
- Bootstrap, optei pelo tailwind por causa da documentação mais completa.

# Para saber como instalar seu projeto veja o README.md na raiz.
