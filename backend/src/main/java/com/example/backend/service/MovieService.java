package com.example.backend.service;

import com.example.backend.model.Movie;
import com.example.backend.repo.MovieRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {

    private final MovieRepo movieRepo;

    @Autowired
    public MovieService(MovieRepo movieRepo) {
        this.movieRepo = movieRepo;
    }

    public List<Movie> getAllMovies() {
        return movieRepo.getAllMovies();
    }

    public Movie addMovie(Movie newMovie) {
        return movieRepo.addMovie(newMovie.getId(), newMovie);
    }

    public Movie getMovieById(String id) {
        return movieRepo.getMovieById(id);
    }

    public Movie deleteMovie(String id) {
        return movieRepo.deleteMovie(id);
    }
}
