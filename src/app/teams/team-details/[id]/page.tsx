import TeamDetailsArea from '@/components/team/team-details/TeamDetailsArea';
import MetaData from '@/hooks/useMetaData';
import FooterSection from '@/layout/footer/FooterSection';
import HeaderMain from '@/layout/header/HeaderMain';
import Wrapper from '@/layout/Wrapper';
import React from 'react';

const TeamDetailsMain = ({ params }: { params: { id: number } }) => {
    const id = params.id;
    return (
        <>
           <MetaData pageTitle="Team Details">
                <Wrapper>
                    <HeaderMain />
                    <main>
                        <TeamDetailsArea id={id}/>
                    </main>
                    <FooterSection />
                </Wrapper>
            </MetaData>
        </>
    );
};

export default TeamDetailsMain;