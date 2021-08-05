import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { api } from "../services/api";

type AuthProps = {
  users: {}[];
  isLoggedIn: string | null ;
  error: boolean;
};

type ActionType = {
  email: string;
  password: string;
  name: string;
}

type RecoveryProps = {
  token: string;
  password: string;
  confirmPassword: string;
}

const initialState: AuthProps = {
  users: [
    {
      email: localStorage.getItem("email"),
      password: localStorage.getItem("password"),
    },
  ],
  isLoggedIn: localStorage.getItem('token'),
  error: true
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = null;

      const { email, password }: ActionType = action.payload;

      api.post('/login', {
        email,
        password
      }).then(res => {
        localStorage.setItem('token', res.data.token);

        toast.success("Welcome back to TGL");
        
        setTimeout(() => {
          window.location.href = 'http://localhost:3000/dashboard';
      }, 2000)
      }).catch(err => {
        toast.error('Try to login with email or password existent!!');
        return err;
      })
      
      state.isLoggedIn = localStorage.getItem('token');
    },
    register(state, action) {
      const { email, password, name }: ActionType = action.payload;
      
      state.error = true;

      api.post('/users', {
        name,
        email,
        password
      })

      state.error = false;

      toast.success('Account Created!!')
    },

    logout(state) {
      state.isLoggedIn = null;
      
      localStorage.removeItem("token");
    },
    
    validateEmail(state, action) {
      const { email }: ActionType = action.payload;

      api.post('/forgot_password', {
        email
      }).catch(e => {
        toast.error('Digite um email que esteja cadastrado!');
        console.log(e);
        return;
      })
      toast.success('Email sent!');
    },
    recoveryPassword(state, action) {
      const { token, password, confirmPassword }: RecoveryProps = action.payload;

      api.put('/reset_password', {
        token,
        password,
        password_confirmation: confirmPassword,
      }).then(res => {
        toast.success('Reset Password Successfully!');
        setTimeout(() => {
          window.location.href = 'http://localhost:3000/login';
      }, 2000)
      })
      .catch(err => {
        toast.error("Password or Token doesn't confer with the user info!!!");
        return;
      })
    }
  },
});

export const authActions = authSlice.actions;
