package com.example.backend.controller;

import com.example.backend.model.Movie;
import com.example.backend.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movie")
public class MovieController {

    private final MovieService movieService;

    @Autowired
    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping
    public List<Movie> getAllMovies() {
        return movieService.getAllMovies();
    }

    @GetMapping("/{id}")
    public Movie getMovieById(@PathVariable String id) {
        return movieService.getMovieById(id);
    }

    @PostMapping
    public Movie addMovie(@RequestBody Movie newMovie) {
        return movieService.addMovie(newMovie);
    }

    @DeleteMapping("/{id}")
    public Movie deleteMovie(@PathVariable String id) {
        return movieService.deleteMovie(id);
    }

    @PutMapping("/{id}")
    public Movie editMovie(@PathVariable String id, @RequestBody Movie movie) {
        return movieService.editMovie(id, movie);
    }

}
