package com.danlinhou.blog.controller;

import com.danlinhou.blog.pojo.*;
import com.danlinhou.blog.service.BlogService;
import com.danlinhou.blog.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;

/**
 * Created by Hanford Wu on 2020-08-18 4:32 p.m.
 */
@Controller
public class BlogController {

    @Autowired
    private BlogService blogService;

    @Autowired
    private ProjectService projectService;

    @GetMapping("/")
    public String hello(){
        blogService.test();
        return "index.html";
    }

    @GetMapping("/getAllArticles")
    @ResponseBody
    public List<BlogList> getAllArticles(){
        return blogService.findAllArticles();
    }


    @RequestMapping("/saveArticle")
    @ResponseBody
    public Response saveArticle(@RequestBody Blog
                                blog){
        System.out.println(blogService.findById(9));
        int i = blogService.save(blog);
        Response response = new Response();
        if (i > 0){

            response.setCode(200);
            response.setMessage("Blog is saved");

        }else {
            response.setCode(500);
            response.setMessage("Some error happened");
        }

        return response;

    }

    @RequestMapping("/saveProject")
    @ResponseBody
    public Response saveProject(@RequestBody Project
                                        project){
        System.out.println(project);
        int i = projectService.saveProject(project);
        Response response = new Response();
        if (i > 0){

            response.setCode(200);
            response.setMessage("Porject is saved");

        }else {
            response.setCode(500);
            response.setMessage("Some error happened");
        }

        return response;

    }

    @GetMapping("/findAllProjects")
    @ResponseBody
    public List<Project> findAllProjects(){
        return projectService.findAllProjects();
    }




    @RequestMapping("/getArticle/{id}")
    @ResponseBody
    public SBlog getArticle(@PathVariable("id") int
                                        id){
        return blogService.findById(id);
    }

    @RequestMapping("/getType")
    @ResponseBody
    public List<BlogList> getType(@RequestParam("typename") String
                                    typename){
        return blogService.findByTypename(typename);
    }






}
