
import Image from 'next/image';
import React from 'react';
import { TTeam } from '@/interFace/type';
import team_data from '@/data/team-data';
import BreadcrumbOne from '@/components/common/Breadcrumb/BreadcrumbOne';
import breadcrumbBg from '../../../../public/assets/imgs/breadcrumb/breadcrumb-bg-07.png';
import ExperienceCount from './ExperienceCount';
import Link from 'next/link';

const TeamDetailsArea = ({ id }: { id: number }) => {
    const team: TTeam | undefined = team_data.find((item) => item.id == id);
    return (
        <>
            {/* bradcrumb area */}
            <BreadcrumbOne title='Know About Myself' subTitle='TEAM DETAILS' rowWrapperClass="col-xxl-8 col-xl-8 col-lg-8" breadcrumbImg={breadcrumbBg} />
            {/* bradcrumb area end */}
            <section className="bd-team-details__area section-space">
                <div className="container">
                    <div className="team__details-wrapper">
                        <div className="row g-5 align-items-center">
                            <div className="col-xl-4 col-lg-4 col-md-5">
                                <div className="team__details-thumb bg-solid">
                                    {team?.image &&
                                        <Image src={team?.image} style={{ width: "100%", height: "100%" }} alt="image not found" />
                                    }
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-7">
                                <div className="team__details-content">
                                    <div className="team__details-author">
                                        <h3 className="team__details-title mb-2" >{team?.authorName}</h3>
                                        <span className="team__details-designation">{team?.desination}</span> <br/>
                                        <span className="team__details-designation">Years Of Experience : {team?.yearsOfExperience} Years</span>
                                    </div>
                                    <p>As a {team?.bio}</p>
                                    {/* Social icons */}
                                    <div className="theme__social">
                                        {team?.socialIcon?.map((social) => (
                                            <Link key={social.id} href={social.url}>
                                                <i className={social.icon}></i>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* -- counter area start -- */}
            <section className="bd-counter__area section-space theme-bg-secondary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section__title-wrapper section__title-space">
                                <span className="section__subtitle bg-field">{team?.expart} experience</span>
                                <h2 className="section__title">{team?.expart} Skills</h2>
                            </div>
                        </div>
                    </div>
                    <ExperienceCount team={team}/>
                </div>
            </section>
        </>
    );
};

export default TeamDetailsArea;