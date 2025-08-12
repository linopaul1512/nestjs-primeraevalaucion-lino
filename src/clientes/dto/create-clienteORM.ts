import { IsBoolean, IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

export class CreateClienteDto{
    
    @IsNotEmpty()  
    @IsString()
    nombre: string;
    
    @IsNotEmpty()  
    @IsString()
    email: string;
    
 
}
