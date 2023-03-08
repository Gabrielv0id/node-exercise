# Boas vindas ao repositório do exercício Node Express!

Para realizar os exercícios, atente-se a cada passo descrito a seguir, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento dos seus exercícios a partir deste repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

# Termos e acordos

Ao iniciar este exercício, você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.

# Entregáveis

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

  Para entregar os seus exercícios você deverá criar um *Pull Request* neste repositório.

  Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/fc998c60-386e-46bc-83ca-4269beb17e17/section/fe827a71-3222-4b4d-a66f-ed98e09961af/day/35e03d5e-6341-4a8c-84d1-b4308b2887ef/lesson/573db55d-f451-455d-bdb5-66545668f436) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!
</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

  Para este exercício, você vai criar uma _API_ de filmes utilizando _Node & Express_.
  Você irá desenvolver um servidor express onde seja possível acessar a todos os endpoints da aplicação **(CRUD)**.

  Você irá criar alguns _endpoints_ que irão ler e escrever em um banco de dados, este banco de dados será um arquivo _JSON_.

  ---

  ⚠️ **Dicas Importantes** ⚠️:

  - Não haverá front-end neste exercício, portanto não se preocupe com a visualização, apenas com as funcionalidades;
  
</details>

# Orientações específicas deste exercício

<details>
  <summary><strong>🪑 Organização de arquivos<strong></summary><br />

  - Sua aplicação deve ser executada na porta `3001`;<br/>
  - Sua API deve ser desenvolvida dentro da pasta `./src`;<br/>
  - Separe as configurações da sua aplicação em `src/app.js` e `src/server.js`, o app será utilizado pelo teste.<br/>
</details>

# Orientações que você ja conhece :wink:

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

  1. Clone o repositório

  - `git clone git@github.com:tryber/sd-026-b-exercise-welcome-node.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd sd-026-b-exercise-welcome-node`

  2. Instale as dependências [**Caso existam**]

  - `npm install`

  3. Crie uma branch a partir da branch `main`

  - Verifique se você está na branch `main`
    - Exemplo: `git branch`
  - Se você não estiver, mude para a branch `main`
    - Exemplo: `git checkout main`
  - Agora crie uma branch à qual você vai submeter os `commits` do seu exercício
    - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-exercicio`
    - Exemplo: `git checkout -b joaozinho-sd-026-b-exercise-welcome-node`

  4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

  - Verifique que as mudanças ainda não estão no _stage_
    - Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
  - Adicione o novo arquivo ao _stage_ do Git
      - Exemplo:
        - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        - `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
  - Faça o `commit` inicial
      - Exemplo:
        - `git commit -m 'iniciando o exercício x'` (fazendo o primeiro commit)
        - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

  5. Adicione a sua branch com o novo `commit` ao repositório remoto

  - Usando o exemplo anterior: `git push -u origin joaozinho-sd-026-b-exercise-welcome-node`

  6. Crie um novo `Pull Request` _(PR)_

  - Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-026-b-exercise-welcome-node/pulls)
  - Clique no botão verde _"New pull request"_
  - Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  - Clique no botão verde _"Create pull request"_
  - Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  - **Não se preocupe em preencher mais nada por enquanto!**
  - Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-026-b-exercise-welcome-node/pulls) e confira que o seu _Pull Request_ está criado

