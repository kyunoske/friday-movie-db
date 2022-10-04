import React from 'react';
import {Movie} from "../model/Movie";

type CarouselProps = {
    movie: Movie[];
}

function Carousel() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                        aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
                        aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5"
                        aria-label="Slide 6"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        src={"https://m.media-amazon.com/images/S/sonata-images-prod/DE_Hero_Mortal_Kombat_Launch/17926832-fd95-4638-8034-c2efaa54f86a._UR3000,600_SX1500_FMwebp_.jpeg"}
                        className="d-block w-100"
                        alt="..."/>
                </div>
                <div className="carousel-item">
                    <img
                        src={"https://m.media-amazon.com/images/S/sonata-images-prod/DE_TVOD_Paramount_TopGunMaverick_VOD_new/3cadb541-cb50-42df-ade4-78bb5656f37b._UR3000,600_SX1500_FMwebp_.jpeg"}
                        className="d-block w-100"
                        alt="..."/>
                </div>
                <div className="carousel-item">
                    <img
                        src={"https://m.media-amazon.com/images/S/sonata-images-prod/DE_TVOD_GO_Disney_ThorLoveandThunder_PEST/4d0e7d72-3d0d-460b-95ba-7de3d8298594._UR3000,600_SX1500_FMwebp_.jpeg"}
                        className="d-block w-100"
                        alt="..."/>
                </div>
                <div className="carousel-item">
                    <img
                        src={"https://m.media-amazon.com/images/S/sonata-images-prod/DE_3P_Superhero_Grabbag_Aniverse_Overload/faf2db29-3bf6-4401-be95-6e472f3cc8f5._UR3000,600_SX1500_FMwebp_.jpeg"}
                        className="d-block w-100"
                        alt="..."/>
                </div>
                <div className="carousel-item">
                    <img
                        src={"https://m.media-amazon.com/images/S/sonata-images-prod/DE_Hero_Blacklight_Launch/aec57c7a-656a-4742-ac48-245d8b38cfad._UR3000,600_SX1500_FMwebp_.jpeg"}
                        className="d-block w-100"
                        alt="..."/>
                </div>
                <div className="carousel-item">
                    <img
                        src={"https://m.media-amazon.com/images/S/sonata-images-prod/EUX_LOTR_Warlords/07e847d7-6c7d-4d78-bb49-bc4b799d5bfb._UR3000,600_SX1500_FMwebp_.jpeg"}
                        className="d-block w-100"
                        alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousel;