package com.example.demo.Service;

import com.example.demo.Repository.SubTaskRepository;
import com.example.demo.domain.SubTask;
import com.example.demo.domain.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SubTaskService {
    @Autowired
    private SubTaskRepository subTaskRepository;
    public SubTask createSubTask(SubTask subTask)
    {
        return subTaskRepository.save(subTask);
    }
    public void delete(long id)
    {
        subTaskRepository.deleteById(id);
    }
    public List<SubTask> showSubTask(Long idtask)
    {
        return subTaskRepository.findSubTaskByTaskId(idtask);
    }
    public SubTask saveSubTask(SubTask subTask)
    {
        return subTaskRepository.save(subTask);
    }
    public Optional<SubTask> findSubTaskById(long id)
    {
        return subTaskRepository.findById(id);
    }

}
