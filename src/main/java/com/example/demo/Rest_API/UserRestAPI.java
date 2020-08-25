package com.example.demo.Rest_API;

import com.example.demo.Repository.UserRepository;
import com.example.demo.Service.UserService;
import com.example.demo.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.DigestUtils;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import javax.servlet.http.HttpSession;
import javax.xml.bind.DatatypeConverter;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

@RestController
public class UserRestAPI {
    @Autowired
    private UserService userService;
    @GetMapping("")
    public ModelAndView hienthi(){
        ModelAndView modelAndView = new ModelAndView("/login.html");
        return modelAndView;
    }
    @PostMapping("/login")
    public ModelAndView login(@Validated User u , HttpSession httpSession ) throws NoSuchAlgorithmException {
//        String Password = md5(u.getPassword());
        String password = u.getPassword();
        MessageDigest md = MessageDigest.getInstance("MD5");
        md.update(password.getBytes());
        byte[] digest = md.digest();
        String myHash = DatatypeConverter.printHexBinary(digest);
        //
        User user1 = (User) userService.find_acount(u.getEmail(),myHash);
        if(user1 == null)
        {
            ModelAndView modelAndView = new ModelAndView("/login.html");
            modelAndView.addObject("notExist", "Mat Khau Khong Chinh Xac");
            return modelAndView;
        }
        else
        {
            ModelAndView modelAndView = new ModelAndView("/wunderlist.html");
            httpSession.setAttribute("username",user1.getName());
            httpSession.setAttribute("user_id",user1.getId());
            modelAndView.addObject("name",httpSession.getAttribute("username"));
            modelAndView.addObject("userid",httpSession.getAttribute("user_id"));
            return modelAndView;
        }
    }
    @GetMapping("/logout")
    public ModelAndView logout(HttpSession httpSession)
    {
        ModelAndView modelAndView = new ModelAndView("/login.html");
        httpSession.invalidate();
        return modelAndView;
    }

}
