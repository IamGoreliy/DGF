import { createContext, useContext, useEffect, useReducer, useRef } from 'react';
import PropTypes from 'prop-types';
import { authUsersFetch, verificationFetch } from '../utils/custFetch';
import { useRouter } from 'next/navigation';

const HANDLERS = {
  INITIALIZE: 'INITIALIZE',
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT'
};

const initialState = {
  isAuthenticated: false,
  isLoading: true,
  user: null
};

const handlers = {
  [HANDLERS.INITIALIZE]: (state, action) => {
    const user = action.payload;

    return {
      ...state,
      ...(
        // if payload (user) is provided, then is authenticated
        user
          ? ({
            isAuthenticated: true,
            isLoading: false,
            user
          })
          : ({
            isLoading: false
          })
      )
    };
  },
  [HANDLERS.SIGN_IN]: (state, action) => {
    const user = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user
    };
  },
  [HANDLERS.SIGN_OUT]: (state) => {
    return {
      ...state,
      isAuthenticated: false,
      user: null
    };
  }
};

const reducer = (state, action) => (
  handlers[action.type] ? handlers[action.type](state, action) : state
);

// The role of this context is to propagate authentication state through the App tree.

export const AuthContext = createContext({ undefined });

export const AuthProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter()
  const initialized = useRef(false);


  const initialize = async () => {
     initialized.current = window.sessionStorage.getItem('authenticated') ?? false;
    // Prevent from calling twice in development mode with React.StrictMode enabled
    if (initialized.current) {
      let statusVerification, responseData;
      try {
        [statusVerification, responseData] = await verificationFetch(window.sessionStorage.getItem('token'));
      }catch (e) {
      //🦄🦄🦄🦄⬇️⬇️⬇️⬇️⬇️⬇️ дописать верификицию. Заполнить данные юзера и дописать catch выводить ошибки которые он поймал ⬇️⬇️⬇️⬇️🦄🦄🦄🦄
      }
      console.log(statusVerification, responseData);
      const user = {
        id: '5e86809283e28b96d2d38537',
        avatar: '/assets/avatars/avatar-anika-visser.png',
        name: 'Anika Visser',
        email: 'anika.visser@devias.io'
      };

      dispatch({
        type: HANDLERS.INITIALIZE,
        payload: user
      });

      router.push('/');
    } else {
      dispatch({
        type: HANDLERS.INITIALIZE
      });
    }

      // initialized.current = true;
      //
      // let isAuthenticated = false;
      //
      // try {
      //   isAuthenticated = window.sessionStorage.getItem('authenticated') === 'true';
      // } catch (err) {
      //   console.error(err);
      // }
      //
      // if (isAuthenticated) {
      //   const user = {
      //     id: '5e86809283e28b96d2d38537',
      //     avatar: '/assets/avatars/avatar-anika-visser.png',
      //     name: 'Anika Visser',
      //     email: 'anika.visser@devias.io'
      //   };
      //
      //   dispatch({
      //     type: HANDLERS.INITIALIZE,
      //     payload: user
      //   });
      // } else {
      //   dispatch({
      //     type: HANDLERS.INITIALIZE
      //   });
      // }
  };

  useEffect(
    () => {
      initialize();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const skip = () => {
    try {
      window.sessionStorage.setItem('authenticated', 'true');
    } catch (err) {
      console.error(err);
    }

    const user = {
      id: '5e86809283e28b96d2d38537',
      avatar: '/assets/avatars/avatar-anika-visser.png',
      name: 'Anika Visser',
      email: 'anika.visser@devias.io'
    };

    dispatch({
      type: HANDLERS.SIGN_IN,
      payload: user
    });
  };

  //🦄🦄🦄 => вход в админку

  const signIn = async (email, password) => {
    let authStatus, responseData;
    try {
      [authStatus, responseData ] = await authUsersFetch(email, password);
    } catch (e) {
      console.error(e)
    }

    console.log(authStatus, responseData);

    if (!authStatus) {
      throw new Error('Please check your email and password');
    }

    const {userInfo, token} = responseData;

    try {
      window.sessionStorage.setItem('authenticated', 'true');
      window.sessionStorage.setItem('token', token);
    } catch (err) {
      console.error(err);
    }

    const user = {
      id: userInfo.id,
      avatar: userInfo.avatar ?? '/assets/avatars/avatar-anika-visser.png',
      name: userInfo.name,
      email: userInfo.id
    };

    dispatch({
      type: HANDLERS.SIGN_IN,
      payload: user
    });
  };

  //🦄🦄🦄🦄 => выход из админки

  const signUp = async (email, name, password) => {
    throw new Error('Sign up is not implemented');
  };

  const signOut = () => {
    dispatch({
      type: HANDLERS.SIGN_OUT
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        skip,
        signIn,
        signUp,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node
};

export const AuthConsumer = AuthContext.Consumer;

export const useAuthContext = () => useContext(AuthContext);
