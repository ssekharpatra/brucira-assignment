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
			className={`px-4 py-3 rounded-lg ${bgColor} ${textColor} ${className}`}
			{...props}
			type={type}
		>
			{children}
		</button>
	);
};

export default Button;
