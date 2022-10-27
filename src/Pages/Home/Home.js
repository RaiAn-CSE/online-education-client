import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'

const Home = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default Home;