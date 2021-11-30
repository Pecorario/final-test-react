import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

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

      const nameIsNotEmpty = nameUser.trim().length > 0;
      const emailIsNotEmpty = emailUser.trim().length > 0;
      const passwordIsNotEmpty = passwordUser.trim().length > 0;

      if (nameIsNotEmpty && emailIsNotEmpty && passwordIsNotEmpty) {
        state.isMessageInitial = false;
        state.users.push({
          name: nameUser,
          email: emailUser,
          password: passwordUser,
          isLoggedIn: false
        });
        toast.success('Account created successfully.');
      } else {
        if (!nameIsNotEmpty) {
          state.nameMessage = 'Name cannot be empty.';
        }
        if (!emailIsNotEmpty) {
          state.emailMessage = 'Email cannot be empty.';
        }
        if (!passwordIsNotEmpty) {
          state.passwordMessage = 'Password cannot be empty.';
        }
      }
    },
    validateInput(state, action) {
      const { type, value } = action.payload;

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
      } else if (type === 'name') {
        const nameIsValid = value.trim().length > 0;

        if (!nameIsValid) {
          state.nameMessage = 'Invalid name.';
        } else if (nameIsValid) {
          state.nameMessage = '';
        }
      } else if (type === 'emailRedefine') {
        const emailIsValid = value.trim().length > 0 && value.includes('@');

        const emailExists =
          state.users.some(user => user.email === value) &&
          !state.userLogged.email;

        if (emailExists) {
          state.emailMessage = 'This email is already in use.';
        } else if (!emailIsValid) {
          state.emailMessage = 'Invalid email.';
        } else if (!emailExists && emailIsValid) {
          state.emailMessage = '';
        }
      }
    },
    onLogin(state, action) {
      const { email, password } = action.payload;

      const userToLogin = state.users.find(
        (user: UserProps) => user.email === email
      );

      if (userToLogin) {
        state.emailMessage = '';
        if (userToLogin.password === password) {
          state.passwordMessage = '';
          state.isMessageInitial = false;
          userToLogin.isLoggedIn = true;

          state.userLogged = {
            name: userToLogin.name,
            email: userToLogin.email,
            password: userToLogin.password,
            isLoggedIn: true
          };
        } else {
          state.passwordMessage = 'Incorrect password.';
        }
      } else {
        state.emailMessage = 'Incorrect email';
      }
    },
    onLogout(state, action) {
      const email = action.payload;

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
    resetPassword(state, action) {
      const email = action.payload;
      const emailIsNotEmpty = email.trim().length > 0;

      if (emailIsNotEmpty) {
        const emailExists = state.users.some(user => user.email === email);

        if (!emailExists) {
          state.emailMessage = 'This email address is not registered';
        } else {
          state.emailMessage = '';
          const userLogged = state.users.find(
            (user: UserProps) => user.email === email
          );

          if (userLogged) {
            state.isMessageInitial = false;
            userLogged.password = '12345678';
            alert('Password has been redefined to 12345678');
          }
        }
      } else {
        state.emailMessage = 'Email cannot be empty.';
      }
    },
    redefineRegister(state, action) {
      const {
        name: nameUser,
        email: emailUser,
        password: passwordUser
      } = action.payload;

      const nameIsNotEmpty = nameUser.trim().length > 0;
      const emailIsNotEmpty = emailUser.trim().length > 0;
      const passwordIsNotEmpty = passwordUser.trim().length > 0;

      if (nameIsNotEmpty && emailIsNotEmpty && passwordIsNotEmpty) {
        const userLogged = state.users.find(
          (user: UserProps) => user.email === state.userLogged.email
        );

        if (userLogged) {
          state.isMessageInitial = false;
          userLogged.name = nameUser;
          userLogged.email = emailUser;
          userLogged.password = passwordUser;

          state.userLogged = {
            name: nameUser,
            email: emailUser,
            password: passwordUser,
            isLoggedIn: true
          };
        }
      } else {
        if (!nameIsNotEmpty) {
          state.nameMessage = 'Name cannot be empty.';
        }
        if (!emailIsNotEmpty) {
          state.emailMessage = 'Email cannot be empty.';
        }
        if (!passwordIsNotEmpty) {
          state.passwordMessage = 'Password cannot be empty.';
        }
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
