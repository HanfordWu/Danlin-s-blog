package com.danlinhou.blog.mapper;

import com.danlinhou.blog.pojo.User;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Select;

/**
 * Created by Hanford Wu on 2020-08-19 1:37 p.m.
 */
public interface UserMapper {



    @Select("select * from t_user where username = #{username} and password = #{password}")
    @Options(useGeneratedKeys=true, keyProperty="id")
    public User findByUsernamePassword(User user);


}
