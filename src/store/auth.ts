import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";


type AuthProps = {
  users: {}[];
  isLoggedIn: boolean;
};

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
      const email: string = action.payload.email;
      const password: string = action.payload.password;

      const emailVerified = localStorage.getItem("email") === email;
      const passwordVerified = localStorage.getItem("password") === password;

      if(email.trim() === '' || password.trim() === '') {
        return;
      }

      if (!emailVerified && passwordVerified) {
        toast.error("Preencha todos os campos!")
        return;
      }

      state.isLoggedIn = true;
    },
    register(state, action) {
      const name: string = action.payload.name;
      const email: string = action.payload.email;
      const password: string = action.payload.password;

      state.users.push({ email, password, name });

      if (email.trim().length > 0 && password.trim().length > 0) {
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        state.isLoggedIn = true;
      }
    },

    logout(state, action) {
      state.isLoggedIn = false;
      localStorage.removeItem("email");
      localStorage.removeItem("password");
    },
    validateEmail(state, action) {
      const email: string = action.payload.email;

      if (email.trim().length > 0 && email === localStorage.getItem("email")) {
        state.isLoggedIn = true
      } else {
        alert('Digite o email cadastrado!');
      }
    },
  },
});

export const authActions = authSlice.actions;
