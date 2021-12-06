import { Footer } from './footer/Footer';
import { PageHead } from './head/PageHead';
import { NavigationBar } from './navigationBar/NavigationBar';
import { FreeQuoteToday } from './components/FreeQuoteToday';
import Widget from 'palavyr-chat-widget';
import 'palavyr-chat-widget/dist/styles.css';

export interface LayoutProps {
    children: React.ReactNode;
    pageTitle: string;
    showWidget?: boolean;
}

const jojo = 'https://widget.palavyr.com/widget?key=e7e3f1cc-0db9-438a-ab94-66de64a77c0c';

export const Layout = ({ children, pageTitle, showWidget = true }: LayoutProps) => {
    return (
        <>
            <PageHead pageTitle={pageTitle} />
            <FreeQuoteToday />
            <NavigationBar imgSrc="/brand-images/logo.png" />
            <div style={{ height: '105px' }} className="w-full h-auto"></div>
            {children}
            <Footer />
            {showWidget && <Widget src={jojo} resizable />}
        </>
    );
};
