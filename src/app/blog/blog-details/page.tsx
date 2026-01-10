
import BlogDetailsMain from '@/components/blog/blog-details/BlogDetailsMain';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/Wrapper';
import FooterSection from '@/layout/footer/FooterSection';
import HeaderMain from '@/layout/header/HeaderMain';
import React from 'react';

const page = () => {
    const id = 1;
    return (
        <>
            <MetaData pageTitle="Blog Details">
                <Wrapper>
                    <HeaderMain />
                    <main>
                        <BlogDetailsMain id={id} />
                    </main>
                    <FooterSection/>
                </Wrapper>
            </MetaData>
        </>
    );
};

export default page;