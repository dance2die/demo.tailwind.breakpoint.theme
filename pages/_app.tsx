import { StrictMode } from 'react';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
	return (
		<StrictMode>
			<Component {...pageProps} />
		</StrictMode>
	);
}

export default MyApp;
