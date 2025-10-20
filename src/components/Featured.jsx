import React from 'react';
import './../App.css'
import feature1 from '../assets/images/feature1.png'
import feature2 from '../assets/images/feature2.png'

const Featured = () => {
    return (
        <div className='featured'>
            <h1 className='featured-title'>Featured <span className='primary'>projects</span></h1>

            <div className='brand'>
                <div className='left-side'>
                    <div className='brand-button'>
                        <h2 className='brand-store'>Brand Store</h2>
                    </div>
                    <div>
                        <h2 className='brand-title'>Theconsciousbar</h2>
                    </div>
                    <p className='p-text-color'>The Conscious Bar needed a premium Shopify store that reflected their eco-friendly, clean-beauty brand values while offering a fast, intuitive, and high-converting shopping experience.</p>

                    <div className='brand-percentage'>
                        <div>
                            <div className='conversion'>
                                <span>+</span>
                                <span>150</span>
                                <span>%</span>
                            </div>
                            <p>Conversion Rate</p>
                        </div>
                        <div>
                            <div className='conversion'>
                                <span>+</span>
                                <span>280</span>
                                <span>%</span>
                            </div>
                            <p>Revenue Growth</p>
                        </div>
                        <div>
                            <div className='conversion'>
                                {/* <span>+</span> */}
                                <span>96/100</span>
                            </div>
                            <p>Page Speed Score</p>
                        </div>
                    </div>

                    <div className='tech-skills'>
                        <div className='tech-skills-btn'>
                            <h2>Shopify Plus</h2>
                        </div>
                        <div className='tech-skills-btn'>
                            <h2>Custom Theme</h2>
                        </div>
                        <div className='tech-skills-btn'>
                            <h2>Javascript</h2>
                        </div>
                        <div className='tech-skills-btn'>
                            <h2>Klaviyo</h2>
                        </div>
                    </div>

                    <div className='case-study-btn'>
                        <button>View Case Study <span className="material-symbols-outlined">
                            output
                        </span></button>
                    </div>
                </div>
                <div className='brand-img'>
                    <img src={feature1} alt="" />
                </div>
            </div>

            <div className='beauty'>
                <div className='beauty-img'>
                    <img src={feature2} alt="" />
                </div>
                <div className='right-side'>
                    <div className='brand-button'>
                        <h2 className='brand-store'>Beauty Store</h2>
                    </div>
                    <div>
                        <h2 className='brand-title'>ForChics</h2>
                    </div>
                    <p className='p-text-color'>ForChics came to us needing to elevate their Shopify store to match their mission: offering science-backed vegan, cruelty-free beauty growth serums and treatments.</p>

                    <div className='brand-percentage'>
                        <div>
                            <div className='conversion'>
                                <span>+</span>
                                <span>200</span>
                                <span>%</span>
                            </div>
                            <p>Conversion Rate</p>
                        </div>
                        <div>
                            <div className='conversion'>
                                <span>+</span>
                                <span>250</span>
                                <span>%</span>
                            </div>
                            <p>Revenue Growth</p>
                        </div>
                        <div>
                            <div className='conversion'>
                                <span>98/100</span>
                            </div>
                            <p>Page Speed Score</p>
                        </div>
                    </div>

                    <div className='tech-skills'>
                        <div className='tech-skills-btn'>
                            <h2>Shopify Plus</h2>
                        </div>
                        <div className='tech-skills-btn'>
                            <h2>Custom App</h2>
                        </div>
                        <div className='tech-skills-btn'>
                            <h2>Liquid</h2>
                        </div>
                        <div className='tech-skills-btn'>
                            <h2>Stripe</h2>
                        </div>
                    </div>

                    <div className='case-study-btn'>
                        <button>View Case Study <span className="material-symbols-outlined">
                            output
                        </span></button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Featured;