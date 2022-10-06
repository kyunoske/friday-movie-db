import React, {FormEvent, useContext, useEffect, useState} from 'react';
import {Movie} from "../model/Movie";
import {useParams} from "react-router-dom";
import useMovie from "../hooks/useMovie";
import axios from "axios";

type EditModalProps = {
    movie: Movie;
    movies: Movie[];
    editMovie: (id: string, movie: Movie) => void;
}

function EditModal(props: EditModalProps) {

    const params = useParams();
    const id = params.id;

    const findMovie = props.movies.find((movie) => movie.id === id)
    console.log("found", findMovie)

    const [movie, setMovie] = useState(findMovie)

    const [title, setTitle] = useState(findMovie ? findMovie.title : "")
    const [description, setDescription] = useState(findMovie ? findMovie.description : "")
    const [image, setImage] = useState(findMovie ? findMovie.image : "")
    // const [bannerImage, setBannerImage] = useState("")
    const [category, setCategory] = useState(findMovie ? findMovie.category : "")
    const [modal, setModal] = useState(true);

    if (id === undefined) {
        return (<>Movie not found with this id!</>)
    }

    if (findMovie === undefined) {
        return (<>Sorry no movie found!</>)
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        let updatedMovie: Movie = {
            id,
            title,
            description,
            image,
            // bannerImage,
            category
        }

        setMovie(updatedMovie);

        // axios.put(`/api/movie/${id}`, updatedMovie)
        //     .then(() => getAllMovies())

        props.editMovie(id, updatedMovie);
        console.log(updatedMovie);

    }

    return (
        <div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add a movie to <strong
                            style={{color: "#0dcaf0"}}>Binge
                            Watchers</strong></h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit} style={{
                            margin: "auto",
                            width: "95%"
                        }}>
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="title"
                                required={true}
                                type="text"
                                value={title}
                                placeholder="movie title"
                                onChange={(event) => setTitle(event.target.value)}
                            />
                            <textarea
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="description"
                                required={true}
                                rows={3}
                                value={description}
                                placeholder="movie description"
                                onChange={(event) => setDescription(event.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="image"
                                type="text"
                                value={image}
                                placeholder="image"
                                onChange={(event) => setImage(event.target.value)}
                            />
                            {/*<input*/}
                            {/*    style={{marginBottom: "10px"}}*/}
                            {/*    className="form-control"*/}
                            {/*    name="bannerImage"*/}
                            {/*    type="text"*/}
                            {/*    placeholder="banner image"*/}
                            {/*    onChange={(e) => setBannerImage(e.target.value)}*/}
                            {/*/>*/}
                            {/*<input*/}
                            {/*    style={{marginBottom: "10px"}}*/}
                            {/*    className="form-control"*/}
                            {/*    name="video"*/}
                            {/*    type="text"*/}
                            {/*    placeholder="video"*/}
                            {/*    onChange={(e) => setVideo(e.target.files)}*/}
                            {/*/>*/}
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="category"
                                required={true}
                                type="text"
                                value={category}
                                placeholder="category"
                                onChange={(event) => setCategory(event.target.value)}
                            />
                            <div className="button-group">
                                <button type="submit" className="btn btn-info" data-bs-dismiss="modal"
                                        style={{width: "200px"}}>Confirm edit
                                </button>
                                <button type="button" className="btn btn-secondary" style={{width: "200px"}}
                                        data-bs-dismiss="modal">Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditModal;