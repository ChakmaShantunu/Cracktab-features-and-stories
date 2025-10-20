import React from 'react';
import './../App.css';
import feature1 from '../assets/images/feature1.png';
import feature2 from '../assets/images/feature2.png';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Featured = () => {
    // Brand section observer
    const { ref: brandRef, inView: brandInView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    // Beauty section observer
    const { ref: beautyRef, inView: beautyInView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div className='featured'>
            <h1 className='featured-title'>
                Featured <span className='primary'>projects</span>
            </h1>

            {/* ========== 1st Brand Section ========== */}
            <motion.div className='brand' ref={brandRef} initial={{ opacity: 0, y: 80 }} animate={brandInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut' }}>
                <div className='left-side'>
                    <div className='brand-button'>
                        <h2 className='brand-store'>Brand Store</h2>
                    </div>
                    <div>
                        <h2 className='brand-title'>Theconsciousbar</h2>
                    </div>
                    <p className='p-text-color'>
                        The Conscious Bar needed a premium Shopify store that reflected their eco-friendly,
                        clean-beauty brand values while offering a fast, intuitive, and high-converting
                        shopping experience.
                    </p>

                    <div className='brand-percentage'>
                        <div>
                            <div className='conversion'>
                                <span>+</span>
                                <span>{brandInView ? <CountUp end={150} duration={2} /> : 0}</span>
                                <span>%</span>
                            </div>
                            <p>Conversion Rate</p>
                        </div>
                        <div>
                            <div className='conversion'>
                                <span>+</span>
                                <span>{brandInView ? <CountUp end={280} duration={2.5} /> : 0}</span>
                                <span>%</span>
                            </div>
                            <p>Revenue Growth</p>
                        </div>
                        <div>
                            <div className='conversion'>
                                <span>{brandInView ? <CountUp end={96} duration={2} /> : 0}/100</span>
                            </div>
                            <p>Page Speed Score</p>
                        </div>
                    </div>

                    <div className='tech-skills'>
                        <div className='tech-skills-btn'><h2>Shopify Plus</h2></div>
                        <div className='tech-skills-btn'><h2>Custom Theme</h2></div>
                        <div className='tech-skills-btn'><h2>Javascript</h2></div>
                        <div className='tech-skills-btn'><h2>Klaviyo</h2></div>
                    </div>

                    <div className='case-study-btn'>
                        <button>
                            View Case Study
                            <span className='material-symbols-outlined'>output</span>
                        </button>
                    </div>
                </div>
                <div className='brand-img'>
                    <img src={feature1} alt='feature 1' />
                </div>
            </motion.div>

            {/* ========== 2nd Beauty Section ========== */}
            <motion.div className='beauty' ref={beautyRef} initial={{ opacity: 0, y: 80 }} animate={beautyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut' }}>
                <div className='beauty-img'>
                    <img src={feature2} alt='feature 2' />
                </div>
                <div className='right-side'>
                    <div className='brand-button'>
                        <h2 className='brand-store'>Beauty Store</h2>
                    </div>
                    <div>
                        <h2 className='brand-title'>ForChics</h2>
                    </div>
                    <p className='p-text-color'>
                        ForChics came to us needing to elevate their Shopify store to match their mission:
                        offering science-backed vegan, cruelty-free beauty growth serums and treatments.
                    </p>

                    <div className='brand-percentage'>
                        <div>
                            <div className='conversion'>
                                <span>+</span>
                                <span>{beautyInView ? <CountUp end={200} duration={2} /> : 0}</span>
                                <span>%</span>
                            </div>
                            <p>Conversion Rate</p>
                        </div>
                        <div>
                            <div className='conversion'>
                                <span>+</span>
                                <span>{beautyInView ? <CountUp end={250} duration={2.5} /> : 0}</span>
                                <span>%</span>
                            </div>
                            <p>Revenue Growth</p>
                        </div>
                        <div>
                            <div className='conversion'>
                                <span>{beautyInView ? <CountUp end={98} duration={2} /> : 0}/100</span>
                            </div>
                            <p>Page Speed Score</p>
                        </div>
                    </div>

                    <div className='tech-skills'>
                        <div className='tech-skills-btn'><h2>Shopify Plus</h2></div>
                        <div className='tech-skills-btn'><h2>Custom App</h2></div>
                        <div className='tech-skills-btn'><h2>Liquid</h2></div>
                        <div className='tech-skills-btn'><h2>Stripe</h2></div>
                    </div>

                    <div className='case-study-btn'>
                        <button>
                            View Case Study
                            <span className='material-symbols-outlined'>output</span>
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Featured;
