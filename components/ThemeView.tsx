// https://tailwindcss.com/docs/configuration#referencing-in-java-script
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config.js';

const { theme } = resolveConfig(tailwindConfig);

// const Box = ({ width, height, name, value }) => <div className={`${width} ${height} ${value}`}>{name}</div>;
// const ThemeBox = ({ name, value }) => <Box width="w-1/3" height="h-24" name={name} value={value} />;

console.log({ theme });

function ThemeView() {
	return (
		<div className=" w-8/12 mx-auto flex flex-col gap-y-10 bg-gray-200 p-12">
			<article>
				<section className="flex w-full h-full">
					<div className="flex flex-col px-4 py-3 justify-between w-1/3 h-24 bg-primary">
						<span className="text-on-primary">primary</span>
						<div className="flex justify-between">
							<span className="bg-on-primary w-6 grid place-items-center rounded-full">1</span>
							<span className="text-on-primary">{theme.colors['primary']}</span>
						</div>
					</div>
					<div className="flex flex-col px-4 py-3 justify-between w-1/3 h-24 bg-primary-light">
						<span className="text-on-primary">primary-light</span>
						<div className="flex justify-between">
							<span className="bg-on-primary w-6 grid place-items-center rounded-full">2</span>
							<span className="text-on-primary">{theme.colors['primary-light']}</span>
						</div>
					</div>
					<div className="flex flex-col px-4 py-3 justify-between w-1/3 h-24 bg-primary-dark">
						<span className="text-on-primary">primary-dark</span>
						<div className="flex justify-between">
							<span className="bg-on-primary w-6 grid place-items-center rounded-full">3</span>
							<span className="text-on-primary">{theme.colors['primary-dark']}</span>
						</div>
					</div>
				</section>
				<section className="flex w-full h-full">
					<div className="flex flex-col px-4 py-3 justify-between w-1/3 h-24 bg-secondary">
						<span className="text-on-secondary">secondary</span>
						<div className="flex justify-between">
							<span className="bg-on-secondary text-on-primary w-6 grid place-items-center rounded-full">
								4
							</span>
							<span className="text-on-secondary">{theme.colors['secondary']}</span>
						</div>
					</div>
					<div className="flex flex-col px-4 py-3 justify-between w-1/3 h-24 bg-secondary-light">
						<span className="text-on-secondary">secondary-light</span>
						<div className="flex justify-between">
							<span className="bg-on-secondary text-on-primary w-6 grid place-items-center rounded-full">
								5
							</span>
							<span className="text-on-secondary">{theme.colors['secondary-light']}</span>
						</div>
					</div>
					<div className="flex flex-col px-4 py-3 justify-between w-1/3 h-24 bg-secondary-dark">
						<span className="text-on-secondary">secondary-dark</span>
						<div className="flex justify-between">
							<span className="bg-on-secondary text-on-primary w-6 grid place-items-center rounded-full">
								6
							</span>
							<span className="text-on-secondary">{theme.colors['secondary-dark']}</span>
						</div>
					</div>
				</section>
			</article>
			<section className="flex w-full h-full divide-x-2">
				<div className="flex flex-col px-4 py-3 justify-between w-1/3 h-24 bg-background">
					<span className="text-on-secondary">background</span>
					<div className="flex justify-between">
						<span className="bg-on-secondary text-on-primary w-6 grid place-items-center rounded-full">
							7
						</span>
						<span className="text-on-secondary">{theme.colors['background']}</span>
					</div>
				</div>
				<div className="flex flex-col px-4 py-3 justify-between w-1/3 h-24 bg-surface">
					<span className="text-on-secondary">secondary-light</span>
					<div className="flex justify-between">
						<span className="bg-on-secondary text-on-primary w-6 grid place-items-center rounded-full">
							8
						</span>
						<span className="text-on-secondary">{theme.colors['surface']}</span>
					</div>
				</div>
				<div className="flex flex-col px-4 py-3 justify-between w-1/3 h-24 bg-error">
					<span className="text-on-primary">error</span>
					<div className="flex justify-between">
						<span className="bg-on-primary text-on-secondary w-6 grid place-items-center rounded-full">
							9
						</span>
						<span className="text-on-primary">{theme.colors['error']}</span>
					</div>
				</div>
			</section>

			<article>
				<section className="flex w-full h-full divide-x-2">
					<div className="flex flex-col px-4 py-3 justify-between w-1/2 h-24 bg-on-primary">
						<span className="text-on-secondary">on-primary</span>
						<div className="flex justify-between">
							<span className="bg-on-secondary text-on-primary w-6 grid place-items-center rounded-full">
								10
							</span>
							<span className="text-on-secondary">{theme.colors['on-primary']}</span>
						</div>
					</div>
					<div className="flex flex-col px-4 py-3 justify-between w-1/2 h-24 bg-on-secondary">
						<span className="text-on-primary">on-secondary</span>
						<div className="flex justify-between">
							<span className="bg-on-primary text-on-secondary w-6 grid place-items-center rounded-full">
								11
							</span>
							<span className="text-on-primary">{theme.colors['on-secondary']}</span>
						</div>
					</div>
				</section>

				<section className="flex w-full h-full divide-x-2">
					<div className="flex flex-col px-4 py-3 justify-between w-1/2 h-24 bg-on-background">
						<span className="text-on-primary">on-background</span>
						<div className="flex justify-between">
							<span className="bg-on-secondary text-on-primary w-6 grid place-items-center rounded-full">
								12
							</span>
							<span className="text-on-primary">{theme.colors['on-background']}</span>
						</div>
					</div>
					<div className="flex flex-col px-4 py-3 justify-between w-1/2 h-24 bg-on-surface">
						<span className="text-on-primary">on-surface</span>
						<div className="flex justify-between">
							<span className="bg-on-primary text-on-surface w-6 grid place-items-center rounded-full">
								13
							</span>
							<span className="text-on-primary">{theme.colors['on-surface']}</span>
						</div>
					</div>
					<div className="flex flex-col px-4 py-3 justify-between w-1/2 h-24 bg-on-error">
						<span className="text-on-secondary">on-error</span>
						<div className="flex justify-between">
							<span className="bg-on-secondary text-on-error w-6 grid place-items-center rounded-full">
								14
							</span>
							<span className="text-on-secondary">{theme.colors['on-error']}</span>
						</div>
					</div>
				</section>
			</article>
		</div>
	);
}

export default ThemeView;
