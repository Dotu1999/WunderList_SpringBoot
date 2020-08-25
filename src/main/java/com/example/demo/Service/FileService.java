package com.example.demo.Service;

import com.example.demo.Repository.FileRepository;
import com.example.demo.domain.File;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.domain.Task;

import java.util.List;

@Service
public class FileService {
    @Autowired
    private FileRepository fileRepository;
    public File createFile(File task)
    {
        return fileRepository.save(task);
    }
    public void deleteFile(long id){
        fileRepository.deleteById(id);
    }
    public List<File> findFileByIdTask(long id)
    {
        return fileRepository.findFileTaskId(id);
    }
}
