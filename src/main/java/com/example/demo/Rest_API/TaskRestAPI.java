package com.example.demo.Rest_API;

import com.example.demo.DTO.TaskDTO;
import com.example.demo.Service.ListService;
import com.example.demo.Service.TaskService;
import com.example.demo.domain.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class TaskRestAPI {
    @Autowired
    private TaskService taskService;
    @Autowired
    private ListService listService;
    @GetMapping(value = "/showTask/{idlist}")
    public List<Task> showTask(@PathVariable long idlist)
    {
        return taskService.findTaskByIdList(idlist);
    }
    @PostMapping(value = "/createTask/{idlist}")
    public Task createTask(@Validated TaskDTO taskDTO,@PathVariable long idlist)
    {
        Optional<com.example.demo.domain.List> list = listService.findById(idlist);
        Task task = new Task();
        task.setName(taskDTO.getName());
        task.setStar(taskDTO.getStar());
        task.setStatus(taskDTO.getStatus());
        task.setList(list.get());
        return taskService.createTask(task);
    }
    @DeleteMapping(value = "/deleteTask/{idtask}")
    public void deleteTask(@PathVariable long idtask)
    {
        taskService.delete(idtask);
    }
    @PutMapping(value = "/updateTask/{idtask}/{status}")
    public Task updateTask(@PathVariable long idtask ,@PathVariable int status)
    {
        Optional<Task> task = taskService.findTaskById(idtask);
        Task task1 = task.get();
        task1.setStatus(status);
        return taskService.saveTask(task1);
    }
    @PutMapping(value = "/updateStar/{idtask}")
    public Task updateStar(@PathVariable long idtask)
    {
        Optional<Task> task = taskService.findTaskById(idtask);
        Task task1 = task.get();
        int star = task1.getStar();
        if(star == 1) {
            task1.setStar(0);
        }
        else {task1.setStar(1);}
        return taskService.saveTask(task1);
    }
    @PutMapping(value = "/updateNote/{idtask}")
    public Task updateNote(@Validated TaskDTO taskDTO,@PathVariable long idtask)
    {
        Optional<Task> task = taskService.findTaskById(idtask);
        Task task1 = task.get();
        task1.setNote(taskDTO.getNote());
        return taskService.saveTask(task1);
    }
    @PutMapping(value = "/updateName/{idtask}")
    public Task updateName(@Validated TaskDTO taskDTO,@PathVariable long idtask)
    {
        Optional<Task> task = taskService.findTaskById(idtask);
        Task task1 = task.get();
        task1.setName(taskDTO.getName());
        return taskService.saveTask(task1);
    }
    @PutMapping(value = "/updateCreate_day/{idtask}")
    public Task updateCreateDay(@Validated TaskDTO taskDTO,@PathVariable long idtask)
    {
        Optional<Task> task = taskService.findTaskById(idtask);
        Task task1 = task.get();
        task1.setCreate_day(taskDTO.getCreate_day());
        return taskService.saveTask(task1);
    }
    @PutMapping(value = "/updateRemind/{idtask}")
    public Task updateRemind(@Validated TaskDTO taskDTO,@PathVariable long idtask)
    {
        Optional<Task> task = taskService.findTaskById(idtask);
        Task task1 = task.get();
        task1.setRemind(taskDTO.getRemind());
        return taskService.saveTask(task1);
    }
    @GetMapping(value = "/getTask/{id}")
    public Task getTaskById(@PathVariable long id)
    {
        return taskService.findTaskById(id).get();
    }
    @GetMapping(value = "/Search/{name}")
    public List<Task> search(@PathVariable String name)
    {
        return taskService.SearchTask(name);
    }
}
