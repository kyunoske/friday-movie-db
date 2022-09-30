import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import useMovie from "./hooks/useMovie";

function App() {

    const {movie, movies, getAllMovies, addNewMovie, deleteMovie} = useMovie();

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage
                    movie={movie}
                    movies={movies}
                    addMovie={addNewMovie}
                    deleteMovie={deleteMovie}

                />}/>
            </Routes>
        </Router>
    );
}

export default App;
