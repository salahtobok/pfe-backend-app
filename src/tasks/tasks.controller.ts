import { Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import { Patch } from '@nestjs/common/decorators';
import { CreateTaskDto } from './dto/create-tasks.dto';
import { Task } from './tasks.model'
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService){}
    @Get()
    getAllTasks(): Task[] {
        return this.tasksService.getAllTaksks();
    }

    @Get('/:id')
    getTaskById(@Param('id') id:string):Task{
        return this.tasksService.getTaskById(id);
    }

    @Post()
    createTask(
        @Body() createTaskDto:CreateTaskDto) : Task {
        
            return this.tasksService.createTask(createTaskDto);
    }

    @Delete('/:id')
    deleteTaskById(@Param('id') id:string):Task[]{
        return this.tasksService.deleteTaskById(id);
    }

    @Patch('/:id/:key=:value')
    editTaskById(
        @Param('id') id:string,
        @Param('key') key:string,
        @Param('value') value:string){
            return this.editTaskById(id,key,value);
    }

}
