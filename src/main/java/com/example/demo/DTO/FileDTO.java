package com.example.demo.DTO;

import java.util.Date;

public class FileDTO {
    private long id;
    private String name;
//    private Date time;
    private String link;

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

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }
}


