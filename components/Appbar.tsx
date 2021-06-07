// import { useReducer } from 'react';
import Link from 'next/link';
import create from 'zustand';

interface OpenState {
	isOpen: boolean;
	toggle: () => void;
}
const useOpenStore = create<OpenState>((set) => ({
	isOpen: false,
	toggle: () => set((state) => ({ isOpen: !state.isOpen }))
}));

const Title = () => <span className="text-md font-thin">sung.codes</span>;
const Hamburger = () => {
	const isOpen = useOpenStore((state) => state.isOpen);
	const toggle = useOpenStore((state) => state.toggle);

	return isOpen ? (
		<button onClick={toggle} className="h-12 w-12 grid place-items-center" aria-label="Open navigation menu">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-8 w-8"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
			</svg>
			<p className="sr-only">Menu</p>
		</button>
	) : (
		<button onClick={toggle} className="h-12 w-12 grid place-items-center" aria-label="Open navigation menu">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-8 w-8"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
			</svg>
			<p className="sr-only">Menu</p>
		</button>
	);
};

/**
 * Shown when a user clicks on Appbar button (Hamburger menu)
 */
function NavigationDrawer() {
	return (
		<nav className="absolute h-screen w-80 bg-gray-300 top-0 left-0 flex flex-col  divide-solid">
			<header className="flex items-center">
				<Hamburger />
				<Title />
			</header>
			<ul>
				<li className="flex flex-col">
					<Link href="/">Home</Link>
					<Link href="/about">About</Link>
				</li>
			</ul>
		</nav>
	);
}

// Appbars: https://material.io/components/app-bars-top#anatomy
// Nav Drawer: https://material.io/components/navigation-drawer#anatomy
function Appbar() {
	// const [ { isOpen }, toggle ] = useReducer((state) => ({ isOpen: !state.isOpen }), { isOpen: true });
	const isOpen = useOpenStore((state) => state.isOpen);

	return (
		<header className="h-16 relative">
			<div className="flex h-full justify-between items-center">
				<section className="flex justify-between items-center">
					<Hamburger />
					<Title />
				</section>
			</div>
			{isOpen && <NavigationDrawer />}
		</header>
	);
}

export default Appbar;
