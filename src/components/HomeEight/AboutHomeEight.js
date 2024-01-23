import React from 'react';
import thumb4 from '../../assets/images/about-thumb-4.aa3828df.png';
import thumb5 from '../../assets/images/about-thumb-5.png';

function AboutHomeEight() {
    return (
        <>
            <section className="appie-about-8-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title mb-30">
                                <h3 className="appie-title">What We Do</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="appie-about-8-box">
                                <h3 className="title">Crafting Digital Products</h3>
                                <p>
                                    With years of experience in app and software development, <br />
                                    we leverage our expertise to build engaging <br />
                                    digital products.
                                </p>
                                <a className="main-btn" href="#">
                                    Learn More <i className="fal fa-arrow-right" />
                                </a>
                                <div className="thumb">
                                    <img src={thumb4} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="appie-about-8-box">
                                <h3 className="title">Driving Value</h3>
                                <p>
                                    We gather and analyze data points to adapt and <br />
                                    optimize the user experience, increase conversions <br />
                                    and foster a long lifetime value.
                                </p>
                                <a className="main-btn" href="#">
                                    Learn More <i className="fal fa-arrow-right" />
                                </a>
                                <div className="thumb mr-30">
                                    <img src={thumb5} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutHomeEight;
