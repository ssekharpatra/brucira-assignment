import Image from "next/image";

const HeroImage = () => {
	return (
		<div className="w-11/12 mx-auto max-w-screen-xl relative">
			<Image
				src="/images/hero/dashboard.png"
				alt="dashboard"
				width={5000}
				height={5000}
				className="w-full"
				priority
				quality={100}
			/>
		</div>
	);
};

export default HeroImage;
