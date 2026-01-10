'use client'
import React from 'react';
<<<<<<< HEAD
import { PhotoView } from 'react-photo-view';
=======
import { PhotoProvider, PhotoView } from 'react-photo-view';
>>>>>>> b670095fad2fed299bed38d9073f3af43e8bda4d
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Image from 'next/image';
import portfolio_data from '@/data/portfolio-data';
import Link from 'next/link';
<<<<<<< HEAD
import PhotoPopupAnimation from '@/hooks/photo-popup-animation';
=======
>>>>>>> b670095fad2fed299bed38d9073f3af43e8bda4d

const PortfolioTabThree = () => {
    return (
        <>
            <div className="row  g-5">
<<<<<<< HEAD
                <PhotoPopupAnimation>
=======
                <PhotoProvider
                    speed={() => 800}
                    easing={(type) =>
                        type === 2
                            ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                            : "cubic-bezier(0.34, 1.56, 0.64, 1)"
                    }
                >
>>>>>>> b670095fad2fed299bed38d9073f3af43e8bda4d
                    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                        <Masonry gutter='30px'>
                            {
                                portfolio_data.slice(10, 13).map((item) => (
                                    <div className="portfolio-item" key={item.id}>
                                        <div className=" portfolio__item style-seven full-height">
                                            <div className="portfolio__item-thumb">
                                                <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                                <div className="portfolio__item-btn">
                                                    <span className="icon__box">
                                                        <PhotoView src={item.image.src}>
                                                            <button className="popup-image circle-btn is-bg-white is-btn-large">
                                                                <i className="icon-plus"></i>
                                                            </button>
                                                        </PhotoView>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="portfolio__item-content">
                                                <div className="portfolio__item-info">
                                                    <div className="portfolio__tag">
<<<<<<< HEAD
                                                        <Link href={`/works/works-details/${item.id}`}>{item.tagName}</Link>
                                                    </div>
                                                    <h5 className="portfolio__item-title underline"><Link
                                                        href={`/works/works-details/${item.id}`}>{item.title}</Link></h5>
=======
                                                        <Link href={`/portfolio/portfolio-details/${item.id}`}>{item.tagName}</Link>
                                                    </div>
                                                    <h5 className="portfolio__item-title underline"><Link
                                                        href={`/portfolio/portfolio-details/${item.id}`}>{item.title}</Link></h5>
>>>>>>> b670095fad2fed299bed38d9073f3af43e8bda4d
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Masonry>
                    </ResponsiveMasonry>
                    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}>
                        <Masonry gutter='30px'>
                            {
                                portfolio_data.slice(46, 48).map((item) => (
                                    <div className="portfolio-item" key={item.id}>
                                        <div className=" portfolio__item style-seven full-height">
                                            <div className="portfolio__item-thumb">
                                                <Image src={item.image} style={{ width: "100%", height: "auto" }} alt="image not found" />
                                                <div className="portfolio__item-btn">
                                                    <span className="icon__box">
                                                        <PhotoView src={item.image.src}>
                                                            <button className="popup-image circle-btn is-bg-white is-btn-large">
                                                                <i className="icon-plus"></i>
                                                            </button>
                                                        </PhotoView>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="portfolio__item-content">
                                                <div className="portfolio__item-info">
                                                    <div className="portfolio__tag">
<<<<<<< HEAD
                                                        <Link href={`/works/works-details/${item.id}`}>{item.tagName}</Link>
                                                    </div>
                                                    <h5 className="portfolio__item-title underline"><Link
                                                        href={`/works/works-details/${item.id}`}>{item.title}</Link></h5>
=======
                                                        <Link href={`/portfolio/portfolio-details/${item.id}`}>{item.tagName}</Link>
                                                    </div>
                                                    <h5 className="portfolio__item-title underline"><Link
                                                        href={`/portfolio/portfolio-details/${item.id}`}>{item.title}</Link></h5>
>>>>>>> b670095fad2fed299bed38d9073f3af43e8bda4d
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Masonry>
                    </ResponsiveMasonry>
<<<<<<< HEAD
                </PhotoPopupAnimation>
=======
                </PhotoProvider>
>>>>>>> b670095fad2fed299bed38d9073f3af43e8bda4d
            </div>
        </>
    );
};

export default PortfolioTabThree;