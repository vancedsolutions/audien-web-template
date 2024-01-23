import React from 'react';
import downloadThumb from '../../assets/images/download-thumb-1.760e260e.png';
import downloadThumbTwo from '../../assets/images/download-thumb-2.e89afecf.png';

function DownloadHomeThree({ className }) {
    return (
        <>
            <section className={`appie-download-3-area pt-100 ${className || ''}`} id="download">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">Featured Product</h3>
                                <p>Check out SmartBase Today.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div
                                className="appie-download-3-box mt-30 mr-20 wow animated fadeInLeft"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="content">
                                    <h4 className="title">Android</h4>
                                    <p>Download app for Android today — it's free.</p>
                                    <a className="main-btn" href="#">
                                        <i className="fab fa-google-play" />
                                        Download for Android
                                    </a>
                                </div>
                                <div className="thumb text-center">
                                    <img src={downloadThumb} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="appie-download-3-box mt-30 ml-20 wow animated fadeInRight"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <div className="content">
                                    <h4 className="title">iOS</h4>
                                    <p>Download app for iOS today — it's free.</p>
                                    <a className="main-btn" href="#">
                                        <i className="fab fa-apple" />
                                        Download for iOS
                                    </a>
                                </div>
                                <div className="thumb text-right">
                                    <img src={downloadThumbTwo} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default DownloadHomeThree;
