import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../components";
import { Footer } from "../components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "FunnelStory - Home",
	description:
		"At FunnelStory, we provide a cutting-edge funnel intelligence platform that empowers go-to-market leaders with comprehensive visibility into their trial funnels. Our solution is designed to accelerate your product-led strategy by offering deep insights into every stage of the customer journey. With FunnelStory, you can optimize your funnels, enhance user engagement, and drive growth more effectively.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className} relative`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
