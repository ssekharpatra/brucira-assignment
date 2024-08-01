import Image from "next/image";
import Link from "next/link";

const Logo = ({ maxWidth = "max-w-[163px]" }) => {
	return (
		<Link href="/" className={`${maxWidth} inline-block`}>
			<Image
				src="/images/logo.png"
				alt="funnelstory-logo"
				width={500}
				height={500}
				className="w-full h-auto"
				priority
			/>
		</Link>
	);
};

export default Logo;
