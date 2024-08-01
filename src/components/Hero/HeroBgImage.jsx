import Image from "next/image";

const HeroBgImage = () => {
	return (
		<Image
			src="/images/hero/bg-1.png"
			alt=""
			width={3000}
			height={3000}
			className="w-full h-auto min-h-[928px] absolute top-0 right-0"
			priority
			quality={100}
		/>
	);
};

export default HeroBgImage;
