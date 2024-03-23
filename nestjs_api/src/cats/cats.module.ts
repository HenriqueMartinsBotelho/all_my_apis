import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';

// é possível usar o @Global para tornar um módulo global mas no geral não é boa prática
@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule { }

/*

   export class CatsModule {
    constructor(private catsService: CatsService) {}
  }

  A escolha entre usar um construtor para injetar dependências ou deixar a classe sem um construtor depende das necessidades específicas do seu módulo. Se você precisar de acesso direto a um serviço dentro do módulo para configuração inicial ou outros propósitos, você deve injetar esse serviço. Se você não precisar de tal acesso, pode omitir o construtor para manter o módulo mais simples.

*/
