import { StrictMode } from 'react';

import Appbar from '../components/Appbar';

import '../styles/global.css';

function MyApp({ Component, pageProps }) {
	return (
		<StrictMode>
			<div className="">
				<Appbar />
				<Component {...pageProps} />
			</div>
		</StrictMode>
	);
}

export default MyApp;
