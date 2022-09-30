import React, {useEffect, useState} from 'react';
import {Movie} from "../model/Movie";
import axios from "axios";

function UseMovie() {

    const [movies, setMovies] = useState([]);
    let movie!: Movie;

    useEffect(() => {
        getAllMovies()
    }, [])

    const getAllMovies = () => {
        axios.get("/api/movie")
            .then((response) => response.data)
            .then((movies) => setMovies(movies))
    }

    const addNewMovie = (movie: Movie) => {
        axios.post("/api/movie", movie)
            .then(getAllMovies)
    }

    const deleteMovie = (id: string) => {
        axios.delete("/api/movie/" + id)
            .then(() => getAllMovies())
    }

    return {movie, movies, getAllMovies, addNewMovie, deleteMovie};
}

export default UseMovie;