import { Footer } from './footer/Footer';
import { PageHead } from './head/PageHead';
import { NavigationBar } from './navigationBar/NavigationBar';
import { FreeQuoteToday } from './components/FreeQuoteToday';
import Widget from 'palavyr-chat-widget';
import 'palavyr-chat-widget/dist/styles.css';

export interface LayoutProps {
    children: React.ReactNode;
    pageTitle: string;
}

const test = 'https://staging.widget.palavyr.com/widget?key=cbb41bf2-a8ee-4e77-b0f8-2e493e5ab6a4';

const jojo = 'https://staging.widget.palavyr.com/widget?key=e7e3f1cc-0db9-438a-ab94-66de64a77c0c';

export const Layout = ({ children, pageTitle }: LayoutProps) => {
    return (
        <>
            <PageHead pageTitle={pageTitle} />
            <FreeQuoteToday />
            <NavigationBar imgSrc="/brand-images/logo.png" />
            <div style={{ height: '105px' }} className="w-full h-auto"></div>
            {children}
            <Footer />
            <Widget src={jojo} resizable />
        </>
    );
};
