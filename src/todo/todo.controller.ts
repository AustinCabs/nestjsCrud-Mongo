import { Body, Controller, Post, ValidationPipe, Put, Delete, Param, Get } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dtos/todo.dto';

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService) { }

    @Post()
    async create(@Body(new ValidationPipe) createTodo: CreateTodoDto) {
        return this.todoService.create(createTodo)
    }

    @Put(':id')
    async update(@Param() id: string, @Body(new ValidationPipe) updateTodo: CreateTodoDto
    ) {
        return this.todoService.update(id, updateTodo)
    }

    @Delete(':id')
    async delete(@Param() id: string) {
        return this.delete(id)
    }

    @Get(':id')
    async findById(@Param() id: string) {
        return this.findById(id)
    }
    
    @Get()
    async findAll() {
        return this.findAll()
    }
}
