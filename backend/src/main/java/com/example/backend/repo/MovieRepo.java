package com.example.backend.repo;

import com.example.backend.model.Movie;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class MovieRepo {

    Map<String, Movie> movies = new HashMap<>();

    public List<Movie> getAllMovies() {
        return new ArrayList<>(movies.values());
    }

    public Movie addMovie(String id, Movie newMovie) {
        movies.put(id, newMovie);
        return newMovie;
    }
}
