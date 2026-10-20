import { ShieldCheck } from "lucide-react";
import ContactUsView from "../views/contactUsView";

export default function AccessProfilesIndexView() {
	return (
		<div className="h-full w-full">
			<ContactUsView
				className="mx-auto min-h-[80vh]"
				icon={<ShieldCheck className="h-[5.5rem] w-[5.5rem]" strokeWidth={1} />}
				title="Unlock access profiles for better performance"
				description="This feature is not included in this edition of Tandevia Gateway. Create access profiles to control access to your resources."
				readmeLink="https://docs.getbifrost.ai/enterprise/access-profiles"
				testIdPrefix="access-profiles"
			/>
		</div>
	);
}