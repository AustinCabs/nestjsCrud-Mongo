import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Todo, TodoSchema } from './schemas/todo.schema';
import { TodoService } from './todo.service';

@Module({
    imports:[
    MongooseModule.forFeature([{
        name: Todo.name,
        schema: TodoSchema
    }])
    ],
    providers: [TodoService]
})

export class TodoModule {}
