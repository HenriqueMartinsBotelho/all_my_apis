import { Controller, Get, Header, HttpCode, Redirect, Req, Query, Param, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { CreateCatDto } from './app.dto';


//@Controller({ host: 'admin.example.com' }) é possível exigir que as rotas tenham um host específico
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("/hello")
  @HttpCode(200)
  @Header('Cache-Control', 'no-cache') // é utilizado para garantir que os usuários recebam a versão mais atual de um recurso, sem proibir o armazenamento desse recurso em caches.
  getHello(@Req() request: Request): string {

    console.log(`Request methods: ${request.method}`)

    return this.appService.getHello();
  }


  // Demonstração de uso do @Param()
  // Uma sintaxe diferente é assim: findOne(@Param('id') id: string):
  @Get("/gato/:id")
  findOneCat(@Param() params: any): string {
    console.log(params.id);
    return `This action return a #${params.id} cat`
  }


  // Exemplo de uso do Redirect
  // Se a query for 5 por exemplo localhost:3000/docs?version=5
  // É redirecionado pra https://docs.nestjs.com/v5/'
  @Get("/docs")
  @Redirect('https://nestjs.com', 301)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }


  @Post("/gato")
  async create(@Body() createDatDto: CreateCatDto) {
    return 'This action adds a new cat'
  }

  // Todo amanhã fazer o dto provar erro ao passar Body inválido
  // criar o módulo chamado cat. Verificar comando para gerar os arquivos e coloca-lo no Readme.md













}
