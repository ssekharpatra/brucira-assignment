import { Button, Logo } from "../index";
import Link from "next/link";

const Header = () => {
	return (
		<header className="absolute top-0 left-0 right-0 z-50">
			<div className="flex justify-between items-center w-11/12 max-w-screen-xl mx-auto py-6">
				<Logo />
				<nav>
					<ul className="flex gap-x-6 text-[#160E64] font-medium">
						<li>
							<Link href="/">Product</Link>
						</li>
						<li>
							<Link href="/">Pricing</Link>
						</li>
						<li>
							<Link href="/">Resources</Link>
						</li>
						<li>
							<Link href="/">About</Link>
						</li>
						<li>
							<Link href="/">Careers</Link>
						</li>
					</ul>
				</nav>
				<div className="flex gap-x-2">
					<Button
						children="Sign In"
						bgColor="bg-transparent"
						textColor="text-[#160E64]"
						className="font-medium"
					/>
					<Button children="Request Demo" className="font-semibold" />
				</div>
			</div>
		</header>
	);
};

export default Header;
