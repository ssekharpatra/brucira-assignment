import Link from "next/link";
import { Logo } from "../index";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className="pt-[120px]">
			<div className="w-11/12 mx-auto max-w-screen-xl flex justify-between mb-14">
				<div>
					<Logo />
					<Link
						href="/"
						className="flex items-center gap-x-2 text-sm mt-6 text-[#160E64]"
					>
						<span>
							<Image
								src="/images/footer/envelope.png"
								width={100}
								height={100}
								alt=""
								className="w-6"
							/>
						</span>
						sales@funnelstory.com
					</Link>
				</div>
				<div className="flex gap-x-24">
					<ul className="footer-list">
						<span className="heading">Product</span>
						<li>
							<Link href="/">Overview</Link>
						</li>
						<li>
							<Link href="/">Pricing</Link>
						</li>
						<li>
							<Link href="/">Release Notes</Link>
						</li>
					</ul>
					<ul className="footer-list">
						<span className="heading">Resources</span>
						<li>
							<Link href="/">Blog</Link>
						</li>
						<li>
							<Link href="/">Podcast</Link>
						</li>
						<li>
							<Link href="/">Help Center</Link>
						</li>
					</ul>
					<ul className="footer-list">
						<span className="heading">Company</span>
						<li>
							<Link href="/">Our Story</Link>
						</li>
						<li>
							<Link href="/">Team</Link>
						</li>
					</ul>
					<div>
						<Link href="/">
							<span className="flex items-center">
								<span className="mr-3">
									<Image
										src="/images/footer/soc-2.png"
										width={100}
										height={100}
										alt="trust-report-logo"
										className="w-8"
									/>
								</span>
								<span className="text-[#160E64] font-medium mr-1">
									Trust Report
								</span>
								<span>
									<Image
										src="/images/footer/arrow-right.png"
										width={100}
										height={100}
										alt=""
										className="w-4"
									/>
								</span>
							</span>
						</Link>
						<div
							id="service-status"
							className="bg-[#4DAA75] rounded-lg px-4 pr-10 py-3 text-white text-sm font-medium mt-5"
						>
							<span className="flex items-center gap-x-1 mb-1">
								Service Status
								<span>
									<Image
										src="/images/footer/verify.png"
										width={100}
										height={100}
										alt=""
										className="w-4"
									/>
								</span>
							</span>
							<span>All systems operational</span>
						</div>
					</div>
				</div>
			</div>
			<div className="w-11/12 mx-auto max-w-screen-xl border-t-[1px] border-solid border-[#160E64] border-opacity-10 py-9 flex justify-between items-center">
				<div className="flex gap-x-14 text-sm footer-copyright">
					<p className="text-[#160E64] opacity-60">
						Copyright © 2024 FunnelStory. All Rights Reserved.
					</p>
					<div className="flex gap-x-10">
						<Link href="/">Terms of Service</Link>
						<Link href="/">Privacy Policy</Link>
						<Link href="/">Cookies</Link>
					</div>
				</div>
				<div className="flex gap-x-6">
					<Link href="/">
						<Image
							src="/images/footer/twitter.png"
							alt="twitter-logo"
							width={100}
							height={100}
							className="w-6"
						/>
					</Link>
					<Link href="/">
						<Image
							src="/images/footer/facebook.png"
							alt="facebook-logo"
							width={100}
							height={100}
							className="w-6"
						/>
					</Link>
					<Link href="/">
						<Image
							src="/images/footer/linkedin.png"
							alt="linkedin-logo"
							width={100}
							height={100}
							className="w-6"
						/>
					</Link>
					<Link href="/">
						<Image
							src="/images/footer/instagram.png"
							alt="instagram-logo"
							width={100}
							height={100}
							className="w-6"
						/>
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
