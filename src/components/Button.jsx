const Button = ({
	children,
	type = "button",
	bgColor = "bg-[#5F53D4]",
	textColor = "text-white",
	className = "",
	...props
}) => {
	return (
		<button
			className={`px-4 py-3 rounded-lg duration-300 ease-in-out ${bgColor} ${textColor} ${className} ${
				bgColor !== "bg-transparent" ? "hover:bg-[#4d3ed8]" : "hover:underline"
			}`}
			{...props}
			type={type}
		>
			{children}
		</button>
	);
};

export default Button;
