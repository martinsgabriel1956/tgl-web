import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

type AuthProps = {
  users: {}[];
  isLoggedIn: boolean;
};

type ActionType = {
  email: string;
  password: string;
  name: string;
}

const initialState: AuthProps = {
  users: [
    {
      email: localStorage.getItem("email"),
      password: localStorage.getItem("password"),
    },
  ],
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const { email, password }: ActionType = action.payload;

      const emailVerified = localStorage.getItem("email") === email;
      const passwordVerified = localStorage.getItem("password") === password;
      const userVerified = emailVerified && passwordVerified;

      const fieldsEmpty = email.trim() === '' || password.trim() === '';

      if(fieldsEmpty) {
        toast.error("Preencha todos os campos!")
        return;
      }

      if (!userVerified) {
        toast.error("Email ou senha incorretos");
        return;
      }

      state.isLoggedIn = true;
    },
    register(state, action) {
      const { email, password, name }: ActionType = action.payload;
      let { isLoggedIn, users } = state;

      users.push({ email, password, name });

      const emailVerified = email.trim().length > 0;
      const passwordVerified = password.trim().length > 0;
      const userRegistered = emailVerified && passwordVerified;

      if (userRegistered) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        isLoggedIn = true;
      }
    },

    logout(state) {
      state.isLoggedIn = false;
      
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      localStorage.removeItem("name");
    },
    
    validateEmail(state, action) {
      const { email }: ActionType = action.payload;

      const emailIsExist = email.trim().length > 0 && email === localStorage.getItem("email");

      if (emailIsExist) {
        state.isLoggedIn = true;
        toast.success('Senha redefinida!');
      } else {
        state.isLoggedIn = false;
        toast.error('Digite o email cadastrado!');
      }
    },
  },
});

export const authActions = authSlice.actions;
