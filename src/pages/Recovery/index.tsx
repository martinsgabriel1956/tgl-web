import { RecoveryForm } from "../../components/Form/RecoveryForm";
import { Card } from "../../components/UI/Card";

export function Recovery() {
	return (
		<section>
			<h2>Recover Password</h2>
			<Card>
				<RecoveryForm />
			</Card>
		</section>
	);
}
