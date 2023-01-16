import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { NextIntlProvider } from "next-intl";

export default function App({ Component, pageProps, router }: AppProps) {
    return (
        <>
            <Head>
                <title>Ewan Rakotoanosy</title>

                <meta name="subject" content="REPLACE_ME" />
                <meta name="description" content="REPLACE_ME" />
                <meta name="author" content="rakotoew" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="www.rakotoew.fr" />
                <meta property="og:title" content="Ewan Rakotoanosy portfolio" />
                <meta property="og:description" content="REPLACE_ME" />
                <meta property="og:image" content="/assets/banner.png" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="REPLACE_ME" />
                <meta property="twitter:title" content="REPLACE_ME" />
                <meta property="twitter:description" content="REPLACE_ME" />
                <meta property="twitter:image" content="/assets/banner.png" />
            </Head>
            <NextIntlProvider messages={pageProps.messages}>
                <Component {...pageProps} key={router.route} />
            </NextIntlProvider>
        </>
    );
}
