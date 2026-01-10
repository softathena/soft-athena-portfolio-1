import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PortfolioListDetails = ({ works }: any) => {
    return (
        <>
            <section className="bd-portfolio__area section-space">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-7">
                            <div className="portfolio__details-img-list">
                                <div className="portfolio__details-img-list-box">
                                    <Image
                                        src={works?.image}
                                        loading="lazy"
                                        style={{ width: "100%", height: "auto" }}
                                        alt="image not found"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="portfolio__details-info-wrapper">
                                <div className="portfolio__details-sec-wrapper">
                                    <div className="section__title-wrapper">
                                        <div className="section__title-wrapper mb-15">
                                            <span className="section__subtitle bg-field">{works?.tagName}</span>
                                            <h2 className="portfolio__details-title">{works?.title}</h2>
                                        </div>
                                        <p>{works?.description}</p>
                                    </div>
                                </div>
                                <div className="portfolio__details-meta">
                                    <div className="portfolio__details-meta-item">
                                        <div className="portfolio__details-meta-icon">
                                            <span>
                                                <i className="fa-regular fa-user"></i>
                                            </span>
                                        </div>
                                        <div className="portfolio__details-meta-content">
                                            <h5 className='mb-2'>Duration:</h5>
                                            <span>{works?.duration}</span>
                                        </div>
                                    </div>
                                    <div className="portfolio__details-meta-item">
                                        <div className="portfolio__details-meta-icon">
                                            <span>
                                                <i className="fa-light fa-award"></i>
                                            </span>
                                        </div>
                                        <div className="portfolio__details-meta-content">
                                            <h5 className='mb-2'>Technologies:</h5>
                                            {
                                                works?.technologies.map((tech: any, index: number) => (
                                                    <span key={index}>
                                                        {tech}
                                                        {index < works.technologies.length - 1 && " , "}
                                                    </span>
                                                ))
                                            }
                                        </div>
                                    </div>

                                    <div className="portfolio__details-meta-item">
                                        <div className="portfolio__details-meta-icon">
                                            <span>
                                                <i className="fa-sharp fa-light fa-layer-group"></i>
                                            </span>
                                        </div>
                                        <div className="portfolio__details-meta-content">
                                            <h5 className='mb-2'>Category:</h5>
                                            <span>{works?.title}</span>
                                        </div>
                                    </div>
                                    {works.date && (
                                        <div className="portfolio__details-meta-item">
                                            <div className="portfolio__details-meta-icon">
                                                <span aria-hidden="true">
                                                    <i className="fa-light fa-calendar-days"></i>
                                                </span>
                                            </div>
                                            <div className="portfolio__details-meta-content">
                                                <h5 className='mb-2'>Project end date:</h5>
                                                <span>{works.date}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="portfolio__details-btn">
                                    <Link className="bd-btn is-btn-anim" href={works?.link}>
                                        <span className="bd-btn-inner">
                                            <span className="bd-btn-normal">View Website</span>
                                            <span className="bd-btn-hover">View Website</span>
                                            <i className="contentHidden"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PortfolioListDetails;