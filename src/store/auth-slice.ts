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
  isMessageInitial: boolean;
  userLogged: UserProps;
}

const initialState: InitialStateProps = {
  users: [],
  nameMessage: '',
  emailMessage: '',
  passwordMessage: '',
  isMessageInitial: true,
  userLogged: {
    name: '',
    email: '',
    password: '',
    isLoggedIn: false
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerAccount(state, action) {
      const {
        name: nameUser,
        email: emailUser,
        password: passwordUser
      } = action.payload;

      state.users.push({
        name: nameUser,
        email: emailUser,
        password: passwordUser,
        isLoggedIn: false
      });
    },
    validateInput(state, action) {
      const { type, value } = action.payload;
      state.isMessageInitial = false;

      if (type === 'email') {
        const emailIsValid = value.trim().length > 0 && value.includes('@');

        const emailExists = state.users.some(user => user.email === value);

        if (emailExists) {
          state.emailMessage = 'This email is already in use.';
        } else if (!emailIsValid) {
          state.emailMessage = 'Invalid email.';
        } else if (!emailExists && emailIsValid) {
          state.emailMessage = '';
        }
      } else if (type === 'password') {
        const passwordIsValid = value.trim().length > 7;

        if (!passwordIsValid) {
          state.passwordMessage =
            'The password contains fewer than eight characters.';
        } else if (passwordIsValid) {
          state.passwordMessage = '';
        }
      } else {
        const nameIsValid = value.trim().length > 0;

        if (!nameIsValid) {
          state.nameMessage = 'Invalid name.';
        } else if (nameIsValid) {
          state.nameMessage = '';
        }
      }
    },
    onLogin(state, action) {
      const { email, password } = action.payload;

      if (state.users.length > 0) {
        state.users.map((user: UserProps) => {
          if (user.email === email) {
            if (user.password === password) {
              state.passwordMessage = '';
              state.emailMessage = '';
              state.isMessageInitial = false;

              state.userLogged = {
                name: user.name,
                email: user.email,
                password: user.password,
                isLoggedIn: true
              };
              return (user.isLoggedIn = true);
            } else {
              return (state.passwordMessage = 'Incorrect password.');
            }
          } else {
            return (state.emailMessage = 'Incorrect email.');
          }
        });
      } else {
        state.emailMessage = 'Incorrect email.';
        state.passwordMessage = '';
      }
    },
    onLogout(state, action) {
      const email = action.payload.email;

      const userLogged = state.users.find(
        (user: UserProps) => user.email === email
      );

      if (userLogged) {
        userLogged.isLoggedIn = false;
        state.userLogged = {
          name: '',
          email: '',
          password: '',
          isLoggedIn: false
        };
      }
    },
    resetMessages(state) {
      state.emailMessage = '';
      state.nameMessage = '';
      state.passwordMessage = '';
    },
    defineInitialStateOfMessages(state) {
      state.isMessageInitial = true;
    }
  }
});

export const authActions = authSlice.actions;

export default authSlice;
