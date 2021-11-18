import { createSlice } from '@reduxjs/toolkit';

interface UserProps {
  name: string;
  email: string;
  password: string;
  isLoggedIn: boolean;
}

interface InitialStateProps {
  users: Array<UserProps>;
  nameMessage: string;
  emailMessage: string;
  passwordMessage: string;
}

const initialState: InitialStateProps = {
  users: [],
  nameMessage: '',
  emailMessage: '',
  passwordMessage: ''
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerAccount(state, action) {
      const nameUser = action.payload.name;
      const emailUser = action.payload.email;
      const passwordUser = action.payload.password;

      // const nameIsValid = nameUser.trim().length > 0;
      // const emailIsValid =
      //   emailUser.trim().length > 0 && emailUser.includes('@');
      // const emailExists =
      //   state.users.find((user: UserProps) => user.email === emailUser) !==
      //   undefined
      //     ? true
      //     : false;
      // const passwordIsValid = passwordUser.trim().length > 7;

      // if (!emailExists && nameIsValid && emailIsValid && passwordIsValid) {
      state.users.push({
        name: nameUser,
        email: emailUser,
        password: passwordUser,
        isLoggedIn: false
      });
      //   state.nameMessage = '';
      //   state.emailMessage = '';
      //   state.passwordMessage = '';
      // } else {
      //   if (emailExists) {
      //     state.emailMessage = 'This email is already in use.';
      //   }
      //   if (!emailIsValid) {
      //     state.emailMessage = 'Invalid email.';
      //   }
      //   if (!passwordIsValid) {
      //     state.passwordMessage =
      //       'The password contains fewer than eight characters.';
      //   }
      //   if (!nameIsValid) {
      //     state.nameMessage = 'Invalid name.';
      //   }
      //   if (!emailExists && emailIsValid) {
      //     state.emailMessage = '';
      //   }
      //   if (passwordIsValid) {
      //     state.passwordMessage = '';
      //   }
      //   if (nameIsValid) {
      //     state.nameMessage = '';
      //   }
      // }
    },
    onLogin(state, action) {
      const email = action.payload.email;

      state.users.map((user: UserProps) => {
        if (user.email === email) {
          return (user.isLoggedIn = true);
        }
        return (user.isLoggedIn = false);
      });

      // if (state.users.length > 0) {
      //   state.users.map((user: UserProps) => {
      //     if (user.email === email) {
      //       console.log('Email existe');
      //       if (user.password === password) {
      //         state.passwordMessage = '';
      //         state.emailMessage = '';
      //         return (user.isLoggedIn = true);
      //       } else {
      //         return (state.passwordMessage = 'Incorrect password.');
      //       }
      //     } else {
      //       console.log('Email não existe');

      //       return (state.emailMessage = 'Incorrect email.');
      //     }
      //   });
      // } else {
      //   state.emailMessage = 'Incorrect email.';
      // }
    },
    resetMessages(state) {
      state.emailMessage = '';
      state.nameMessage = '';
      state.passwordMessage = '';
    }
  }
});

export const authActions = authSlice.actions;

export default authSlice;
