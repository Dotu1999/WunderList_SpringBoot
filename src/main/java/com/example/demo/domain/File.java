package com.example.demo.domain;

import javax.persistence.*;
import java.util.Date;
@Entity
@Table(name = "tb_file")
public class File {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
//    private Date time;
    private String link;

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    @ManyToOne
    @JoinColumn( name ="idtask")
    private Task task;
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

//    public Date getTime() {
//        return time;
//    }
//
//    public void setTime(Date time) {
//        this.time = time;
//    }

    public Task getTask() {
        return task;
    }

    public void setTask(Task task) {
        this.task = task;
    }
}
