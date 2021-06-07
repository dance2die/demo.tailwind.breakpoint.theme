import Link from 'next/link';

// Appbars: https://material.io/components/app-bars-top#anatomy
// Nav Drawer: https://material.io/components/navigation-drawer#anatomy
function Appbar() {
	return (
		<header className="h-16">
			<div className="flex h-full justify-between items-center">
				<section className="flex justify-between items-center">
					<button className="h-12 w-12 grid place-items-center" aria-label="Open navigation menu">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-8 w-8"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={1}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
						<p className="sr-only">Menu</p>
					</button>
					<span className="mdc-top-app-bar__title">sung.codes</span>
				</section>
			</div>
		</header>
	);
}

export default Appbar;
