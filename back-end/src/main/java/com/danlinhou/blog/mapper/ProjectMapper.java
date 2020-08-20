package com.danlinhou.blog.mapper;

import com.danlinhou.blog.pojo.Project;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * Created by Hanford Wu on 2020-08-19 10:42 p.m.
 */
public interface ProjectMapper {

    @Select("select * from t_project")
    List<Project> findAllProject();

    @Insert("insert into t_project values(null,#{title},#{description}, #{image})")
    int saveProject(Project project);




}
