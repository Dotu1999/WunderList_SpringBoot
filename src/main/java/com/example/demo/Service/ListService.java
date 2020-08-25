package com.example.demo.Service;

import com.example.demo.DTO.ListDTO;
import com.example.demo.Repository.ListRepository;
import com.example.demo.domain.List;
import com.example.demo.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ListService {
    @Autowired
    private ListRepository listRepository;
    public java.util.List<List> findListByIdUser(Long id)
    {

        return listRepository.findListByIdUser(id);
    }
    public List save(List list)
    {
        return listRepository.save(list);
    }
    public void deleteList(long id)
    {
        listRepository.deleteById(id);
    }
    public Optional<List> findById(long id)
    {
        return listRepository.findById(id);
    }
}
