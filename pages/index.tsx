import Head from 'next/head';
import ThemeView from '../components/ThemeView';

export default function Home() {
	return (
		<div className="">
			<Head>
				<title>Sung's personal website</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="">
				<ThemeView />
			</main>
		</div>
	);
}
