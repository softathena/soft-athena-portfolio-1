import React from 'react';
import BreadcrumbOne from '../common/Breadcrumb/BreadcrumbOne';
import PortfolioCta from '../home/PortfolioCta';
import breadcrumbBg from '../../../public/assets/imgs/breadcrumb/breadcrumb-bg-07.png';
import TeamSection from '../home/TeamSection';

const TeamMainArea = () => {
    return (
        <>
            <>
            <BreadcrumbOne title='Know About Myself' subTitle='TEAM DETAILS' rowWrapperClass="col-xxl-8 col-xl-8 col-lg-8" breadcrumbImg={breadcrumbBg} />
             {/* blog list */}
             <div className='mb-100'></div>
             <TeamSection/>
             <PortfolioCta/>
        </>
        </>
    );
};

export default TeamMainArea;