import { ShieldUser } from "lucide-react";
import ContactUsView from "../views/contactUsView";

export default function MCPAuthConfigView() {
	return (
		<div className="h-full w-full">
			<ContactUsView
				className="mx-auto min-h-[80vh]"
				icon={<ShieldUser className="h-[5.5rem] w-[5.5rem]" strokeWidth={1} />}
				title="Unlock MCP Auth Config"
				description="This feature is not included in this edition of Tandevia Gateway. Configure authentication for MCP servers to secure your MCP connections."
				readmeLink="https://docs.getbifrost.ai/mcp/overview"
			/>
		</div>
	);
}