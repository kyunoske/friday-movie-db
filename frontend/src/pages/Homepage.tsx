import React, {useState} from 'react';
import Modal from "../components/Modal";
import {Movie} from "../model/Movie";
import MovieList from "../components/MovieList";

type HomepageProps = {
    movie: Movie;
    movies: Movie[];
    addMovie: (movie: Movie) => void;
    deleteMovie: (id: string) => void;
}

function Homepage(props: HomepageProps) {

    const [modal, setModal] = useState(false);

    return (
        <div>
            <MovieList movies={props.movies} deleteMovie={props.deleteMovie}/>

            <Modal movie={props.movie} addMovie={props.addMovie}/>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
        </div>
    );
}

export default Homepage;