package com.danlinhou.blog.mapper;

import com.danlinhou.blog.pojo.Type;
import org.apache.ibatis.annotations.Select;

/**
 * Created by Hanford Wu on 2020-08-19 4:56 p.m.
 */
public interface TypeMapper {


    @Select("select * from t_type where id = #{id}")
    Type findById(int id);

    @Select("select id from t_type where name = #{name}")
    int findByName(String typename);
}
