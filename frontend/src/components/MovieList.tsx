import React, {useState} from 'react';
import "./MovieList.css";
import {Movie} from "../model/Movie";
import MovieCard from "./MovieCard";

type MovieListProps = {
    movies: Movie[];
}

function MovieList(props: MovieListProps) {

    const [data, setData] = useState("")

    return (
        <div>
            <div className="movie-list-container">
                {props.movies.map((movie, index) =>
                    <MovieCard movie={movie} key={index}/>
                )}
            </div>
        </div>
    );
}

export default MovieList;