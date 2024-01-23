import React from 'react';
import Sponser6 from '../../assets/images/2993661_brand_brands_logo_logos_microsoft_icon.png';
import Sponser1 from '../../assets/images/2993672_brand_brands_google_logo_logos_icon.png';
import Sponser3 from '../../assets/images/2993674_brand_brands_logo_logos_safari_icon.png';
import Sponser10 from '../../assets/images/2993679_brand_brands_logo_logos_opera_icon.png';
import Sponser4 from '../../assets/images/2993692_brand_brands_firefox_logo_logos_icon.png';
import Sponser2 from '../../assets/images/2993698_chrome_logo_logos_icon.png';
import Sponser5 from '../../assets/images/2993701_apple_brand_brands_ios_logo_icon.png';
import Sponser7 from '../../assets/images/2993704_android_brand_brands_logo_logos_icon.png';
import Sponser8 from '../../assets/images/sponser-8.png';
import sponserShape from '../../assets/images/sponser-shape.png';

function SponserHomeTwo({ className }) {
    return (
        <>
            <section className={`appie-sponser-area pb-100 ${className}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">
                                    Building Products across <br />
                                    every platform
                                </h3>
                                <p>We engage our users on the platforms they use every day.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-sponser-box d-flex justify-content-center">
                                <div className="sponser-item">
                                    <img src={Sponser1} alt="" />
                                </div>
                                <div className="sponser-item">
                                    <img src={Sponser2} alt="" />
                                </div>
                                <div className="sponser-item">
                                    <img src={Sponser3} alt="" />
                                </div>
                                <div className="sponser-item">
                                    <img src={Sponser4} alt="" />
                                </div>
                                <div className="sponser-item">
                                    <img src={Sponser5} alt="" />
                                </div>
                                <div className="sponser-item">
                                    <img src={Sponser6} alt="" />
                                </div>
                            </div>
                            <div className="appie-sponser-box item-2 d-flex justify-content-center">
                                <div className="sponser-item">
                                    <img src={Sponser7} alt="" />
                                </div>
                                <div className="sponser-item">
                                    <img src={Sponser8} alt="" />
                                </div>
                                <div className="sponser-item">
                                    <img src={Sponser10} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sponser-shape">
                    <img src={sponserShape} alt="" />
                </div>
            </section>
        </>
    );
}

export default SponserHomeTwo;
