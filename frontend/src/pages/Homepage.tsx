import React, {useState} from 'react';
import Modal from "../components/Modal";
import {Movie} from "../model/Movie";
import MovieList from "../components/MovieList";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import Footer from "../components/Footer";

type HomepageProps = {
    movie: Movie;
    movies: Movie[];
    addMovie: (movie: Movie) => void;
    deleteMovie: (id: string) => void;
}

function Homepage(props: HomepageProps) {

    const [modal, setModal] = useState(false);

    return (
        <div className="homepage-container">
            <Header/>
            <Carousel/>
            <MovieList movies={props.movies} deleteMovie={props.deleteMovie}/>

            <Modal movie={props.movie} addMovie={props.addMovie}/>
            <button type="button"
                    className="btn btn-info"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    style={{
                        width: "30%",
                        display: "flex",
                        justifyContent: "center",
                        margin: "auto",
                        marginBottom: "55px",
                        marginTop: "55px"
                    }}
            >
                Click me to add a movie!
            </button>
            <Footer/>
        </div>
    );
}

export default Homepage;