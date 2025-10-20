import React from 'react';
import './SuccessStories.css'
import stories1 from './../../assets/images/stories1.png'
import stories2 from './../../assets/images/stories2.jpg'
import stories3 from './../../assets/images/stories3.jpg'
import stories4 from './../../assets/images/stories4.jpg'

const SuccessStories = () => {
    return (
        <div className='moral'>
            <div className='moral-section'>
                <h2 className='moral-title'>Moral <span>success stories</span></h2>

                <div className='product-card'>
                    <div className='card-container'>
                        <div className='brand-label'>Brand Store</div>
                        <div className='product-display'>
                            <img src={stories1} alt="" />
                        </div>

                        <div className="card-content">
                            <h2 className="card-title">Femdisc</h2>
                            <p className="card-description">
                                Femdisc wanted a Shopify store that redefines period care — combining comfort, style, empathy and sustainability in an empowering, trustworthy experience.
                            </p>

                            <div className='moral-percentage'>
                                <div>
                                    <div className='moral-conversion'>
                                        <span>+</span>
                                        <span>200</span>
                                        <span>%</span>
                                    </div>
                                    <p>Conversion</p>
                                </div>
                                <div>
                                    <div className='moral-conversion'>
                                        <span>+</span>
                                        <span>250</span>
                                        <span>%</span>
                                    </div>
                                    <p>Revenue</p>
                                </div>
                            </div>

                            <button className="details-btn">VIEW DETAILS</button>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='brand-label'>Brand Store</div>
                        <div className='product-display'>
                            <img src={stories2} alt="" />
                        </div>

                        <div className="card-content">
                            <h2 className="card-title">Femdisc</h2>
                            <p className="card-description">
                                Femdisc wanted a Shopify store that redefines period care — combining comfort, style, empathy and sustainability in an empowering, trustworthy experience.
                            </p>

                            <div className='moral-percentage'>
                                <div>
                                    <div className='moral-conversion'>
                                        <span>+</span>
                                        <span>200</span>
                                        <span>%</span>
                                    </div>
                                    <p>Conversion</p>
                                </div>
                                <div>
                                    <div className='moral-conversion'>
                                        <span>+</span>
                                        <span>250</span>
                                        <span>%</span>
                                    </div>
                                    <p>Revenue</p>
                                </div>
                            </div>

                            <button className="details-btn">VIEW DETAILS</button>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='brand-label'>Brand Store</div>
                        <div className='product-display'>
                            <img src={stories3} alt="" />
                        </div>

                        <div className="card-content">
                            <h2 className="card-title">Femdisc</h2>
                            <p className="card-description">
                                Femdisc wanted a Shopify store that redefines period care — combining comfort, style, empathy and sustainability in an empowering, trustworthy experience.
                            </p>

                            <div className='moral-percentage'>
                                <div>
                                    <div className='moral-conversion'>
                                        <span>+</span>
                                        <span>200</span>
                                        <span>%</span>
                                    </div>
                                    <p>Conversion</p>
                                </div>
                                <div>
                                    <div className='moral-conversion'>
                                        <span>+</span>
                                        <span>250</span>
                                        <span>%</span>
                                    </div>
                                    <p>Revenue</p>
                                </div>
                            </div>

                            <button className="details-btn">VIEW DETAILS</button>
                        </div>
                    </div>
                    <div className='card-container'>
                        <div className='brand-label'>Brand Store</div>
                        <div className='product-display'>
                            <img src={stories4} alt="" />
                        </div>

                        <div className="card-content">
                            <h2 className="card-title">Femdisc</h2>
                            <p className="card-description">
                                Femdisc wanted a Shopify store that redefines period care — combining comfort, style, empathy and sustainability in an empowering, trustworthy experience.
                            </p>

                            <div className='moral-percentage'>
                                <div>
                                    <div className='moral-conversion'>
                                        <span>+</span>
                                        <span>200</span>
                                        <span>%</span>
                                    </div>
                                    <p>Conversion</p>
                                </div>
                                <div>
                                    <div className='moral-conversion'>
                                        <span>+</span>
                                        <span>250</span>
                                        <span>%</span>
                                    </div>
                                    <p>Revenue</p>
                                </div>
                            </div>

                            <button className="details-btn">VIEW DETAILS</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessStories;