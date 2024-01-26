import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Statuses } from "../schemas/todo.schema"

export class CreateTodoDto {
    @IsNotEmpty()
    @IsString()
    title: string
    
    @IsNotEmpty()
    @IsString()
    description: string

    @IsEnum(Statuses)
    @IsOptional()
    status?: Statuses
}

// will not be using this, cause i want update to be required like CREATE DTO
export class UpdateTodoDto {
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    title?: string
    
    @IsString()
    @IsOptional()
    description?: string

    @IsEnum(Statuses)
    @IsOptional()
    status?: Statuses
}