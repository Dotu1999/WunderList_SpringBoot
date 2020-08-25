package com.example.demo.Repository;

import com.example.demo.DTO.ListDTO;
import com.example.demo.domain.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ListRepository extends CrudRepository <List,Long> {
    @Query(value = "select l from List l where l.user.id = ?1 ")
    java.util.List<List> findListByIdUser(long id);
}
