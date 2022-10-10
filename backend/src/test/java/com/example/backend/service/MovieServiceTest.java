package com.example.backend.service;

import com.example.backend.model.Movie;
import com.example.backend.repo.MovieRepo;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class MovieServiceTest {

    private final MovieRepo movieRepo = mock(MovieRepo.class);
    private final IdService idService = mock(IdService.class);
    private final MovieService movieService = new MovieService(movieRepo, idService);

    @Test
    void getAllMovies() {
        //Given
        when(movieRepo.findAll()).thenReturn(List.of(
                new Movie("1", "Kid", "A good movie", "https://www.cinematerial.com/media/box-office/499549.jpg", "action")));

        //When
        List<Movie> actual = movieService.getAllMovies();

        //Then
        List<Movie> expected = List.of(
                new Movie("1", "Kid", "A good movie", "https://www.cinematerial.com/media/box-office/499549.jpg", "action"));
        verify(movieRepo).findAll();
        assertEquals(expected, actual);
    }

    @Test
    void addMovie() {
        //Given
        Movie movie = new Movie("1",
                "Kid",
                "A good movie",
                "https://www.cinematerial.com/media/box-office/499549.jpg",
                "action");
        when(movieRepo.save(movie)).thenReturn(movie);

        //When
        Movie actual = movieService.addMovie(movie);

        //Then
        verify(movieRepo).save(movie);
        assertEquals(movie, actual);
    }
}