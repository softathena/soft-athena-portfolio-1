import Image from 'next/image';   
import React from 'react';
import serviceDetailsImg from '../../../../../public/assets/imgs/service/services-details-01.png';

const TabFiveContent = () => {
    return (
        <>
            <div className="service__details-wrapper">
                <h2 className="service__details-title mb-25">
                   Cloud Deployment – Seamless and Scalable Solutions
                </h2>
                <p>
                    In {`today's`} rapidly evolving digital landscape, cloud deployment has become a cornerstone of scalability, 
                    reliability, and cost efficiency. Our cloud deployment services ensure your business runs smoothly, with high 
                    availability and performance. We leverage the power of the cloud to provide scalable, secure, and flexible 
                    solutions tailored to your needs.
                </p>
                <div className="service__details-thumb">
                    <Image
                        src={serviceDetailsImg}
                        style={{ width: '100%', height: 'auto' }}
                        alt="Cloud Deployment Services"
                    />
                </div>
                <div className="service__details-text">
                    <h5 className="mb-15">Our Approach to Cloud Deployment</h5>
                    <p>
                        Our team works closely with you to understand your unique requirements and ensure your systems are fully 
                        optimized for the cloud. Whether it’s deploying to AWS, Google Cloud, or Microsoft Azure, we handle the entire 
                        process—from architecture design and migration to optimization and monitoring.
                    </p>
                    <p>
                        We focus on building cloud environments that scale effortlessly with your business. By utilizing auto-scaling, 
                        load balancing, and cloud-native services, we ensure that your platform adapts to changing demands, giving you 
                        the flexibility and reliability to grow.
                    </p>
                    <p>
                        Security is always a priority. We implement robust security measures, including encryption, firewalls, and 
                        access controls, to protect your data and ensure compliance with industry standards.
                    </p>
                    <p>
                        Our cloud deployment services don’t stop at just going live. We continuously monitor and optimize your cloud 
                        infrastructure to ensure top performance, helping you save on costs and maintain high availability for your 
                        users, no matter where they are in the world.
                    </p>
                </div>
            </div>
        </>
    );
};

export default TabFiveContent;
