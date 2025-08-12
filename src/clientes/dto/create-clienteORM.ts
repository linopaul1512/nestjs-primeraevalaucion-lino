import { IsBoolean, IsNotEmpty, IsEmail, IsNumber, IsString, Min } from "class-validator";

export class CreateClienteDto{
    
    @IsNotEmpty()  
    @IsString()
    nombre: string;
    
    @IsNotEmpty()  
    @IsEmail()
    email: string;
    
 
}
