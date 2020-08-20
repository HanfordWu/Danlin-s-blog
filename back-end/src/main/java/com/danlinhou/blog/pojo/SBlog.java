package com.danlinhou.blog.pojo;

import lombok.Data;

import java.util.Date;

/**
 * Created by Hanford Wu on 2020-08-19 6:06 p.m.
 */

@Data
public class SBlog {
    private int id;
    private String title;
    private String typename;
    private Date createDate;
    private String year;
    private String content;
    private int type;
    private String image;
}
