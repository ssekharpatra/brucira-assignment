import Image from "next/image";
import { PrimaryHeadings } from "../index";

const Problem = () => {
	return (
		<section className="bg-[#F9F7FE] pt-36 relative">
			<Image
				src="/images/the-problem/paper-1.png"
				alt=""
				width={500}
				height={500}
				className="w-[88px] absolute left-[123px] top-[103px]"
			/>
			<Image
				src="/images/the-problem/paper-2.png"
				alt=""
				width={500}
				height={500}
				className="w-[96px] absolute top-[169px] right-[169px]"
			/>
			<Image
				src="/images/the-problem/paper-3.png"
				alt=""
				width={500}
				height={500}
				className="w-[67px] absolute left-[58px] bottom-[128px]"
			/>
			<Image
				src="/images/the-problem/paper-4.png"
				alt=""
				width={500}
				height={500}
				className="w-[83px] absolute right-0 bottom-[271px]"
			/>
			<Image
				src="/images/the-problem/question-mark.png"
				alt=""
				width={500}
				height={500}
				className="w-[35px] absolute top-[358px] right-[223px]"
			/>
			<div className="w-11/12 mx-auto max-w-screen-xl">
				<PrimaryHeadings
					heading="More data shouldn’t create more problems"
					subHeading="Your customer data is spread across dashboards, spreadsheets, emails, and more. It’s time you had a 360-degree view of customer data so you can make decisions that drive your business."
				/>
				<Image
					src="/images/the-problem/multiple-dashboards.png"
					alt=""
					width={2000}
					height={1000}
					quality={100}
					className="mt-16 relative"
				/>
			</div>
		</section>
	);
};

export default Problem;
