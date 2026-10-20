import AlertingPlaceholderView from "./alertingPlaceholderView";

export default function AlertRulesView() {
	return (
		<AlertingPlaceholderView
			title="Unlock alerting rules for proactive monitoring"
			description="This feature is not included in this edition of Tandevia Gateway. Define alerting rules to catch budget, latency, and degradation issues before they become incidents."
			readmeLink="https://docs.getbifrost.ai/enterprise/alerting/alert-rules"
			testIdPrefix="alert-rules"
		/>
	);
}