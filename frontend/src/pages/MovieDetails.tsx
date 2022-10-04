import React from 'react';
import "./MovieDetails.css";
import {Movie} from "../model/Movie";
import {Link, useParams} from "react-router-dom";
import EditModal from "../components/EditModal";

type MovieDetailsProps = {
    movies: Movie[]
    editMovie: (id: string) => void;
}

function MovieDetails(props: MovieDetailsProps) {

    const params = useParams();
    const id = params.id;

    if (id === undefined) {
        return (<>Movie not found with this id!</>)
    }

    const movie = props.movies.find((movie) => movie.id === id)
    console.log(movie)

    if (movie === undefined) {
        return (<>Sorry no movie found!</>)
    }

    return (
        <div className="details-container">
            <Link to={"/"}>
                <button type="button" className="btn btn-outline-info" style={{marginTop: "20px"}}>
                    Main menu
                </button>
            </Link>
            <div className="movie-card" style={{margin: "auto"}}>
                <div className="detail-header">
                    <h1>
                        {movie.title}
                    </h1>
                </div>

                <div className="image-container">
                    <img src={movie.image} style={{width: "290px"}}/>
                </div>
                <p>
                    <strong style={{color: "#0dcaf0"}}>Summary:</strong> {movie.description}
                </p>
                <p>
                    <strong style={{color: "#0dcaf0"}}>Category:</strong> {movie.category}
                </p>
                <EditModal movie={movie} movies={props.movies} editMovie={props.editMovie}/>
                <button type="button"
                        className="btn btn-info"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal2">
                    Edit movie
                </button>
            </div>
        </div>
    );
}

export default MovieDetails;