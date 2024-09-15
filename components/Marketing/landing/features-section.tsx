import { cn } from "@/lib/utils";
import {
	IconBolt,
	IconShieldCheck,
	IconArrowsExchange,
	IconPhoto,
	IconUsers,
	IconChartBar,
	IconTicket,
	IconLeaf,
} from "@tabler/icons-react";

export function FeaturesSection() {
	const features = [
		{
			title: "Decentralized Room Listings",
			description:
				"DwellChain allows hosts to create and manage room listings on a decentralized platform, ensuring transparency and security. Hosts have full control over their listings and can set their own policies and pricing",
			icon: <IconBolt />,
		},
		{
			title: "Secure Payments with Cryptocurrency",
			description:
				"Guests can book rooms and pay securely using DwellChain's native cryptocurrency. Transactions are fast, efficient, and eco-friendly, with no intermediaries involved",
			icon: <IconShieldCheck />,
		},
		{
			title: "Immutable Booking Records",
			description:
				"All booking records are stored immutably on the blockchain, providing a transparent and fraud-proof history of transactions. Both hosts and guests can access and verify their booking details.",
			icon: <IconArrowsExchange />,
		},
		{
			title: "Direct Host-Guest Communication",
			description:
				"DwellChain offers an in-app messaging system that enables direct communication between hosts and guests. This feature facilitates smooth coordination and enhances the overall booking experience.",
			icon: <IconPhoto />,
		},
		{
			title: "Seamless Booking Process",
			description:
				"DwellChain offers a user-friendly interface that streamlines the booking process for guests. Guests can easily search for rooms based on their preferences and location, and book their stay securely and instantly.",
			icon: <IconUsers />,
		},
		{
			title: " Real-Time Tracking and Analytics",
			description:
				"DwellChain provides real-time tracking and analytics capabilities, allowing hosts to monitor their listings and optimize their operations. Hosts can track occupancy rates, revenue, and other key metrics to make data-driven decisions.",
			icon: <IconChartBar />,
		},
		{
			title: "Smart Contract Automation",
			description:
				"DwellChain utilizes smart contracts to automate various aspects of the booking process. These self-executing contracts ensure that terms are met before any transactions occur, such as confirming payment before a booking is finalized. This automation reduces the risk of disputes and enhances trust between hosts and guests.",
			icon: <IconTicket />,
		},
		{
			title: "User Reputation System",
			description:
				"To foster a trustworthy environment, DwellChain incorporates a user reputation system. Both hosts and guests can leave reviews and ratings based on their experiences. This feedback mechanism helps build a community of reliable users, allowing potential guests to make informed decisions and encouraging hosts to maintain high standards of service..",
			icon: <IconLeaf />,
		},
	];
	return (
		<section className='my-20 py-14'>
			<div className='flex flex-col items-center gap-2 space-y-4 mx-auto my-14 md:px-8r max-w-[63rem] text-center'>
				<h1 className='font-bold text-6xl'>The Future of Room Booking</h1>
				<span className='text-gray-500 text-xl'>
				DwellChain is a groundbreaking decentralized application (dApp) that harnesses the power of blockchain technology to transform the room booking industry. By leveraging the inherent benefits of blockchain, such as immutability, decentralization, and transparency, DwellChain offers a unique solution that addresses the pain points of both hosts and guests
				</span>
			</div>
			<div className='relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto py-10 max-w-7xl'>
				{features.map((feature, index) => (
					<Feature key={feature.title} {...feature} index={index} />
				))}
			</div>
		</section>
	);
}

const Feature = ({
	title,
	description,
	icon,
	index,
}: {
	title: string;
	description: string;
	icon: React.ReactNode;
	index: number;
}) => {
	return (
		<div
			className={cn(
				"flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
				(index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
				index < 4 && "lg:border-b dark:border-neutral-800"
			)}
		>
			{index < 4 && (
				<div className='absolute inset-0 bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent opacity-0 group-hover/feature:opacity-100 w-full h-full transition duration-200 pointer-events-none' />
			)}
			{index >= 4 && (
				<div className='absolute inset-0 bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent opacity-0 group-hover/feature:opacity-100 w-full h-full transition duration-200 pointer-events-none' />
			)}
			<div className='relative z-10 mb-4 px-10 text-neutral-600 dark:text-neutral-400'>
				{icon}
			</div>
			<div className='relative z-10 mb-2 px-10 font-bold text-lg'>
				<div className='group-hover/feature:h-8 group-hover/feature:bg-purple-500 left-0 absolute inset-y-0 bg-neutral-300 dark:bg-neutral-700 rounded-tr-full rounded-br-full w-1 h-6 origin-center transition-all duration-200' />
				<span className='inline-block text-neutral-800 dark:text-neutral-100 transition group-hover/feature:translate-x-2 duration-200'>
					{title}
				</span>
			</div>
			<p className='relative z-10 px-10 max-w-xs text-neutral-600 text-sm dark:text-neutral-300'>
				{description}
			</p>
		</div>
	);
};