</details>
<details>
   <summary><strong>🎛 Linter</strong></summary><br />

  Usaremos o [ESLint](https://eslint.org/) para fazer a análise estática do seu código.

  Este exercício já vem com as dependências relacionadas ao _linter_ configuradas nos arquivos `package.json`.

  Para poder rodar o `ESLint` em um exercício basta executar o comando `npm install` dentro do exercício e depois `npm run lint`. Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

  Você pode também instalar o plugin do `ESLint` no `VSCode`. Para isso, basta fazer o download do [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) e instalá-lo.

  ⚠️ Pull requests com issues de linter não serão avaliadas. Atente-se para resolvê-las antes de finalizar o desenvolvimento! ⚠️

  </details>
  <details>
  <summary><strong>⌨️ Durante o desenvolvimento</strong></summary><br />

  - Faça `commits` das alterações que você fizer no código regularmente


  - Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto


  - Os comandos que você utilizará com mais frequência são:
    1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
    2. `git add` _(para adicionar arquivos ao stage do Git)_
    3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
    4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
    5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

</details>
<details>
<summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary><br />

Para sinalizar que o seu exercício está pronto para o _"Code Review"_ dos seus colegas, faça o seguinte:

- Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

  - No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

  - No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

  - No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-0x`.

Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

</details>

<details>
  <summary><strong>🕵🏿 Revisando um pull request</strong></summary><br />

  Use o conteúdo sobre [Code Review](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd/section/b3af2f05-08e5-4b4a-9667-6f5f729c351d/lesson/36268865-fc46-40c7-92bf-cbded9af9006) para te ajudar a revisar os _Pull Requests_.

</details>

<details>
  <summary><strong>🍪 Informações sobre a API </strong></summary><br />

  **⚠️ Leia as informações abaixo atentamente e siga à risca o que for pedido. ⚠️**

  **👀 Observações importantes:**

  - O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação;

  - O exercício deve rodar na porta **3001**;

  - O arquivo `app.js` deve existir para rodar corretamente os testes.

</details>

<details>
  <summary><strong>🛠 Testes</strong></summary><br />

  Usaremos o [Jest](https://jestjs.io/pt-BR/) e o [Frisby](https://docs.frisbyjs.com/) para fazer os testes de API.

  Este projeto já vem configurado e com suas dependências

  ### Executando todos os testes

  Para poder executar os testes, inicie sua aplicação com `npm run dev`, em seguida, basta executar o comando `npm test` e **todos** os seus testes serão executados.

  ### Executando um teste específico

  Para executar um teste expecífico, inicie sua aplicação com `npm run dev`, em seguida, basta executar o comando `npm test nome-do-teste`.

  > Colocamos o número do requisito como pré-fixo para facilitar, veja abaixo. 

  Ex: Para executar o teste referente ao **01-createExpressServer**, basta digitar `npm test 01`.
</details>

<details>
  <summary><strong>🗂 Compartilhe seu portfólio!</strong></summary><br />

  Você sabia que o LinkedIn é a principal rede social profissional e compartilhar o seu aprendizado lá é muito importante para quem deseja construir uma carreira de sucesso? Compartilhe esse projeto no seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre para a sua rede toda a sua evolução.

</details>


# Exercícios
## 1 - Crie um servidor Node.js utilizando o framework Express.

- Será validado que o servidor está em execução na porta 3001.

---

## 2 - Crie uma função de leitura de JSON utilizando o modulo fs.

- A função deverá ler um arquivo JSON e retornar seu conteúdo.

<details close>
  <summary>Além disso, as seguintes verificações serão feitas:</summary>

  <br>

  > 👉 A função deve ser implementada no arquivo `src/utils/readJsonData`.
   - **[Será validado que é possivel utilizar a função readJsonData]**
   
</details>

---

## 3 - Crie um endpoint para a listagem de um filme pelo seu id

- O endpoint deve ser acessível através do caminho (`/movies/:id`);

<details close>
  <summary>Além disso, as seguintes verificações serão feitas:</summary>

  <br>

  > 👉 Para caso os dados enviados sejam inválidos
   - **[Será validado que não é possível listar um filme inexistente]**
    - O resultado retornado para listar um filme inexistente deve seguir a seguinte estrutura _status http_ `404`: e

      ```json
      {
        "message": "Filme não encontrado"
      }
      ```

  - **[Será validado que é possível listar um filme]**
    - O resultado retornado para listar um filme deve seguir a seguinte estrutura _status http_ `200`: e
      ```json
      {
        "id": 1,
        "movie": "Avatar",
        "price": 5
      }
      ```
</details>

---

## 4 - Crie um endpoint que possa listar todos os filmes do JSON.

- O endpoint deve ser acessível através do caminho (`/movies`).

<details close>
 <summary>Além disso, as seguintes verificações serão feitas:</summary>

  <br>

  > 👉 Para caso haja problemas no login.
  - **[Será validado todos os filmes serão retornados]**
    - O resultado retornado deverá ser um _status http_ `200` e
    ```json
      [
        {
          "id": 1,
          "movie": "Avatar",
          "price": 5
        },
        {
          "id": 2,
          "movie": "Gente Grande",
          "price": 2
        },
        //...
      ]
    ```
</details>

---

## 5 - Crie um endpoint para cadastrar um filme

- O endpoint deve ser acessível através do caminho **POST** (`/movies`);

<details close>
  <summary>Além disso, as seguintes verificações serão feitas:</summary>

  <br>

  - O corpo da requisição deve seguir o seguinte formato:

    ```json
      {
        "movie": "Vingadores",
        "price": 5
      }
    ```
  
  - O resultado retornado ao cadastrar um novo filme deverá ser um _status http_ `201` com o corpo da resposta sendo os dados do filme que foi cadastrado.
    
    ```json
    {
      "id": 999 /* o id criado no arquivo JSON */,
      "movie": "Vingadores",
      "price": 5
    }
    ```
</details>

---

## 6 - Crie um endpoint para a atualização de um filme

- O endpoint deve ser acessível através do caminho (`/movies/:id`);

<details close>
  <summary>Além disso, as seguintes verificações serão feitas:</summary>

  <br>

  - O corpo da requisição deve seguir o seguinte formato:

    ```json
    {
      "movie": "Harry Potter",
      "price": 10
    }
    ```
  - O resultado retornado ao atualizar um filme deverá ser um _status http_ `200` com o corpo da resposta sendo os dados do novo filme.
    
    ```json
    {
      "id": 123,
      "movie": "Harry Potter",
      "price": 10
    }
    ```


</details>

---

## 7 - Crie um endpoint para a exclusão de um filme

- O endpoint deve ser acessível através do caminho (`/movies/:id`);

<details close>
  <summary>Além disso, as seguintes verificações serão feitas:</summary>

  <br>

  - **[Será validado que o filme foi removido do JSON]**
    - O resultado retornado ao remover um filme deverá ser conforme exibido abaixo, com um _status http_ `200`:
     ```json
    {
      "message": "Filme deletado com sucesso"
    }
    ```

</details>

---
