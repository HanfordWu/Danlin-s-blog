package com.danlinhou.blog.service;

import com.danlinhou.blog.mapper.UserMapper;
import com.danlinhou.blog.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by Hanford Wu on 2020-08-19 1:42 p.m.
 */

@Service
public class UserService {

    @Autowired
    private UserMapper userMapper;

    public User findUserByUsernamePassword(User user){
        return userMapper.findByUsernamePassword(user);
    }


}
