import { IsString, MinLength } from "class-validator";

export class CreateIsrDto {
    @IsString()
    @MinLength(1)
    name: string;    
}
