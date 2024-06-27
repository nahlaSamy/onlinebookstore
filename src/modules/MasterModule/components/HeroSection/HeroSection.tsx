import { Button, Col, Row } from 'react-bootstrap';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import book from "../../../../assets/images/E-raamatud1.png";
import { Navigation, Pagination } from 'swiper/modules';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroSection.css';

export default function HeroSection() {
    return (
        <div className="hero-section  ">
            <div className="container">

            <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{ clickable: true, el: '.swiper-pagination' }}
                className="hero-swiper"
            >
                <SwiperSlide>
                    <div className="">

                        <Row className="align-items-center ">
                            <Col md={6}>
                                <h1>Ipsum Dolor Si</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna
                                    commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.
                                </p>
                                <Button variant="outline-primary">Read More →</Button>
                            </Col>
                            <Col md={6} className="text-center">
                                <img src={book} alt="Book" className="book-image" />
                            </Col>
                        </Row>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h1>Ipsum Dolor 22</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna
                                commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.
                            </p>
                            <Button variant="outline-primary">Read More →</Button>
                        </Col>
                        <Col md={6} className="text-center">
                            <img src={book} alt="Book" className="book-image" />
                        </Col>
                    </Row>
                </SwiperSlide>

            </Swiper>
            </div>
            <div >
                <div className="swiper-button-prev custom-nav-button ">
                    <i className="fa fa-arrow-left"></i>
                </div>
                <div className="swiper-button-next custom-nav-button">
                    <i className="fa fa-arrow-right"></i>
                </div>
                <div className="swiper-pagination"></div>
            </div>

        </div>
    );
}
