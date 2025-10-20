import React, { useEffect } from 'react';
import './SuccessStories.css';
import stories1 from './../../assets/images/stories1.png';
import stories2 from './../../assets/images/stories2.jpg';
import stories3 from './../../assets/images/stories3.jpg';
import stories4 from './../../assets/images/stories4.jpg';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useInView } from 'react-intersection-observer';

const SuccessStories = () => {
    const stories = [stories1, stories2, stories3, stories4];

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.6,
    });

    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: true,     
            offset: 100,    
        });
    }, []);

    return (
        <div className='moral'>
            <div className='moral-section'>
                <h2 className='moral-title'>
                    Moral <span>success stories</span>
                </h2>

                <div className='product-card'>
                    {stories.map((img, index) => (
                        <div
                            key={index}
                            ref={ref}
                            className='card-container'
                            data-aos='fade-up'
                            data-aos-delay={index * 150} // staggered animation
                        >
                            <div className='brand-label'>Brand Store</div>

                            <div className='product-display'>
                                <img src={img} alt='success story' />
                            </div>

                            <div className='card-content'>
                                <h2 className='card-title'>Femdisc</h2>
                                <p className='card-description'>
                                    Femdisc wanted a Shopify store that redefines period care — combining comfort,
                                    style, empathy and sustainability in an empowering, trustworthy experience.
                                </p>

                                <div className='moral-percentage'>
                                    <div>
                                        <div className='moral-conversion'>
                                            <span>+</span>
                                            <span>
                                                {inView ? <CountUp end={250} duration={2.5} /> : 0}
                                            </span>
                                            <span>%</span>
                                        </div>
                                        <p>Conversion</p>
                                    </div>
                                    <div>
                                        <div className='moral-conversion'>
                                            <span>+</span>
                                            <span><CountUp end={250} duration={2.5} /></span>
                                            <span>%</span>
                                        </div>
                                        <p>Revenue</p>
                                    </div>
                                </div>

                                <button className='details-btn'>VIEW DETAILS</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SuccessStories;
