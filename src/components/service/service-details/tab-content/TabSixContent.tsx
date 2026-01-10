import Image from 'next/image';    
import React from 'react';
import serviceDetailsImg from '../../../../../public/assets/imgs/service/services-details-01.png';

const TabSixContent = () => {
    return (
        <>
            <div className="service__details-wrapper">
                <h2 className="service__details-title mb-25">
                   .NET Development & Consulting – Building Scalable, Robust Solutions
                </h2>
                <p>
                    In today’s competitive market, leveraging the right technology is key to staying ahead. Our .NET development and consulting services empower businesses to build secure, high-performance, and scalable applications. With extensive experience in .NET projects, we’ve successfully helped clients across various industries transform their operations, improve efficiency, and deliver exceptional results.
                </p>
                <div className="service__details-thumb">
                    <Image
                        src={serviceDetailsImg}
                        style={{ width: '100%', height: 'auto' }}
                        alt=".NET Development and Consulting"
                    />
                </div>
                <div className="service__details-text">
                    <h5 className="mb-15">Our .NET Approach – Tailored for Your Success</h5>
                    <p>
                        Our team of expert .NET developers works closely with you to understand your specific business needs. From custom enterprise applications to cloud-based solutions, we deliver end-to-end services that cover everything from planning to execution. Whether you need a robust backend system or a fully integrated .NET solution, we tailor our approach to meet your goals.
                    </p>
                    <p>
                        We have successfully executed a range of .NET projects, including building e-commerce platforms, customer relationship management (CRM) systems, and enterprise resource planning (ERP) solutions. Our hands-on experience ensures that every project is delivered with the highest level of quality and performance.
                    </p>
                    <p>
                        In addition to development, we also provide consulting services to help optimize your existing .NET solutions. From performance tuning to security enhancements, we ensure that your applications are running at peak efficiency, providing both scalability and reliability for future growth.
                    </p>
                    <p>
                        Our consultants work alongside your team, transferring knowledge and empowering you to take full advantage of the .NET ecosystem. By leveraging the power of .NET technologies such as ASP.NET, .NET Core, and Azure, we help you build solutions that are future-proof and adaptable to changing business needs.
                    </p>
                    <p>
                        At the heart of our .NET consulting services is our commitment to delivering real-world impact. We don’t just advise—we roll up our sleeves and work with you to implement strategies that drive efficiency, streamline workflows, and deliver tangible business results.
                    </p>
                </div>
            </div>
        </>
    );
};

export default TabSixContent;
