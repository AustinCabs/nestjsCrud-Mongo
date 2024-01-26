import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Todo } from './schemas/todo.schema';
import { CreateTodoDto } from './dtos/todo.dto';

@Injectable()
export class TodoService {
    constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) {
    }

    async create(todo: CreateTodoDto) {
        const createdTodo = new this.todoModel(todo)
        return createdTodo.save()
    }

    async update(id: string, todo: CreateTodoDto) {
        return this.todoModel.findByIdAndUpdate(id, todo, {
            new: true
        }).exec()
    }

    async delete(id: string) {
        return this.todoModel.findByIdAndDelete(id).exec()
    }

    async findById(id: string) {
        return this.todoModel.findById(id).exec()
    }

    async findAll() {
        return this.todoModel.find().exec()
    }
}
