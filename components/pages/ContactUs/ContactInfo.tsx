import { TextBlock } from '@components/common/text/TextBlock';
import React from 'react';
import { TitleTextBlock } from '../Home/TitleTextBlock';
import FloatingWhatsApp from 'react-floating-whatsapp';
import { JoList } from '@components/common/lists/JoList';
import { OperatingHoursItem } from './OperatingHoursItem';


export const ContactInfo = () => {
    const businessHours = [
        { day: 'Monday', hours: '9:00 AM - 5:00 PM' },
        { day: 'Tuesday', hours: '9:00 AM - 5:00 PM' },
        { day: 'Wednesday', hours: '9:00 AM - 5:00 PM' },
        { day: 'Thursday', hours: '9:00 AM - 5:00 PM' },
        { day: 'Friday', hours: '9:00 AM - 5:00 PM' },
        { day: 'Saturday', hours: '9:00 AM - 5:00 PM' },
        { day: 'Sunday', hours: 'Closed' },
    ];

    return (
        <>
            <TitleTextBlock className="pb-5" title="Speak to us directly!" variant="h4" />
            <TextBlock className="text-gray-400" align="center">
                No matter why you hire us, we are committed to making sure we give 100 percent to each job we take on.
                Contact us to set up a no-obligation consultation today!
            </TextBlock>

            <div>
                <TitleTextBlock align="center" title="Business Hours" variant="h4" gutterBottom />
                <JoList className="text-white text-center" paddingBottom="" paddingLeft="">
                    {businessHours.map((item: { day: string; hours: string; }, index) => {
                        return <OperatingHoursItem key={index} item={item} />;
                    })}
                </JoList>
            </div>
            {/* <FloatingWhatsApp
                darkMode
                accountName="Jo Jo's Roof Imrpovement"
                phoneNumber="+61433881760"
                allowClickAway
                avatar="brand-images/logo.png"
                notification
                notificationDelay={60000} // 1 minute
                notificationSound
                height={500} /> */}
        </>
    );
};
