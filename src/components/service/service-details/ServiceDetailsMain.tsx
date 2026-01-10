
import React from 'react';
import BreadcrumbOne from '@/components/common/Breadcrumb/BreadcrumbOne';
import breadcrumbBg from '../../../../public/assets/imgs/breadcrumb/breadcrumb-bg-07.png';
import ServiceDetailsArea from './ServiceDetailsArea';

const ServiceDetailsMain = ({ id }: { id: number }) => {
    return (
        <>
            {/* bradcrumb area start */}
            <BreadcrumbOne title="Transforming Ideas into Exceptional Digital Solutions" subTitle='Our Services'
                breadcrumbImg={breadcrumbBg} rowWrapperClass='col-xxl-6 col-xl-8 col-lg-8' />
            <ServiceDetailsArea id={id} />
            <section className="bd-testimonial__area section-space theme-bg-secondary p-relative"></section>
        </>
    );
};

export default ServiceDetailsMain;