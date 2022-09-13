package com.example.backend;

import javax.persistence.*;
import java.util.List;

@Entity
public class Hotel {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String city;
    private Integer price;
    @OneToMany(mappedBy = "hotel", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @OrderBy("id desc")
    private List<Review> reviews;


    public Hotel(Long id, String name, String city, Integer price, List<Review> reviews) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.price = price;
        this.reviews = reviews;
    }

    public Hotel(String name, String city, Integer price, List<Review> reviews) {
        this.name = name;
        this.city = city;
        this.price = price;
        this.reviews = reviews;
    }

    public Hotel(String name, String city, Integer price) {
        this.name = name;
        this.city = city;
        this.price = price;
    }

    public Hotel() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public List<Review> getReviews() {
        return reviews;
    }

    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }
}
