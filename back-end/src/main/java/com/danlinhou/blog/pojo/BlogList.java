package com.danlinhou.blog.pojo;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Hanford Wu on 2020-08-18 5:26 p.m.
 */

@Data
public class BlogList {
    private String year;
    private List<SBlog> blogs = new ArrayList<>();

}
