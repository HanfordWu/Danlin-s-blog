package com.danlinhou.blog.mapper;

import com.danlinhou.blog.pojo.Blog;
import com.danlinhou.blog.pojo.SBlog;
import org.apache.ibatis.annotations.*;

import java.util.List;

/**
 * Created by Hanford Wu on 2020-08-18 4:28 p.m.
 */


public interface BlogMapper  {

    @Select("select title, name, createDate, year from t_blog, t_type where t_blog.type = t_type.id order by createDate desc")
    @Result(property="typename", column="name")
    List<SBlog> findAllBlogs();

    @Select("select t_blog.id, title, name, createDate, year from t_blog, t_type where t_blog.type = t_type.id and t_blog.year = #{year} order by createDate desc")
    @Result(property="typename", column="name")
    List<SBlog> findBlogByYear(String year);


    @Select("select t_blog.id, title, name, createDate, year, content, image from t_blog, t_type where t_blog.type = t_type.id and t_blog.id = #{id}")
    @Result(property="typename", column="name")
    SBlog findBlogById(int id);


    @Select("select distinct year from t_blog")
    List<String> selectYears();


    @Insert("insert into t_blog values(null, #{title}, #{content}, #{year}, #{createDate}, #{type}, #{image})")
    @Options(useGeneratedKeys=true, keyProperty="id")
    int save(Blog blog);

    @Select("select id, title, createDate, year, type from t_blog where type = #{typeId} order by createDate desc")
    List<SBlog> findBlogByType(int typeId);
}
