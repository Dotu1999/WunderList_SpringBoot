package com.example.demo.DTO;

import java.util.Date;

public class CommentDTO {
    private long id;
    private String title;
    private Date time;

//    public CommentDTO(long id, String title, Date time) {
//        this.id = id;
//        this.title = title;
//        this.time = time;
//    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }
}
