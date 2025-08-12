import { IsString, IsNumber } from 'class-validator';

export class CreateClienteDto{
 @IsString() 
 nombre: string

 @IsString() 
 email: string
}