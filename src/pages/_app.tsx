import {AppProps} from 'next/app';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({Component, pageProps}: AppProps): JSX.Element {
    return <div>
        <Head>
            <title>My website</title>
            <link key={1} rel="icon" href="/favicon.ico"/>
        </Head>
        <Component {...pageProps} />
    </div>;
}

export default MyApp;