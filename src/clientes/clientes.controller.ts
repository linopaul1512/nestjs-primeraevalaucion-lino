import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ClientesService } from "./clientes.service";
import { CreateClienteDto } from "./dto/create-cliente.dto";
import { UpdateClienteDto } from "./dto/update-clienteORM.dto";

@Controller('clientes')
export class ClientesController {
    constructor(private readonly service: ClientesService) {}
    
    @Get() findAll() { 
    return this.service.findAll(); 
    }
    
    @Get(':id') findOne(@Param('id') id: string) { 
    return this.service.findOne(+id); 
    }

    @Post('create') create(@Body() dto: CreateClienteDto) { 
    return this.service.create(dto); 
    }
    
    @Put(':id') update(@Param('id') id: string, @Body() dto: UpdateClienteDto) {
    return this.service.update(+id, dto);
    }
    
    @Delete(':id') remove(@Param('id') id: string) { 
    return this.service.remove(+id); 
    }
}