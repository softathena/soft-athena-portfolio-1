import React from 'react';
import BreadcrumbOne from '../common/Breadcrumb/BreadcrumbOne';
<<<<<<< HEAD
import breadcrumbBg from '../../../public/assets/imgs/breadcrumb/breadcrumb-bg-06.png';
=======
import breadcrumbBg from '../../../public/assets/imgs/breadcrumb/breadcrumb-bg-01.png';
>>>>>>> b670095fad2fed299bed38d9073f3af43e8bda4d
import AboutOurVisionArea from './AboutOurVisionArea';
import AboutPortfolio from './AboutPortfolio';
const AboutMainArea = () => {
    return (
        <>
            <BreadcrumbOne title="We Create Top-Class Digital Product" subTitle='About Us'
                breadcrumbImg={breadcrumbBg} rowWrapperClass='col-xxl-6 col-xl-8 col-lg-8' />
            <AboutOurVisionArea />
            <AboutPortfolio />
        </>
    );
};

export default AboutMainArea;