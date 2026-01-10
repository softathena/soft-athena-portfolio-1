import ServiceDetailsMain from '@/components/service/service-details/ServiceDetailsMain';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/Wrapper';
import FooterSection from '@/layout/footer/FooterSection';
import HeaderMain from '@/layout/header/HeaderMain';
import React from 'react';

const page = ({ params }: { params: { id: number } }) => {
    const id = params.id;
    return (
        <>
            <MetaData pageTitle="Service Details">
                <Wrapper>
                    <HeaderMain/>
                    <main>
                        <ServiceDetailsMain id={id} />
                    </main>
                    <FooterSection />
                </Wrapper>
            </MetaData>
        </>
    );
};

export default page;