package com.example.demo.Repository;

import com.example.demo.domain.File;
import com.example.demo.domain.Task;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FileRepository  extends CrudRepository<File,Long> {
    @Query(value = "select f from File f where f.task.id =?1")
    List<File> findFileTaskId(long id);
}
