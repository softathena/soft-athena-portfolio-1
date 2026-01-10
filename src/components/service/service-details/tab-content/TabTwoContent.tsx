import Image from 'next/image';
import React from 'react';
import serviceDetailsImg from '../../../../../public/assets/imgs/service/services-details-01.png';

const TabTwoContent = () => {
    return (
        <>
            <div className="service__details-wrapper">
                <h2 className="service__details-title mb-25">
                    Unlocking the Future of Web Development
                </h2>
                <p>
                    At the heart of our service is the creation of robust, scalable, and innovative web applications.
                    With our cutting-edge approach, we craft dynamic web platforms that elevate user experiences and
                    deliver real-world results. We ensure that every solution is built with precision, advanced functionality,
                    and future-proof design.
                </p>
                <div className="service__details-thumb">
                    <Image
                        src={serviceDetailsImg}
                        style={{ width: '100%', height: 'auto' }}
                        alt="Web Development Services"
                    />
                </div>
                <div className="service__details-text">
                    <h5 className="mb-15">Our Expertise in Web Development</h5>
                    <p>
                        Our team of expert developers is skilled in crafting full-stack web applications using the latest
                        technologies, including the MERN stack (MongoDB, Express, React, Node.js). We build highly interactive,
                        data-driven platforms, with seamless navigation and intuitive user interfaces.
                    </p>
                    <p>
                        Whether {`you're`} looking for custom websites, complex e-commerce solutions, or powerful content management
                        systems (CMS), we combine technical expertise with creative design to build scalable, high-performance
                        solutions. From responsive design to seamless back-end integration, we handle every aspect of web
                        development to ensure a smooth, user-friendly experience.
                    </p>
                    <p>
                        Our focus is on delivering a product that not only meets your business needs but also exceeds user
                        expectations. Through collaboration, innovation, and attention to detail, we aim to turn your digital
                        vision into reality—one line of code at a time.
                    </p>
                </div>
            </div>
        </>
    );
};

export default TabTwoContent;
