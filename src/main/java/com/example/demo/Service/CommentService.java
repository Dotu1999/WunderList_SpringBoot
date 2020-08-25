package com.example.demo.Service;

import com.example.demo.Repository.CommentRepository;
import com.example.demo.domain.Comment;
import com.example.demo.domain.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {
    @Autowired
    private CommentRepository commentRepository;
    public List<Comment> findCommentByTaskId(long id)

    {
        return commentRepository.findCommentByTaskId(id);
    }
    public Comment createTask(Comment task)

    {
        return commentRepository.save(task);
    }
    public void delete(long id)
    {
        commentRepository.deleteById(id);
    }
    public Comment saveComment(Comment comment)
    {
        return commentRepository.save(comment);
    }
}
