import Image from 'next/image';
import React from 'react';
import serviceDetailsImg from '../../../../../public/assets/imgs/service/services-details-01.png';

const TabOneContent = ({ service }: any) => {
    return (
        <>
            <div className="service__details-wrapper">
                <h2 className="service__details-title mb-25">
                Elevating Mobile Experiences with Flutter & Dart.
                </h2>
                <p>
                    Our team specializes in crafting cutting-edge mobile applications using Flutter and Dart.
                    We focus on delivering seamless, high-performing, and visually stunning apps tailored
                    to your unique needs and business goals.
                </p>
                <div className="service__details-thumb">
                    <Image
                        src={serviceDetailsImg}
                        style={{ width: '100%', height: 'auto' }}
                        alt="Mobile Application Development"
                    />
                </div>
                <div className="service__details-text">
                    <h5 className="mb-15">Why Choose Flutter & Dart?</h5>
                    <p>
                        Flutter allows us to build cross-platform apps from a single codebase, enabling fast
                        development and consistent performance across both iOS and Android devices. Powered by Dart, we
                        deliver apps with smooth animations, robust features, and lightning-fast execution.
                    </p>
                    <p>
                        Our expertise includes creating scalable solutions for diverse industries, from e-commerce and
                        healthcare to education and entertainment. By combining beautiful UI/UX design with advanced
                        functionalities, we ensure your app stands out in the competitive mobile landscape.
                    </p>
                    <p>
                        Whether you need a feature-rich mobile app or a minimal viable product (MVP), we are here to
                        transform your ideas into reality with precision and creativity.
                    </p>
                </div>
            </div>
        </>
    );
};

export default TabOneContent;
