package com.example.demo.Service;

import com.example.demo.Repository.ListRepository;
import com.example.demo.Repository.TaskRepository;
import com.example.demo.domain.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;
    public List<Task> findTaskByIdList(long id)
    {
        return taskRepository.findTaskByListId(id);
    }
    public Task createTask(Task task)
    {
        return taskRepository.save(task);
    }
    public void delete(long id)
    {
        taskRepository.deleteById(id);
    }
    public Optional<Task> findTaskById(long id)
    {
        return taskRepository.findById(id);
    }
    public Task saveTask(Task task)
    {
        return taskRepository.save(task);
    }
    public List<Task> SearchTask(String name)
    {
        return taskRepository.Search(name);
    }
}
