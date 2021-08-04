import { useState } from "react";
import { ProfileForm } from "../../components/Form/ProfileForm";
import { Footer } from "../../components/UI/Footer";
import { Header } from "../../components/UI/Header";
import { api } from "../../services/api";
import {
  Container,
  AddForm,
  EditIcon,
  UserInfoContainer,
  UserInfo,
  EditInfoContainer,
} from "./styles";

import editFormIcon from "../../assets/edit_form.svg";

export function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isEditable, setIsEditable] = useState(false);

  function editUser() {
    setIsEditable(prev => !prev)
  }


  api
    .get("/user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      setName(res.data.name);
      setEmail(res.data.email);
    });

    
  return (
    <>
      <Container>
        <Header />
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
              {isEditable ? (
                <ProfileForm />
              ) : (
                <>
                  <img src={editFormIcon} alt=" " />
                </>
              )}
            </EditInfoContainer>
          </section>
        </main>
      </Container>
      <Footer />
    </>
  );
}
