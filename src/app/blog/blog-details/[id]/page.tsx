
import BlogDetailsMain from '@/components/blog/blog-details/BlogDetailsMain';
import MetaData from '@/hooks/useMetaData';
import FooterSection from '@/layout/footer/FooterSection';
import HeaderMain from '@/layout/header/HeaderMain';
import React from 'react';

const page = ({ params }: { params: { id: number } }) => {
    const id = params.id
    return (
        <>
            <MetaData pageTitle="Blog Details">
                <HeaderMain/>
                <main>
                    <BlogDetailsMain id={id}/>
                </main>
               <FooterSection/>
            </MetaData>
        </>
    );
};

export default page;