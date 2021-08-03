import { useState } from "react";
import { ProfileForm } from "../../components/Form/ProfileForm";
import { Footer } from "../../components/UI/Footer";
import { Header } from "../../components/UI/Header";
import { api } from "../../services/api";
import { Container } from "./styles";

export function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

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
            <h2>Welcome, {name}</h2>

            <p>Profile info:</p>

            

            <ProfileForm />
          </section>
          <section>
         
          </section>
        </main>
      </Container>
      <Footer />
    </>
  );
}
