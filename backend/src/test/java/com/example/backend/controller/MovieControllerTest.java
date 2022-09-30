package com.example.backend.controller;

import com.example.backend.model.Movie;
import com.example.backend.repo.MovieRepo;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

class MovieControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    private MovieRepo movieRepo;

    @DirtiesContext
    @Test
    void getAllMovies() throws Exception {
//        //Given
//        Movie movie1 = new Movie("1",
//                "Kid",
//                "A good movie",
//                "https://www.cinematerial.com/media/box-office/499549.jpg",
//                "action");
//        movieRepo.addMovie("1", movie1);
//
//        //When & Then
//        mockMvc.perform(get("/api/movie"))
//                .andExpect(status().is(200))
//                .andExpect(content().string("""
//                        [{"1", "Kid", "A good movie", "https://www.cinematerial.com/media/box-office/499549.jpg", "action"}]
//                        """
//                ));
    }

    @Test
    void addMovie() throws Exception {
//        //Given
//        //When & Then
//        mockMvc.perform(
//                put("/api/movie/1")
//                        .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
//                        .content("""
//                                {"1", "Kid", "A good movie", "https://www.cinematerial.com/media/box-office/499549.jpg", "action"}
//                                """))
//                .andExpect(status().is(200))
//                .andExpect(content().string("""
//                        {"1", "Kid", "A good movie", "https://www.cinematerial.com/media/box-office/499549.jpg", "action"}
//                        """));
    }
}