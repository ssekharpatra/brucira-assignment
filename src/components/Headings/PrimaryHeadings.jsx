const PrimaryHeadings = ({
	heading,
	subHeading,
	tag = "",
	textTheme = "light",
}) => {
	return (
		<div className="relative w-full max-w-[726px] mx-auto text-center">
			{tag !== "" && <span className="text-[#160E64] opacity-60">{tag}</span>}
			<h2
				className={`mb-6 text-5xl leading-[56px] font-semibold ${
					textTheme === "light" ? "text-[#160E64]" : "text-white"
				}`}
			>
				{heading}
			</h2>
			<p
				className={`opacity-60 ${
					textTheme === "light" ? "text-[#160E64]" : "text-white"
				}`}
			>
				{subHeading}
			</p>
		</div>
	);
};

export default PrimaryHeadings;
