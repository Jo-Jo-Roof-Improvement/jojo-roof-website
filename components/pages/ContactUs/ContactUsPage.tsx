import { Layout } from '@components/layout/Layout';
import { COMPANYNAME } from 'company';

import { SectionOne } from './sections/SectionOne';
import { SectionThree } from './sections/SectionThree';
import FloatingWhatsApp from 'react-floating-whatsapp';
import { SectionTwo } from './sections/SectionTwo';

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
                styles={{ marginRight: '5rem' }}
            />
        </Layout>
    );
};
