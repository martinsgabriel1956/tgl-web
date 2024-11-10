import { ProfileForm } from "../../components/Form/ProfileForm";
import {
	AddForm,
	Container,
	EditIcon,
	EditInfoContainer,
	UserInfo,
	UserInfoContainer,
} from "./styles";
import { useProfile } from "./useProfile";

import editFormIcon from "../../assets/edit_form.svg";

export function Profile() {
	const { name, email, isEditable, editUser } = useProfile();

	return (
		<>
			<Container>
				<main>
					<section>
						<h2>Profile info:</h2>
						<UserInfoContainer>
							<UserInfo>
								<p>Name: {name}</p>
								<p>Email: {email}</p>
							</UserInfo>
							<div>
								<AddForm onClick={editUser}>
									<EditIcon />
									Change info
								</AddForm>
							</div>
						</UserInfoContainer>
						<EditInfoContainer>
							{isEditable ? <ProfileForm /> : <img src={editFormIcon} alt="" />}
						</EditInfoContainer>
					</section>
				</main>
			</Container>
		</>
	);
}
