import Image from "next/image";
import { HeroClients, HeroImage, HeroBgImage } from "../index";

const Hero = () => {
	return (
		<section className="bg-[#F9F7FE] relative">
			<HeroBgImage />
			<div className="w-11/12 mx-auto max-w-[850px] flex flex-col items-center justify-center gap-y-9 text-center pt-40 relative mb-20">
				<h1 className="text-6xl font-semibold text-[#160E64] relative">
					<span className="absolute top-0 right-3">
						<Image
							src="/images/hero/star.png"
							alt=""
							width={500}
							height={500}
							priority
							className="w-4"
						/>
					</span>
					Let your product data drive revenue decisions.
					<span className="absolute -bottom-3 left-[30.5%]">
						<Image
							src="/images/hero/curved-line.png"
							alt=""
							width={1000}
							height={100}
							priority
							className="w-full h-auto max-w-[442px]"
						/>
					</span>
				</h1>
				<h2 className="font-medium text-[#160E64] opacity-60">
					FunnelStory is a funnel intelligence platform designed to give
					go-to-market leaders complete visibility into their trial funnels to
					accelerate their product-led strategy. 
				</h2>
				<form>
					<div className="w-full rounded-[20px] overflow-hidden bg-white p-2">
						<input
							type="email"
							placeholder="Your work email"
							className="border-none outline-none px-3"
							required
						/>
						<button
							type="submit"
							className="bg-[#5F53D4] text-white px-7 py-3.5 rounded-[20px]"
						>
							Request Demo
						</button>
					</div>
				</form>
			</div>
			<HeroImage />
			<HeroClients />
		</section>
	);
};

export default Hero;
