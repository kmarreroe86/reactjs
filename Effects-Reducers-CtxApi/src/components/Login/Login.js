import React, { useReducer, useEffect, useState, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';


const emailReducer = (state, actionEmailDispatched) => {
  if (actionEmailDispatched.type === 'USER_INPUT') {
    return { value: actionEmailDispatched.val, isValid: actionEmailDispatched.val.includes('@') };
  }

  if (actionEmailDispatched.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }

  return { value: '', isValid: true };
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }

  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }

  return { value: '', isValid: false };

};


const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: null });

  const authCtx = useContext(AuthContext);


  const { isValid: emailIsValid } = emailState;       // alias assigment . Extract emailState.isValid property to the emailIsValid object property
  const { isValid: passwordIsValid } = passwordState; // alias assigment . Extract passwordState.isValid property to the passwordIsValid object property


  useEffect(() => {
    const identifierTimeout = setTimeout(() => {
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    }, 500);

    return () => {
      console.log('cleanup');
      clearTimeout(identifierTimeout);
    }
  }, [emailIsValid, passwordIsValid]);


  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });

    setFormIsValid(
      passwordState.isValid && event.target.value.includes('@')
    );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value });

    setFormIsValid(
      event.target.value.trim().length > 6 && emailState.isValid
    );
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          label="E-Mail"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />

        <Input
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />


        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
