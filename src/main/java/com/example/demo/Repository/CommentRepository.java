package com.example.demo.Repository;

import com.example.demo.domain.Comment;
import com.example.demo.domain.Task;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends CrudRepository<Comment,Long> {
    @Query(value = "select c from Comment c where c.task.id =?1")
    List<Comment> findCommentByTaskId(long id);
}
