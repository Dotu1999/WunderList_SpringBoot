package com.example.demo.Rest_API;

import com.example.demo.DTO.ListDTO;
import com.example.demo.Service.ListService;
import com.example.demo.Service.UserService;
import com.example.demo.domain.File;
import com.example.demo.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ListRestAPI {
    @Autowired
    private ListService listService;
    @Autowired
    private UserService userService;
    @GetMapping("/showlist/{iduser}")
    public List<com.example.demo.domain.List> showList(@PathVariable(value = "iduser") Long id){
        return listService.findListByIdUser(id);
    }
    @PostMapping(value = "/addlist/{iduser}")
    public com.example.demo.domain.List addList(@Validated ListDTO listDTO, @PathVariable(value = "iduser") long id)
    {
        Optional<User> user = userService.findById(id);
        com.example.demo.domain.List list = new com.example.demo.domain.List();
        list.setName(listDTO.getName());
        list.setUser(user.get());
        return listService.save(list);
    }
    @DeleteMapping(value = "/deletelist/{idlist}")
    public void deleteList(@PathVariable(value = "idlist") long id)
    {
        listService.deleteList(id);
    }

}
