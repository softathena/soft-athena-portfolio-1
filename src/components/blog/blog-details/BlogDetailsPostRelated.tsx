"use client"
import blog_data from '@/data/blog-data';
import { imageLoader } from '@/hooks/ImageLoader';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogDetailsPostRelated = () => {
    return (
        <>
            <div className="postbox__related">
                <h4 className="postbox__related-title mb-35">You May Also Like</h4>
                <div className="row g-5">
                    {
                        blog_data.slice(61, 63).map((item) => (
                            <div className="col-xl-6 col-lg-12 col-md-6 wow fadeInUp"
                                data-wow-delay={item.wowDelay} data-wow-duration="1s" key={item.id}>
                                <section className="blog__wrap blog__item style-two bg-solid">
                                    <div className="blog__thumb">
                                        <Link href={`/blog/blog-details/${item.id}`}>
                                            <Image src={item.image} style={{ width: "100%", height: "auto" }} placeholder='blur' loader={imageLoader} loading='lazy' alt="image not found" />
                                        </Link>
                                        <div className="blog__btn-circle">
                                            <Link href={`/blog/blog-details/${item.id}`}
                                                className="circle-btn is-bg-white">
                                                <span className="icon__box">
                                                    <i className="fa-regular fa-arrow-right-long"></i>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="blog__content">
                                        <div className="blog__content-top">
                                            <div className="blog__tag">
                                                <Link href="#">{item.blogTag}</Link>
                                            </div>
                                            <div className="blog__meta">
                                                <span>
                                                    <i className="fa-light fa-calendar"></i>
                                                    {item.date}
                                                </span>
                                            </div>
                                        </div>
                                        <h5 className="blog__title"><Link href={`/blog/blog-details/${item.id}`}>{item.blogTitle}</Link></h5>
                                        <div className="blog__content-bottom">
                                            <div className="blog__author">
                                                <div className="blog__author-thumb">
                                                    {item.authorImg && <Image src={item.authorImg} width={64} height={64} alt="image not found" />}
                                                </div>
                                                <div className="blog__author-info">
                                                    <span className="blog__author-title">{item.authorName}</span>
                                                    <span
                                                        className="blog__author-designation">{item.desination}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default BlogDetailsPostRelated;