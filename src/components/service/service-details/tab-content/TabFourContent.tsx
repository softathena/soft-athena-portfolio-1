import Image from 'next/image';  
import React from 'react';
import serviceDetailsImg from '../../../../../public/assets/imgs/service/services-details-01.png';

const TabFourContent = () => {
    return (
        <>
            <div className="service__details-wrapper">
                <h2 className="service__details-title mb-25">
                   Speed Optimized – Accelerating Your Digital Performance
                </h2>
                <p>
                    In today’s fast-paced world, speed is crucial. At the heart of every exceptional digital product is an optimized 
                    experience. Our Speed Optimization services ensure that your mobile apps, websites, and platforms perform at their 
                    best, providing users with lightning-fast load times and smooth, responsive interactions.
                </p>
                <div className="service__details-thumb">
                    <Image
                        src={serviceDetailsImg}
                        style={{ width: '100%', height: 'auto' }}
                        alt="Speed Optimized Services"
                    />
                </div>
                <div className="service__details-text">
                    <h5 className="mb-15">Our Approach to Speed Optimization</h5>
                    <p>
                        We take a comprehensive approach to speed optimization, focusing on reducing load times and improving 
                        performance across all areas of your product. Whether it’s fine-tuning your code, optimizing assets, or 
                        enhancing server response times, we ensure that your digital solutions are as fast as possible.
                    </p>
                    <p>
                        We use cutting-edge techniques and tools to analyze your platform’s performance and identify areas that need 
                        improvement. By optimizing everything from front-end code to back-end infrastructure, we ensure a smooth, 
                        seamless experience that keeps users engaged and improves conversion rates.
                    </p>
                    <p>
                        Our goal is to deliver an experience that feels instantaneous, no matter how complex the platform or content. 
                        Speed is not just about performance—it’s about keeping your users satisfied and ensuring they stay longer, 
                        engage more, and ultimately convert. Let us accelerate your digital performance and help you stay ahead of the 
                        competition.
                    </p>
                </div>
            </div>
        </>
    );
};

export default TabFourContent;
