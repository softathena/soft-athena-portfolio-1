"use client";
import React, { useState } from 'react';
import services_data from '@/data/services-data';
import { TService } from '@/interFace/type';
import ContactServiceForm from '@/form/ContactServiceForm';
import TabOneContent from './tab-content/TabOneContent';
import ServiceSidebarWiget from './ServiceSidebarWiget';
import TabTwoContent from './tab-content/TabTwoContent';
import TabThreeContent from './tab-content/TabThreeContent';
import TabFourContent from './tab-content/TabFourContent';
import TabFiveContent from './tab-content/TabFiveContent';
import TabSixContent from './tab-content/TabSixContent';

const ServiceDetailsArea = ({ id }: { id: number }) => {
    const service: TService | undefined = services_data.find((item) => item.id == id);
    
    const tabs = [
        { id: 'view', title: 'Mobile Application', icon: 'icon-application', content: <TabOneContent/> },
        { id: 'web', title: 'Web Development', icon: 'icon-design', content: <TabTwoContent /> },
        { id: 'dotnet', title: '.NET Development', icon: 'icon-analysis', content: <TabSixContent/> },
        { id: 'speed', title: 'UX/UI Design', icon: 'icon-ux-design', content: <TabThreeContent /> },
        { id: 'google', title: 'Speed Optimized', icon: 'icon-rocket', content: <TabFourContent /> },
        { id: 'strategy', title: 'Cloud Deployment', icon: 'icon-trophy-02', content: <TabFiveContent /> },
       
    ];

    const defaultTab = tabs.find((tab) => tab.title === service?.title)?.title || tabs[0].title;
    const [activeTab, setActiveTab] = useState(defaultTab);

    return (
        <section className="bd__service-area section-space">
            <div className="container">
                <div className="row g-5">
                    <div className="col-xl-4 col-lg-5">
                        <div className="service__widget">
                            <div className="service__widget-item mb-30">
                                <div className="service__widget-tab underline-full">
                                    <h5>Categories </h5>
                                    <ul id="myTab" role="tablist">
                                        {tabs.map((tab) => (
                                            <li role="presentation" key={tab.id}>
                                                <button
                                                    className={activeTab === tab.title ? 'active' : ''}
                                                    id={`${tab.id}-tab`}
                                                    type="button"
                                                    role="tab"
                                                    aria-controls={tab.id}
                                                    aria-selected={activeTab === tab.title}
                                                    onClick={() => setActiveTab(tab.title)}
                                                >
                                                    <span>
                                                        <i className={tab.icon}></i>
                                                    </span>
                                                    {tab.title}
                                                    <i className="icon-arrow-small"></i>
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="service__widget-item mb-30">
                                <div className="service__contact underline-full">
                                    <h5>Get in Touch </h5>
                                    <ContactServiceForm />
                                </div>
                            </div>
                            <ServiceSidebarWiget />
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-7 order-first order-lg-last">
                        <div className="tab-content wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s" id="myServiceContent">
                            {tabs.map((tab) =>
                                tab.content && (
                                    <div
                                        key={tab.id}
                                        className={`tab-pane fade ${activeTab === tab.title ? 'show active' : ''}`}
                                        id={tab.id}
                                        role="tabpanel"
                                        aria-labelledby={`${tab.id}-tab`}
                                    >
                                        {tab.content}
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetailsArea;
