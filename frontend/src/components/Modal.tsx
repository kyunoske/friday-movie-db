import React, {FormEvent, useRef, useState} from 'react';
import "./Modal.css";
import {Movie} from "../model/Movie";

type ModalProps = {
    movie: Movie;
    addMovie: (movie: Movie) => void;
}

function Modal(props: ModalProps) {

    const [movie, setMovie] = useState(props.movie)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [bannerImage, setBannerImage] = useState("")
    // const [video, setVideo] = useState<FileList>()
    const [category, setCategory] = useState("")
    const [modal, setModal] = useState(true);

    const randomId: number = Math.floor(Math.random() * 100000) + 1;

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        let movie = {
            id: randomId.toString(),
            title,
            description,
            image,
            bannerImage,
            category
        }

        setMovie(movie);
        if (movie) {
            props.addMovie(movie);
            console.log(movie);
            setTitle("");
            setDescription("");
            setImage("");
            setCategory("");
        }

    }

    return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel"
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
                                placeholder="movie title"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <textarea
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="description"
                                required={true}
                                rows={3}
                                placeholder="movie description"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="image"
                                type="text"
                                placeholder="image"
                                onChange={(e) => setImage(e.target.value)}
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
                                placeholder="category"
                                onChange={(e) => setCategory(e.target.value)}
                            />
                            <div className="button-group">
                                <button type="submit" className="btn btn-info" data-bs-dismiss="modal"
                                        style={{width: "200px"}}>Add movie
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

export default Modal;