package com.example.demo.Repository;

import com.example.demo.domain.Task;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends CrudRepository<Task,Long> {
    @Query(value = "select t from Task t where t.list.id =?1")
    List<Task> findTaskByListId(long id);
    @Query(value = "select t from Task t where t.name like %?1%")
    List<Task> Search(String name);
}
