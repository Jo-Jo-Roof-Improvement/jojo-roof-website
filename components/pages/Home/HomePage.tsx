import styles from './HomePage.module.css';
import { Layout } from '@components/layout/Layout';

export const HomePage = () => {
    return (
        <Layout pageTitle="Jo Jos - Home">
            <div className={styles.container}>Some Test Content</div>
        </Layout>
    );
};
