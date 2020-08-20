package com.danlinhou.blog.service;

import com.danlinhou.blog.mapper.ProjectMapper;
import com.danlinhou.blog.pojo.Project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Hanford Wu on 2020-08-19 10:44 p.m.
 */
@Service
public class ProjectService {

    @Autowired
    private ProjectMapper projectMapper;



    public List<Project> findAllProjects(){
        return projectMapper.findAllProject();
    }


    public int saveProject(Project project){
        return projectMapper.saveProject(project);
    }




}
