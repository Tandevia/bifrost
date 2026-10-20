import { FolderKanban } from "lucide-react";
import ContactUsView from "../views/contactUsView";

export default function ProjectsIndexView() {
	return (
		<div className="h-full w-full">
			<ContactUsView
				className="mx-auto min-h-[80vh]"
				icon={<FolderKanban className="h-[5.5rem] w-[5.5rem]" strokeWidth={1} />}
				title="Unlock projects for scoped access and spend"
				description="This feature is not included in this edition of Tandevia Gateway. A project is something a request opts into: it grants access alongside what the caller already holds, and decides whose ledger the spend lands on."
				readmeLink="https://docs.getbifrost.ai/enterprise/projects"
				testIdPrefix="projects"
			/>
		</div>
	);
}