import { WideStrip } from '@components/common/strips/WideStrip';
import { TitleTextBlock } from '../TitleTextBlock';


export const InfoStrip_ProfessionalRestoration = () => {
    return (
        <WideStrip align="center" height="200px">
            <div className="items-center w-full">
                <TitleTextBlock marginTop="" variant="h2" title="Professional Roof Restoration" className="pl-2 pr-2" />
                <TitleTextBlock
                    variant="h2"
                    title="at unbeatable price and quality!"
                    className="pl-2 pr-2"
                    marginTop="" />
            </div>
        </WideStrip>
    );
};
