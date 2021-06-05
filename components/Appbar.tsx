import Link from 'next/link';

function Appbar() {
	return (
		<header className="mdc-top-app-bar">
			<div className="mdc-top-app-bar__row">
				<section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
					<button className="h-3 w-3" aria-label="Open navigation menu">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-1 w-1"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
						<p className="sr-only">Menu</p>
					</button>
					<span className="mdc-top-app-bar__title">Page title</span>
				</section>
				<section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
					<button
						className="material-icons mdc-top-app-bar__action-item mdc-icon-button"
						aria-label="Favorite"
					>
						favorite
					</button>
					<button className="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Search">
						search
					</button>
					<button
						className="material-icons mdc-top-app-bar__action-item mdc-icon-button"
						aria-label="Options"
					>
						more_vert
					</button>
				</section>
			</div>
		</header>
	);
}

export default Appbar;
