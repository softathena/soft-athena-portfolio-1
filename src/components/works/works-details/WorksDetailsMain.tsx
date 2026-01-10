import BreadcrumbOne from '@/components/common/Breadcrumb/BreadcrumbOne';
import portfolio_data from '@/data/portfolio-data';
import { TPortfolio } from '@/interFace/type';
import React from 'react';
import breadcrumbImg from '../../../../public/assets/imgs/breadcrumb/breadcrumb-bg-07.png';
import PortfolioListDetails from './PortfolioListDetails';

const WorksDetailsMain = ({ id }: { id: number }) => {
    const works: TPortfolio | undefined = portfolio_data.find((item) => item.id == id);
    return (
        <>
            {/* breadcrumb component */}
            <BreadcrumbOne
                title="Explore Our Extensive Portfolio"
                subTitle="PORTFOLIO DETAILS LIST"
                rowWrapperClass="col-xxl-6 col-xl-6 col-lg-7 col-md-9 col-sm-10"
                breadcrumbImg={breadcrumbImg}
            />
            {/* portfolio list */}
            <PortfolioListDetails works={works} />
            {/* -- Section divider -- */}
            <div className="section__divider">
                <hr />
            </div>
        </>
    );
};

export default WorksDetailsMain;