import { Button, PrimaryHeadings } from "../index";
import Image from "next/image";

const Solution = () => {
	return (
		<section className="solution bg-[url('/images/the-solution/gradient-bg.png')] bg-no-repeat bg-center bg-cover">
			<div className="w-11/12 mx-auto max-w-screen-xl py-24">
				<PrimaryHeadings
					heading="How we turn data into insights"
					subHeading="Connect your revenue tech stack and build your data model - in minutes."
					textTheme="dark"
					tag="Solutions"
				/>
				<div className="mb-28 flex gap-x-7 mt-28">
					<div className="card">
						<span>
							<Image
								src="/images/the-solution/cloud-computing.png"
								alt="cloud-computing"
								width={200}
								height={200}
								className="w-[90px]"
							/>
						</span>
						<h6>Ingest your data</h6>
						<p>
							Connect your product interactions and conversational data without
							engineer support.
						</p>
					</div>
					<div className="card">
						<span>
							<Image
								src="/images/the-solution/server.png"
								alt="server"
								width={200}
								height={200}
								className="w-[90px]"
							/>
						</span>
						<h6>Customer Activity Model</h6>
						<p>
							Bring your product data together in one place to power your
							revenue workflows.
						</p>
					</div>
					<div className="card">
						<span>
							<Image
								src="/images/the-solution/insight.png"
								alt="server"
								width={200}
								height={200}
								className="w-[90px]"
							/>
						</span>
						<h6>Activate your data</h6>
						<p>
							Get the insights that empower you to make decisions to grow your
							business.
						</p>
					</div>
				</div>
				<Button className="!px-16 !py-5 mx-auto">Request Demo</Button>
			</div>
		</section>
	);
};

export default Solution;
