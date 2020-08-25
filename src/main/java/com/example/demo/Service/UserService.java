package com.example.demo.Service;

import com.example.demo.Repository.UserRepository;
import com.example.demo.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    public User find_acount(String email, String password){
        return userRepository.findUserByUsernameAndPassword(email,password);
    }
    public Optional<User> findById(long id)
    {
        return userRepository.findById(id);
    }
}
