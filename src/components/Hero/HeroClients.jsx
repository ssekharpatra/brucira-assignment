import Image from "next/image";

const HeroClients = () => {
	return (
		<div className="w-11/12 mx-auto max-w-screen-xl text-center py-20 border-b-[1px] border-solid border-[#160E64] border-opacity-10">
			<span className="uppercase mb-12 block font-medium text-sm text-[#160E64] opacity-60 tracking-[4px]">
				Trusted by
			</span>
			<div className="flex justify-between items-center gap-x-14 px-11">
				<span className="w-1/6">
					<Image
						src="/images/hero/banyan-security.png"
						alt=""
						width={500}
						height={500}
						className="w-full h-auto max-w-[115px]"
					/>
				</span>
				<span className="w-1/6">
					<Image
						src="/images/hero/descope.png"
						alt=""
						width={500}
						height={500}
						className="w-full h-auto max-w-[134px]"
					/>
				</span>
				<span className="w-1/6">
					<Image
						src="/images/hero/rubrik.png"
						alt=""
						width={500}
						height={500}
						className="w-full h-auto max-w-[109px]"
					/>
				</span>
				<span className="w-1/6">
					<Image
						src="/images/hero/armorcode.png"
						alt=""
						width={500}
						height={500}
						className="w-full h-auto max-w-[159px]"
					/>
				</span>
				<span className="w-1/6">
					<Image
						src="/images/hero/endor-labs.png"
						alt=""
						width={500}
						height={500}
						className="w-full h-auto max-w-[89px]"
					/>
				</span>
				<span className="w-1/6">
					<Image
						src="/images/hero/rafay.png"
						alt=""
						width={500}
						height={500}
						className="w-full h-auto max-w-[136px]"
					/>
				</span>
			</div>
		</div>
	);
};

export default HeroClients;
