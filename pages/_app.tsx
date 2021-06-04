import { StrictMode } from 'react';

import Appbar from '../components/Appbar';

import '../styles/global.css';

function MyApp({ Component, pageProps }) {
	return (
		<StrictMode>
			<Appbar />
			<Component {...pageProps} />
		</StrictMode>
	);
}

export default MyApp;
