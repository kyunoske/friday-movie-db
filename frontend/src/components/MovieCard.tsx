import React from 'react';
import "./MovieCard.css";
import {Movie} from "../model/Movie";

type MovieCardProps = {
    movie: Movie;
}

function MovieCard(props: MovieCardProps) {
    return (
        <div className="movie-container">
            <p><strong>{props.movie.title}</strong></p>
            <img src={props.movie.image}/>
            {/*<p>{props.movie.description}</p>*/}
            <p>{props.movie.category}</p>
            <div className="button-container">
                {/*<button type="submit" className="btn btn-warning btn-md"*/}
                {/*        onClick={() => props.deleteBook(props.book.isbn)}>delete book*/}
                {/*</button>*/}
            </div>
        </div>
    );
}

export default MovieCard;