import { House } from "lucide-react";
import ContactUsView from "../views/contactUsView";

export default function HomeView() {
	return (
		<div className="h-full w-full">
			<ContactUsView
				className="mx-auto min-h-[80vh]"
				icon={<House className="h-[5.5rem] w-[5.5rem]" strokeWidth={1} />}
				title="Unlock your personal Home page"
				description="This feature is not included in this edition of Tandevia Gateway. Home shows each user their own usage, keys, budgets and access."
				readmeLink="https://docs.getbifrost.ai/enterprise"
				testIdPrefix="home"
			/>
		</div>
	);
}