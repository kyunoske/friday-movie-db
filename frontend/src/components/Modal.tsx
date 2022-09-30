import React, {FormEvent, useState} from 'react';
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
    const [category, setCategory] = useState("")
    const [modal, setModal] = useState(true);

    const randomId: number = Math.floor(Math.random() * 1000) + 1;

    function closeModal() {
        // @ts-ignore
        document.getElementById('closeModal').click();
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        let movie = {
            id: randomId.toString(),
            title,
            description,
            image,
            category
        }

        setMovie(movie);
        if (movie) {
            props.addMovie(movie);
            console.log(movie);
            closeModal();
        }

    }

    let modalStyle = {
        display: "block",
        backgroundColor: "rgba(0,0,0,0.8)"
    }

    return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Please fill in the movie details</h5>
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
                            <input
                                style={{marginBottom: "10px"}}
                                className="form-control"
                                name="category"
                                required={true}
                                type="text"
                                placeholder="category"
                                onChange={(e) => setCategory(e.target.value)}
                            />
                            {/*<button*/}
                            {/*    type="submit" className="btn btn-success" style={{width: "300px", marginBottom: "10px"}}*/}
                            {/*>Add movie*/}
                            {/*</button>*/}
                            <div className="button-group">
                                <button type="submit" className="btn btn-primary" style={{width: "200px"}}>Add movie
                                </button>
                                <button type="button" className="btn btn-secondary" style={{width: "200px"}}
                                        data-bs-dismiss="modal">Close
                                </button>
                            </div>
                        </form>
                    </div>
                    {/*<div className="modal-footer">*/}
                    {/*</div>*/}
                    {/*<div className="modal-footer">*/}
                    {/*    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>*/}
                    {/*    <button type="submit" className="btn btn-primary">Add movie</button>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
}

export default Modal;