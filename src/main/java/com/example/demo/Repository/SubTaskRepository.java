package com.example.demo.Repository;

import com.example.demo.domain.SubTask;
import com.example.demo.domain.Task;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SubTaskRepository extends CrudRepository<SubTask,Long> {
    @Query(value = "select s from SubTask s where s.task.id =?1")
    List<SubTask> findSubTaskByTaskId(long id);
}
