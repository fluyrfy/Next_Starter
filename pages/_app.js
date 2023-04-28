import 'styles/globals.scss';
import Layout from 'components/layouts/Layout';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<title>豈止數位設計</title>
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />
			<Analytics />
		</Layout>
	);
}

export default MyApp;
