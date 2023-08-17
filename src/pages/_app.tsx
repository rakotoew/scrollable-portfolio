import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { NextIntlProvider } from "next-intl";

export default function App({ Component, pageProps, router }: AppProps) {
    return (
        <>
            <Head>
                <title>Ewan Rakotoanosy</title>

                <meta name="subject" content="Portfolio Ewan Rakotoanosy" />
                <meta name="description" content="Portfolio d'Ewan Rakotoanosy, présentant ses qualités de développeurs" />
                <meta name="author" content="rakotoew" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="www.rakotoew.fr" />
                <meta property="og:title" content="Ewan Rakotoanosy's portfolio" />
                <meta property="og:description" content="Portfolio of Ewan Rakotoanosy, a FullStack developper" />
                <meta property="og:image" content="/assets/banner.png" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="Ewan Rakotoanosy's portfolio" />
                <meta property="twitter:title" content="Ewan Rakotoanosy's portfolio" />
                <meta property="twitter:description" content="Portfolio of Ewan Rakotoanosy, a FullStack developper" />
                <meta property="twitter:image" content="/assets/banner.png" />

                <meta httpEquiv={"Content-Type"} content={"text/html; charset=utf-8"} />
                <meta httpEquiv={"X-Content-Type-Options"} content={"nosniff"} />
                <meta httpEquiv={"X-Frame-Options"} content={"SAMEORIGIN"} />
                <meta httpEquiv={"X-XSS-Protection"} content={"1; mode=block"} />
            </Head>
            <NextIntlProvider messages={pageProps.messages}>
                <Component {...pageProps} key={router.route} />
            </NextIntlProvider>
        </>
    );
}
