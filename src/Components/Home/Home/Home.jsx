import React from 'react';
import Banner from '../Banner/Banner';
import CardSection from '../CardSection/CardSection';
import GallerySection from '../GallerySection/GallerySection';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CardSection></CardSection>
            <GallerySection></GallerySection>
            <Review></Review>
        </div>
    );
};

export default Home;