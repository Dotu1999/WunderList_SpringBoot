package com.example.demo.domain;
import javax.persistence.*;
import java.util.Date;
@Entity
@Table(name = "tb_task")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private int star;
    private int status;
    private Date create_day;
    private String note;
    private Date remind;
    @ManyToOne
    @JoinColumn( name= "idlist",referencedColumnName = "id")
    private List list;
    public List getList() {
        return list;
    }

    public void setList(List list) {
        this.list = list;
    }

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

    public int getStar() {
        return star;
    }

    public void setStar(int star) {
        this.star = star;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public Date getCreate_day() {
        return create_day;
    }

    public void setCreate_day(Date create_day) {
        this.create_day = create_day;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Date getRemind() {
        return remind;
    }

    public void setRemind(Date remind) {
        this.remind = remind;
    }
}
