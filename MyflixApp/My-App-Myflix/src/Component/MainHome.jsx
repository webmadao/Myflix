import React from 'react';
import { Artworks } from '../assets/data/Artworks';
import './MainHome.css';

export default function MainHome() {
    const MovieImages = Artworks.movies;
    const SeriesImages = Artworks.series;
    const AnimesImages = Artworks.animes;
    const ratingColor = document.querySelector(".rating");
    function changeColor(rating) {

        if (rating >= 8) {
            ratingColor.style.color = "green";
        } else if (rating >= 5) {
            ratingColor.style.color = "orange";
        } else {
            ratingColor.style.color = "red";
        }
    }
       

    return (
        <div className='mainHome'>
            <h2>Films</h2>
            <ul className='artworksList'>
                {MovieImages.map((movie, index) => (
                    <li className='artworksImg' key={index}>
                        <figure>
                            <img src={movie.image} alt={`Movie ${index}`} />
                            <figcaption>
                                <p>{movie.title}</p>
                                <p>Type: Movie</p>
                                <p className='rating'>Note: {movie.rating}</p>
                            </figcaption>
                        </figure>
                    </li>
                ))}
            </ul>

            <h2>Series</h2>
            <ul className='artworksList'>
                {SeriesImages.map((series, index) => (
                    <li className='artworksImg' key={index}>
                        <figure>
                            <img src={series.image} alt={`Series ${index}`} />
                            <figcaption>
                                <p>{series.title}</p>
                                <p>Type: Series</p>
                                <p className='rating'>Note: {series.rating}</p>
                            </figcaption>
                        </figure>
                    </li>
                ))}
            </ul>

            <h2>Animes</h2>
            <ul className='artworksList'>
                {AnimesImages.map((anime, index) => (
                    <li className='artworksImg' key={index}>
                        <figure>
                            <img src={anime.image} alt={`Animes ${index}`} />
                            <figcaption>
                                <p>{anime.title}</p>
                                <p>Type: Anime</p>
                                <p className='rating'>Note: {anime.rating}</p>
                            </figcaption>
                        </figure>
                    </li>
                ))}
            </ul>
        </div>
    );
}