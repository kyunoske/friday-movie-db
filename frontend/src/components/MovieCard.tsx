import React from 'react';
import "./MovieCard.css";
import {Movie} from "../model/Movie";
import {Link} from "react-router-dom";

type MovieCardProps = {
    movie: Movie;
    deleteMovie: (id: string) => void;
}

function MovieCard(props: MovieCardProps) {
    // background-color: #0F1111;
    return (
        <div className="movie-container">
            <Link to={"/movie/" + props.movie.id}>
                <img src={props.movie.image} alt={props.movie.title} style={{height: "162px", width: "100%"}}/>
            </Link>
            <div className="button-container">
                <Link to={"/movie/" + props.movie.id} style={{marginLeft: "21px", width: "75%"}}>
                    <button type="submit" className="btn btn-outline-info btn-md button-details">See details</button>
                </Link>
                <button type="submit" className="btn btn-outline-secondary btn-md button-delete"
                        onClick={() => props.deleteMovie(props.movie.id)}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    );
}

export default MovieCard;