package com.example.demo.Rest_API;

import com.example.demo.DTO.FileDTO;
import com.example.demo.Service.FileService;
import com.example.demo.Service.TaskService;
import com.example.demo.domain.File;
import com.example.demo.domain.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class FileRestAPI {
    @Autowired
    private FileService fileService;
    @Autowired
    private TaskService taskService;
    @PostMapping(value = "/addFile/{idtask}")
    public File addFile(@Validated FileDTO fileDTO , @PathVariable long idtask)
    {
        Optional<Task> task = taskService.findTaskById(idtask);
        Task task1 =task.get();
        File file =new File();
        file.setName(fileDTO.getName());
        file.setTask(task1);
        return fileService.createFile(file);
    }
    @DeleteMapping(value = "/DeleteFile/{id}")
    public void deleteFile(@PathVariable long id)
    {
        fileService.deleteFile(id);
    }
    @GetMapping(value = "/getFile/{idtask}")
    public List<File> getFile(@PathVariable long idtask)
    {
        return fileService.findFileByIdTask(idtask);
    }
}
