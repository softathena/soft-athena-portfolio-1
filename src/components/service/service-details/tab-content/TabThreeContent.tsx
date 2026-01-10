import Image from 'next/image'; 
import React from 'react';
import serviceDetailsImg from '../../../../../public/assets/imgs/service/services-details-01.png';

const TabThreeContent = () => {
    return (
        <>
            <div className="service__details-wrapper">
                <h2 className="service__details-title mb-25">
                    UI/UX Design – Crafting Experiences That Connect
                </h2>
                <p>
                    At the core of every great product is a seamless user experience, and {`that's`} exactly what we focus on. 
                    Our UI/UX design services are built around crafting intuitive and engaging digital experiences. From mobile 
                    applications to complex web platforms, we design with the user in mind—creating not just beautiful interfaces, 
                    but experiences that users will love.
                </p>
                <div className="service__details-thumb">
                    <Image
                        src={serviceDetailsImg}
                        style={{ width: '100%', height: 'auto' }}
                        alt="UI/UX Design Services"
                    />
                </div>
                <div className="service__details-text">
                    <h5 className="mb-15">Our Approach to UI/UX Design</h5>
                    <p>
                        Our team of expert designers takes a holistic approach to UI/UX, focusing on every aspect of the user journey. 
                        We blend creativity with functionality, ensuring that every design element serves a purpose and enhances the overall 
                        experience. We don’t just make things look good—we make them easy to use, engaging, and efficient.
                    </p>
                    <p>
                        From wireframes and prototypes to polished, pixel-perfect designs, we craft each touchpoint with a deep understanding 
                        of your {`audience's`} needs. We focus on usability, accessibility, and performance, ensuring that users have a seamless 
                        experience no matter the device or platform.
                    </p>
                    <p>
                        Our designs are built for the future. With a focus on responsiveness, scalability, and intuitive interaction, we 
                        ensure your product remains relevant and adaptable as your business grows. {`Let's`} transform your ideas into 
                        designs that not only look amazing but also deliver tangible results.
                    </p>
                </div>
            </div>
        </>
    );
};

export default TabThreeContent;
