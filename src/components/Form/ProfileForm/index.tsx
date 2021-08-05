import { FormEvent, useRef } from "react";
import toast from "react-hot-toast";
import { api } from "../../../services/api";
import { Container, Control, SaveInfoButton } from "./styles";

export function ProfileForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function handleChangeUserInfo(e: FormEvent) {
    e.preventDefault();

    let name = nameRef.current?.value;
    let email = emailRef.current?.value;
    let password = passwordRef.current?.value;

    api.put(
      "/users",
      {
        name,
        password,
        email
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
    ).then(res => toast.success('Your Account has been updated'))
  }

  return (
    <Container onSubmit={handleChangeUserInfo}>
      <Control>
        <input type="text" placeholder="name" ref={nameRef} />
      </Control>
      <Control>
        <input type="email" placeholder="email" ref={emailRef} />
      </Control>
      <Control>
        <input type="current-password" placeholder="new password" ref={passwordRef} />
      </Control>
      <SaveInfoButton>
        Save
      </SaveInfoButton>
    </Container>
  );
}
