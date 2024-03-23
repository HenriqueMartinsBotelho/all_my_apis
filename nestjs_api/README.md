# Um CRUD em NEST.js

## Visão Geral

No NestJS, os provedores (serviços, repositórios, fábricas, etc.) são, por padrão, instanciados como Singletons dentro do contexto do módulo em que são declarados. Isso significa que, uma vez instanciado, o mesmo objeto provedor será reutilizado em todas as partes do aplicativo que o injetam como dependência, garantindo que o estado e os recursos sejam compartilhados de forma eficiente.

No entanto, o NestJS também oferece flexibilidade para configurar o escopo de provedores de forma diferente, se necessário. Além do escopo Singleton padrão, é possível definir provedores com escopo de Request ou Transient:

Escopo de Request: Um novo provedor é instanciado para cada ciclo de requisição. Isso é útil para quando você precisa de uma instância de serviço que é específica para uma requisição e seu estado não deve ser compartilhado com outras requisições.
Escopo Transient: Um novo provedor é instanciado toda vez que é injetado, proporcionando uma nova instância para cada uso.


## CLI

Na linha de comando para gerar uma nova pastar com controllers, services, etc podemos digitar **nest g resorce <nome_do_resource>**


## Controllers

O objetivo de um controlador é receber solicitações específicas para o aplicativo. O mecanismo de roteamento controla qual controlador recebe quais solicitações. Frequentemente, cada controlador tem mais de uma rota e diferentes rotas podem executar ações diferentes.

Para criar um controlador básico, usamos classes e decoradores. Os decoradores associam classes com metadados necessários e permitem que a Nest crie um mapa de roteamento (requisição de gravata para os controladores correspondentes).


## Providers

A ideia principal de um provider é que ele possa ser injetado como uma dependência;
isso significa que os objetos podem criar vários relacionamentos entre si, e a função de "conectar"
esses objetos pode ser amplamente delegada ao sistema de tempo de execução Nest.

Os controladores devem lidar com solicitações HTTP e delegar tarefas mais complexas aos provider. Providers são classes JavaScript simples declaradas como providers em um módulo.

Por padrão, o NestJS trata cada serviço (ou provider) como um singleton, o que significa que uma instância de uma classe é compartilhada em toda a aplicação. Isso ajuda a reduzir o uso de recursos e a garantir uma consistência de estado em todo o app.

Escopo Personalizável: Embora os singletons sejam o padrão, o NestJS permite que os desenvolvedores configurem o escopo dos seus providers. Isso inclui escopos como "transiente" (uma nova instância é criada toda vez que uma dependência é solicitada) e "request" (uma nova instância é criada para cada solicitação).

## Modules

O texto descreve a estrutura fundamental e o funcionamento dos módulos em uma aplicação utilizando NestJS. Todo aplicativo possui pelo menos um módulo, conhecido como módulo raiz, que serve como ponto de partida para o Nest construir o gráfico da aplicação. Esse gráfico é uma estrutura de dados interna utilizada pelo Nest para resolver relações e dependências entre módulos e provedores. Embora aplicativos muito pequenos possam ter apenas o módulo raiz, isso não é comum. É enfatizado que o uso de múltiplos módulos é recomendado como uma forma eficaz de organizar os componentes da aplicação, com cada módulo encapsulando um conjunto de capacidades estreitamente relacionadas.

O decorador `@Module()` recebe um objeto único cujas propriedades descrevem o módulo, incluindo:
- `providers`: os provedores que serão instanciados pelo injetor do Nest e que podem ser compartilhados pelo menos neste módulo.
- `controllers`: o conjunto de controladores definidos neste módulo que precisam ser instanciados.
- `imports`: a lista de módulos importados que exportam os provedores necessários neste módulo.
- `exports`: o subconjunto de provedores fornecidos por este módulo que devem estar disponíveis em outros módulos que importam este módulo, utilizando-se do próprio provedor ou apenas de seu token (valor de fornecimento).

Exemplo: Em uma aplicação de gerenciamento de tarefas, você pode ter um módulo raiz e módulos adicionais, como um módulo de `Tarefas` para lidar com a criação e gestão de tarefas e um módulo de `Usuários` para gerenciar os usuários e suas autenticações. Cada um desses módulos encapsularia funcionalidades específicas e poderia compartilhar provedores ou ser importado por outros módulos conforme necessário para a aplicação funcionar de forma integrada.

@Module({
  imports: [TasksModule],
  controllers: [AppController],
  providers: [AppService],
})


## Middleware
Middleware é uma função chamada antes do manipulador de rota. As funções de middleware têm acesso aos objetos de solicitação e resposta e à função de middleware next() no ciclo de solicitação-resposta do aplicativo. A próxima função de middleware é comumente indicada por uma variável chamada next.


