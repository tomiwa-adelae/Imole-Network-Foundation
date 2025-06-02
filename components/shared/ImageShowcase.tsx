interface Props {
	image: string;
	title?: string;
}

export const ImageShowcase = ({ image, title }: Props) => {
	return (
		<div
			className="bg-scroll bg-no-repeat bg-cover bg-center min-h-[70vh] py-24 flex items-center justify-center relative"
			style={{
				backgroundImage: `url(${image})`,
			}}
		>
			<div className="grid container h-full text-white">
				<div className="z-20 container">
					{title && (
						<h1 className="text-5xl lg:text-7xl font-bold text-center">
							{title}
						</h1>
					)}
				</div>
			</div>
			<div
				className={`absolute inset-0 ${
					title ? "bg-black/70" : "bg-black/20"
				}`}
			/>
		</div>
	);
};
