import React from 'react';
import { Link } from 'react-router-dom';

function Navigation({ lang = false }) {
    return (
        <>
            {lang ? (
                <ul>
                    <li>
                        <a href="#">
                            أنا <i className="fal fa-angle-down" />
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/">الصفحة الرئيسية 1</Link>
                            </li>
                            <li>
                                <Link to="/home-two">الصفحة الرئيسية 2</Link>
                            </li>
                            <li>
                                <Link to="/home-three">المنزل 3</Link>
                            </li>
                            <li>
                                <Link to="/home-four">المنزل 4</Link>
                            </li>
                            <li>
                                <Link to="/home-five">المنزل 5</Link>
                            </li>
                            <li>
                                <Link to="/home-six">الصفحة الرئيسية 6</Link>
                            </li>
                            <li>
                                <Link to="/home-seven">المنزل 7</Link>
                            </li>
                            <li>
                                <Link to="/home-eight">الصفحة الرئيسية 8</Link>
                            </li>
                            <li>
                                <Link to="/home-dark">الصفحة الرئيسية الظلام</Link>
                            </li>
                            <li>
                                <Link to="/home-rtl">الصفحة الرئيسية Rtl</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/service">خدمة</Link>
                    </li>
                    <li>
                        <a href="#">
                            الصفحات <i className="fal fa-angle-down" />
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/about-us">عن</Link>
                            </li>
                            <li>
                                <Link to="/error">خطأ</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            أخبار <i className="fal fa-angle-down" />
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/news">صفحة الأخبار </Link>
                            </li>
                            <li>
                                <Link to="/news/single-news">أخبار واحدة</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/contact">اتصل</Link>
                    </li>
                </ul>
            ) : (
                <ul>
                    <li>
                        <a href="#">
                            Home <i className="fal fa-angle-down" />
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/">Home 1</Link>
                            </li>
                            <li>
                                <Link to="/mobile">Mobile</Link>
                            </li>
                            <li>
                                <Link to="/">Home 3</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/">Service</Link>
                    </li>
                    <li>
                        <a href="#">
                            Pages <i className="fal fa-angle-down" />
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            News <i className="fal fa-angle-down" />
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/">News Page</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            )}
        </>
    );
}

export default Navigation;
