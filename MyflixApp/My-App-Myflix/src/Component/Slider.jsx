import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Artworks } from '../assets/data/Artworks';
import './Slider.css';
import '@splidejs/react-splide/css';


export default function Slider() {
   

    const images = [
        ...Artworks.movies.map(movie => movie.image),
        ...Artworks.series.map(series => series.image),
        ...Artworks.animes.map(anime => anime.image)
    ];

    return (
        <div className="slider-container">
           
            <Splide
                options={{
                    type: 'loop',
                    perPage: 1,
                    perMove: 1,
                    gap: '1rem',
                    autoplay: true,
                    interval: 3000,
                    rewind: true
                }}
            >
                {images.map((image, index) => (
                    <SplideSlide key={index}>
                        <img src={image} alt={`Artwork ${index + 1}`} className="slider-image" />
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
}
