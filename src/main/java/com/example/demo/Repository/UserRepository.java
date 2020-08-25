package com.example.demo.Repository;

import com.example.demo.domain.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User,Long> {
    @Query(value = "SELECT u FROM User u WHERE u.email = ?1 AND u.password= ?2")
    User findUserByUsernameAndPassword(String email,String password);
}
