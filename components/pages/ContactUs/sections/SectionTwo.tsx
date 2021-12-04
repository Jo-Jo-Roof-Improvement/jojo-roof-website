import { WideStrip } from '@components/common/strips/WideStrip';
import { ContactFormSection } from '../ContactFormSection';
import { ContactInfo } from '../ContactInfo';


export const SectionTwo = () => {
    return (
        <WideStrip maxHeight="" className="flex flex-col lg:flex-row pl-10 pr-10 pb-10">
            <div className="flex flex-col justify-center md:justify-left w-3/4 md:w-3/4 lg:w-1/2 lg:mr-10">
                <ContactFormSection />
            </div>
            <div className="flex flex-col md:justify-right w-full md:w-2/3 lg:w-2/3 lg:ml-10 md:pl-0 md:pr-0 lg:pl-10 lg:pr-10">
                <ContactInfo />
            </div>
        </WideStrip>
    );
};
