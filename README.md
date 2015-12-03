# ESJ - Engenharia de Software Já!

Jogo do Grupo **A Resistência**, que utiliza a ideia do jogo 94% para ensinar/testar conceitos de engenharia de software.

Matéria de Engenharia de Software - UFMG - 2015/02

* Página do jogo: http://aresistencia.cpdee.ufmg.br/jogo/
* Gerenciamento de tarefas:
  * Iteração #1: https://trello.com/b/DPg3csur/iteracao-1-15-out-a-03-nov
  * Iteração #2: https://trello.com/b/9Y8iLVkF/iteracao-2-04-nov-a-19-nov


## Como instalar e configurar

### Dependências

Para que o jogo seja executado em ambiente Linux, é necessário que o programa **sqlite3** esteja instalado, bem como o [**nodejs**](https://nodejs.org/).

### Instalando dependência do Nodejs

É necessário instalar pacotes do Nodejs para que o jogo seja executado devidamente. Isso pode ser feito executando os seguintes comandos no terminal, no diretório raiz do programa:

```
$ npm install
```


### Configurando o banco de dados

Antes de iniciar o jogo, é necessário popular o banco de dados. Isso pode ser feito executando:

```
$ sqlite3 jogo.db < schema.sql
$ sqlite3 jogo.db < insere_dados.sql
$ sqlite3 jogo.db < usuarios_teste.sql
```

## Como executar

Para executar o jogo, é necessário rodar o servidor do jogo em sua própria máquina. Isso é feito executando:

```
$ node server.js
```

Desse modo, um servidor web é criado em localhost na porta 3000. O jogo, então, pode ser acessado em qualquer navegador, acessando [localhost:3000](http://localhost:3000)

## Jogando

Para jogar é necessário fazer login no sistema. Isso pode ser feito fazendo-se um novo registro, ou utilizando os usuários já cadastrados (**admin**, **jlennon**, **pmacca**, **harrison** ou **ringo**, qualquer um deles utilizando a senha **12345**)
