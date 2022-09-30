import React, {useState} from 'react';
import "./MovieList.css";
import {Movie} from "../model/Movie";
import MovieCard from "./MovieCard";

type MovieListProps = {
    movies: Movie[];
    deleteMovie: (id: string) => void;
}

function MovieList(props: MovieListProps) {

    const [data, setData] = useState("")

    return (
        <div>
            <div className="movie-list-container">
                {props.movies.map((movie, index) =>
                    <MovieCard movie={movie} key={index} deleteMovie={props.deleteMovie}/>
                )}
            </div>
        </div>
    );
}

export default MovieList;