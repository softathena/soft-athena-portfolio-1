import WorksDetailsMain from '@/components/works/works-details/WorksDetailsMain';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/Wrapper';
import FooterSection from '@/layout/footer/FooterSection';
import HeaderMain from '@/layout/header/HeaderMain';
import React from 'react';

const WorksDetails = () => {
    const id = 1;
    return (
        <>
            <MetaData pageTitle="Works Details">
                <Wrapper>
                    <HeaderMain />
                    <main>
                        <WorksDetailsMain id={id} />
                    </main>
                    <FooterSection />
                </Wrapper>
            </MetaData>
        </>
    );
};

export default WorksDetails;
