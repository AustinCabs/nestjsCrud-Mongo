import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Todo } from './schemas/todo.schema';

@Injectable()
export class TodoService {
    constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) { }

    async create(todo: any) {
        const createdTodo = new this.todoModel(todo)
        return createdTodo.save()
    }
}
