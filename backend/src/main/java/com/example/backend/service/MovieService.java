package com.example.backend.service;

import com.example.backend.model.Movie;
import com.example.backend.repo.MovieRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class MovieService {

    private final MovieRepo movieRepo;

    private final IdService idService;


    @Autowired
    public MovieService(MovieRepo movieRepo, IdService idService) {
        this.movieRepo = movieRepo;
        this.idService = idService;
    }

    public List<Movie> getAllMovies() {
        return movieRepo.findAll();
    }

    public Movie addMovie(Movie newMovie) {
        newMovie.setId(idService.generateId());
        return movieRepo.save(newMovie);
    }

    public Movie getMovieById(String id) {
//        Optional<Movie> movieOptional = movieRepo.findById(id);
//
//        if (movieOptional.isPresent()) {
//            Movie foundMovie = movieOptional.get();
//            return foundMovie;
//        } else {
//            throw new NoSuchElementException("No movie found with the id" + id);
//        }

        return movieRepo.findById(id)
                .orElseThrow(() -> new NoSuchElementException("No movie found with id: " + id));

    }

    public void deleteMovie(String id) {
        movieRepo.deleteById(id);
    }

    public Movie editMovie(String id, Movie movie) {
        movieRepo.save(movie);
        return movie;
    }
}
