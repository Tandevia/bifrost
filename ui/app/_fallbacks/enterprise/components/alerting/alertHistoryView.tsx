import AlertingPlaceholderView from "./alertingPlaceholderView";

export default function AlertHistoryView() {
	return (
		<AlertingPlaceholderView
			title="Unlock alerting history for proactive monitoring"
			description="This feature is not included in this edition of Tandevia Gateway. Review alert delivery outcomes, failures, and resolution events in one place."
			readmeLink="https://docs.getbifrost.ai/enterprise/alerting/alert-history"
			testIdPrefix="alert-history"
		/>
	);
}