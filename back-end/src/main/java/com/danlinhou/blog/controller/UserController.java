package com.danlinhou.blog.controller;

import com.danlinhou.blog.pojo.Response;
import com.danlinhou.blog.pojo.User;
import com.danlinhou.blog.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by Hanford Wu on 2020-08-19 1:34 p.m.
 */
@Controller
public class UserController {

    @Autowired
    private UserService userService;


    @PostMapping("/login")
    @ResponseBody
    public Response login(@RequestBody User user, HttpServletRequest request){
        User queriedUser = userService.findUserByUsernamePassword(user);
        System.out.println(user);
        Response response = new Response();
        if (queriedUser == null){
            response.setCode(400);
            response.setMessage("Username or password incorrect!");
        } else {
            response.setCode(200);
            response.setMessage("You've login!");
            request.getSession().setAttribute("user", queriedUser);
            request.getSession().setMaxInactiveInterval(120000);//2min
        }
        return response;

    }



}
