import Head from 'next/head';
import ThemeView from '../components/ThemeView';

export default function Home() {
	return (
		<div className="">
			<Head>
				<title>Sung's personal website</title>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital@0;1&family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<main className="">
				<ThemeView />
			</main>
		</div>
	);
}
