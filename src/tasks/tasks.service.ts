import { Injectable } from '@nestjs/common';
import {Task, TaskStatus} from './tasks.model'
import {v1 as uuidv1} from 'uuid';
import { CreateTaskDto } from './dto/create-tasks.dto';
import { KeyObject } from 'crypto';
@Injectable()
export class TasksService {
    private _tasks : Task[] = [];

    getAllTaksks() {
        return this._tasks;
    }

    getTaskById(id:string):Task{
        return this._tasks.find(task => task.id === id);
    }

    createTask(
        createTaskDto: CreateTaskDto) : Task {
            const {title,description} = createTaskDto;
            const task: Task = {
                id: uuidv1(),
                title,
                description,
                status: TaskStatus.OPEN,
            }
            this._tasks.push(task);
            return task;
    }

    deleteTaskById(id:string):Task[]{
        return this._tasks.splice(this._tasks.findIndex(task => task.id === id),1);
    }

    editTaskById(id:string,propertyKey:string,propertyValue:any):Task{
        //Do not Inline or you will exceed stack limit.
        var task : Task;
        /* WIP
        task = this._tasks.find(task => task.id === id);
        if((propertyKey in Object.keys(task)) && propertyKey != 'id')
            task[propertyKey]=propertyValue;
            */
        return task;
    }
}