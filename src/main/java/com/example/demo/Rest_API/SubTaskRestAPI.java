package com.example.demo.Rest_API;

import com.example.demo.DTO.SubTaskDTO;
import com.example.demo.DTO.TaskDTO;
import com.example.demo.Service.SubTaskService;
import com.example.demo.Service.TaskService;
import com.example.demo.domain.SubTask;
import com.example.demo.domain.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class SubTaskRestAPI {
    @Autowired
    SubTaskService subTaskService;
    @Autowired
    TaskService taskService;
    @PostMapping(value = "/createSubTask/{idtask}")
    public SubTask createSubTask(@Validated SubTaskDTO subTaskDTO, @PathVariable long idtask)
    {
        Optional<Task> task = taskService.findTaskById(idtask);
        SubTask subTask = new SubTask();
        subTask.setName(subTaskDTO.getName());
        subTask.setStatus(subTaskDTO.getStatus());
        subTask.setTask(task.get());
        return subTaskService.createSubTask(subTask);
    }
    @DeleteMapping(value = "/deleteSubTask/{id}")
    public void deleteSubTask(@PathVariable long id)
    {
        subTaskService.delete(id);
    }
    @GetMapping(value = "/showSubTask/{idtask}")
    public List<SubTask> showSubTask(@PathVariable long idtask)
    {

        return subTaskService.showSubTask(idtask);
    }
    @PutMapping(value = "/updateSubTask/{idsubtask}/{status}")
    public SubTask updateTask(@PathVariable long idsubtask ,@PathVariable int status)
    {
        Optional<SubTask> subTask = subTaskService.findSubTaskById(idsubtask);
        SubTask subTask1 = subTask.get();
        subTask1.setStatus(status);
        return subTaskService.saveSubTask(subTask1);
    }
}
