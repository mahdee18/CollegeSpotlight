import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GallerySection = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const images = [
        'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg',

        'https://centralaz.edu/wp-content/uploads/2017/07/grad-group-photo-rev.jpg',

        'https://i1.wp.com/www.currentschoolnews.com/wp-content/uploads/2020/06/scholarships_ala_small-w.jpeg?resize=1080%2C721&ssl=1',
        
        'https://www.ziprecruiter.com/blog/static/wp-content/uploads/2021/03/23225400/Graduating-College-Seniors-794x529.jpg',

        'https://2.bp.blogspot.com/-W0lWzRtcx-8/TbqABoiEsLI/AAAAAAAAAwU/a4vu8FrIEZQ/s1600/du_hoc_thanh_cong.jpg',
        'https://uniontrack.com/blog/wp-content/uploads/2022/07/image1-3.jpg'
    ];

    return (
        <section className="bg-gray-100 py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <h2
                    className="text-3xl font-extrabold text-center text-gray-900 mb-4"
                    data-aos="fade-up"
                >
                    Gallery
                </h2>
                <p
                    className="text-lg text-gray-600 text-center mb-8"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    Explore our graduation gallery images.
                </p>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden"
                            data-aos="zoom-in"
                            data-aos-duration="500"
                            data-aos-delay={index * 100}
                        >
                            <img
                                src={image}
                                alt={`Image ${index + 1}`}
                                className="w-full h-64 object-cover"
                                data-aos="flip-left"
                                data-aos-duration="800"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;