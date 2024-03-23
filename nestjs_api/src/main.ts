import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Esse código é para validação global das rotas. É possível passar validações locais
  // dentro do Decorator Body colocando o ValidationPipe lá.
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Remove as propriedades que não são esperadas nos DTOs
    forbidNonWhitelisted: true, // Retorna erro se forem recebidas propriedades não esperadas
    transform: true, // Transforma o payload para o tipo correspondente do DTO, se possível
    disableErrorMessages: false, // Você pode desabilitar as mensagens de erro em produção, se desejar
  }));
  await app.listen(3000);
}
bootstrap();
