Front-end test
==============

Aplicação desenvolvida através da API Roulette do Netflix.

### Dependências

- Bower (caso não tenha instalado, utilize o [tutorial](http://bower.io/#install-bower))
- Grunt (caso não tenha instalado, utilize o [tutorial](http://gruntjs.com/installing-grunt))

### Bower

Através do Bower vamos instalar as libs que o projeto necessita para rodar (Ex: AngularJS).

Para executar, utilize o seguinte comando:
```
bower install
```
### Grunt

Através do Grunt, podemos inicializar um servidor na porta 9000, além de algumas configurações na etapa de desenvolvimento.

Para instalar as dependências do Grunt, utilize o comando:
```
npm install
```
Após instalar todas as libs, você pode iniciar o servidor para realizar o projeto.

#### Servidor

Para iniciar o servidor, utilize o seguinte comando:

```
grunt
```

O servidor irá iniciar na porta 9000.

####

A Aplicação foi construída através da API Roulette do Netflix, através de uma requisição Ajax, utilizando o Angular, foi criado um serviço que fornece os dados pesquisados pelo usuário e envia para a API, que por sua vez retorna os resultados através consultados pelo serviço.

O usuário tem a opção de filtrar por tipo de dados, avaliação dos usuários, nome do Ator ou Diretor.

