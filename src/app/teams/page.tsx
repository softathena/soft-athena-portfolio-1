import BlogMainArea from '@/components/blog/BlogMainArea';
import TeamMainArea from '@/components/team/TeamMain';
import MetaData from '@/hooks/useMetaData';
import FooterSection from '@/layout/footer/FooterSection';
import HeaderMain from '@/layout/header/HeaderMain';
import Wrapper from '@/layout/Wrapper';
import React from 'react';

const TeamMain = () => {
    return (
        <>
           <MetaData pageTitle="Teams">
                <Wrapper>
                    <HeaderMain />
                    <main>
                        <TeamMainArea />
                    </main>
                    <FooterSection />
                </Wrapper>
            </MetaData>
        </>
    );
};

export default TeamMain;