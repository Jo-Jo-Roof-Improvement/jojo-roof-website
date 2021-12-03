import { WideStrip } from '@components/common/strips/WideStrip';
import { Layout } from '@components/layout/Layout';
import { COMPANYNAME } from 'company';
import React from 'react';
import { ContactFormSection } from './ContactFormSection';
import { SectionOne } from './sections/SectionOne';
import { SectionThree } from './sections/SectionThree';
import { ContactInfo } from './ContactInfo';
import FloatingWhatsApp from 'react-floating-whatsapp';

export const ContactUsPage = () => {
    return (
        <Layout pageTitle={`${COMPANYNAME} - Contact Us`}>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <FloatingWhatsApp
                darkMode
                accountName="Jo Jo's Roof Imrpovement"
                phoneNumber="+61433881760"
                allowClickAway
                avatar="brand-images/logo.png"
                notification
                notificationDelay={60000} // 1 minute
                notificationSound
                height={500}
            />
        </Layout>
    );
};

export const SectionTwo = () => {
    return (
        <WideStrip maxHeight="" className="flex flex-col lg:flex-row pl-10 pr-10 pb-10">
            <div className="flex flex-col justify-center md:justify-left w-3/4 md:w-2/3 lg:w-1/2 lg:mr-10">
                <ContactFormSection />
            </div>
            <div className="flex flex-col md:justify-right w-full md:w-1/2 lg:w-2/3 lg:ml-10">
                <ContactInfo />
            </div>
        </WideStrip>
    );
};
