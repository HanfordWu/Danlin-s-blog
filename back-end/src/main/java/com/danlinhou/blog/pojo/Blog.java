package com.danlinhou.blog.pojo;

import lombok.Data;
import org.apache.ibatis.annotations.MapKey;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

import java.util.Date;

/**
 * Created by Hanford Wu on 2020-08-18 4:41 p.m.
 */
@Data
public class Blog {

    private int id;

    private String title;

    private String content;

    private String year;

    private Date createDate;
    private int type;
    private String image;



}
