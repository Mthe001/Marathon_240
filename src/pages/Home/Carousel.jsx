import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './Carousel.css';

const Carousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [images] = useState([
        'https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/2330502/pexels-photo-2330502.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/5319373/pexels-photo-5319373.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/421160/pexels-photo-421160.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/5310739/pexels-photo-5310739.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/4719924/pexels-photo-4719924.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/17979479/pexels-photo-17979479/free-photo-of-men-running-in-race.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    useEffect(() => {

        const interval = setInterval(scrollNext, 4000);
        return () => clearInterval(interval);
    }, [scrollNext]);

    return (
        <div className="embla max-w-7xl  mx-auto py-6 px-5">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="embla__slide flex-shrink-0 w-full"
                        >
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
