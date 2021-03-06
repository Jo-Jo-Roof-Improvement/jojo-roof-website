import { TextBlock } from '@components/common/text/TextBlock';

import { TitleTextBlock } from '../Home/TitleTextBlock';
import { JoList } from '@components/common/lists/JoList';
import { OperatingHoursItem } from './OperatingHoursItem';
import { PHONENUMBER } from 'company';
import { PhoneText } from '@components/layout/navigationBar/PhoneText';

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
            <TitleTextBlock className="mt-10 pb-5" title="Speak to us directly!" variant="h4" />
            <TextBlock className="text-gray-400" align="center" variant="h6">
                We are committed to making sure you feel both comfortable and confident when deciding to hire our
                services. Trust is our priority. Contact us to set up a free, no-obligation consultation, and we will be
                happy to answer any questions you may have.
            </TextBlock>
            <TitleTextBlock title="Jojo Roof Improvement" variant="h4" className="mb-10" />
            <TextBlock style={{ paddingBottom: '2rem', paddingTop: '2rem' }} className="text-gray-400" align="center">
                Melbourne, Victoria, Australia
            </TextBlock>
            <PhoneText
                phoneNumber={PHONENUMBER}
                className="text-white text-center"
                style={{
                    fontSize: '22pt',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '2rem',
                }}
            />
            <div>
                <TitleTextBlock align="center" title="Business Hours" variant="h4" gutterBottom />
                <JoList className="text-white text-center" paddingBottom="" paddingLeft="">
                    {businessHours.map((item: { day: string; hours: string }, index) => {
                        return <OperatingHoursItem key={index} item={item} />;
                    })}
                </JoList>
            </div>
        </>
    );
};
