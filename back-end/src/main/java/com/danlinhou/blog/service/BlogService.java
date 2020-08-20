package com.danlinhou.blog.service;

import com.danlinhou.blog.mapper.BlogMapper;
import com.danlinhou.blog.mapper.TypeMapper;
import com.danlinhou.blog.pojo.Blog;
import com.danlinhou.blog.pojo.BlogList;
import com.danlinhou.blog.pojo.SBlog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by Hanford Wu on 2020-08-18 4:34 p.m.
 */

@Service
public class BlogService {


    @Autowired
    private BlogMapper blogMapper;

    @Autowired
    private TypeMapper typeMapper;


    public void test(){
        System.out.println(this.blogMapper);
    }

    public List<BlogList> findAllArticles(){

        List<BlogList> allBlogs = new ArrayList<>();
        List<String> years = blogMapper.selectYears();
        for (String year : years) {
            List<SBlog> blogs = blogMapper.findBlogByYear(year);
            BlogList blogList = new BlogList();
            blogList.setYear(year);
            blogList.setBlogs(blogs);
            allBlogs.add(blogList);
        }

        return allBlogs;
    }

    public int save(Blog blog) {
        Date crateDate = new Date();
        blog.setCreateDate(crateDate);
        blog.setYear(Integer.toString(crateDate.getYear()+1900));
        return blogMapper.save(blog);
    }


    public SBlog findById(int i) {
        return blogMapper.findBlogById(i);
    }

    public List<BlogList> findByTypename(String typename) {

        int typeId = typeMapper.findByName(typename);
        List<SBlog> blogByType = blogMapper.findBlogByType(typeId);

        List<BlogList> allBlogs = new ArrayList<>();
        List<String> years = blogMapper.selectYears();
        for (String year : years) {
            BlogList blogList = new BlogList();
            blogList.setYear(year);
            for (SBlog sBlog : blogByType) {
                if (sBlog.getYear().equals(year)){
                    blogList.getBlogs().add(sBlog);
                }
            }
            allBlogs.add(blogList);
        }


        return allBlogs;


    }
}
