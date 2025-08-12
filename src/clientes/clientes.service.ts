import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-clienteORM.dto';

@Injectable()
export class ClientesService {

    constructor(@InjectRepository(Cliente) private repo: Repository<Cliente>) {}

    findAll() { 
        return this.repo.find(); 
    }

    findOne(id: number) { 
        return this.repo.findOneBy({ id }); 
    }

    create(dto: CreateClienteDto) { 
        return this.repo.save(dto); 
    }

    async update(id: number, dto: UpdateClienteDto) {

        const cliente = await this.repo.findOneBy({ id });

        if (!cliente) {
            throw new NotFoundException('Cliente no encontrado');
        }

        // Aplica los cambios del DTO al cliente existente
        Object.assign(cliente, dto);

        // Guarda el cliente actualizado
        return await this.repo.save(cliente);
}

    async remove(id: number) { 
        const cliente = await this.repo.findOneBy({ id });
        if(!cliente) throw new NotFoundException('Cliente no encontrado');
        await cliente.delete({id}); 
}

}
