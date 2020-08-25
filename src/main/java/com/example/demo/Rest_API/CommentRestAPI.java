package com.example.demo.Rest_API;

import com.example.demo.DTO.CommentDTO;
import com.example.demo.Service.CommentService;
import com.example.demo.Service.TaskService;
import com.example.demo.domain.Comment;
import com.example.demo.domain.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class CommentRestAPI {
@Autowired
    private CommentService commentService;
@Autowired
    private TaskService taskService;
@GetMapping(value = "/showComment/{idtask}")
    public List<Comment> showComment(@PathVariable long idtask)
{
    return commentService.findCommentByTaskId(idtask);
}
@PostMapping(value = "/addComment/{idtask}")
    public Comment addComment(@Validated CommentDTO commentDTO ,@PathVariable long idtask){
    Optional<Task> task = taskService.findTaskById(idtask);
    Task task1 = task.get();
    Comment comment = new Comment();
    comment.setTitle(commentDTO.getTitle());
    comment.setTask(task1);
    return commentService.saveComment(comment);

}
@DeleteMapping(value = "/deleteComment/{id}")
    public void deleteComment(@PathVariable long id)
{
    commentService.delete(id);
}
}
