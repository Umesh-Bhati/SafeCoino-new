import React, {useContext, useEffect, useReducer} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PasswordSuggetion from './PasswordSuggetion';
import {
  MIN_LENGTH,
  MIN_LOWERCASE,
  MIN_NUMBERS,
  MIN_UPPERCASE,
  validateReducer,
} from '../../../Store/reducer/validateReducer';
import {UserContext} from '../../../Store/context/UserContext';

const ValidatePassword = () => {
  const initialMinimum = {
    MIN_LENGTH: null,
    MIN_UPPERCASE: null,
    MIN_LOWERCASE: null,
    MIN_NUMBERS: null,
  };

  const [minimum, dispatch] = useReducer(validateReducer, initialMinimum);

  const {password} = useContext(UserContext);

  const validate = (minObj, type, payload, invertPayload) => {
    if (validator.isStrongPassword(password, minObj)) {
      console.info('minLength ');
      return dispatch({
        type,
        payload,
      });
    } else return dispatch({type, payload: invertPayload});
  };

  useEffect(() => {
    if (password.length > 7) {
       dispatch(
        {
            type: MIN_LENGTH,
            payload: {
                MIN_LENGTH: true
            }
        }
       )
    } else {
       dispatch({
        type: MIN_LENGTH,
        payload: {
            MIN_LENGTH: false
        }
    })
    }

    // At least one uppercase
    if (/[A-Z]/.test(password)) {
        dispatch({
            type: MIN_UPPERCASE,
            payload: {
                MIN_UPPERCASE: true
            }
        })
    } else {
        dispatch({
            type: MIN_UPPERCASE,
            payload: {
                MIN_UPPERCASE: false
            }
        })
    }

    // At least one lowercase
    if (/[a-z]/.test(password)) {
        dispatch({
            type: MIN_LOWERCASE,
            payload: {
                MIN_LOWERCASE: true
            }
        })
    } else {
        dispatch({
            type: MIN_LOWERCASE,
            payload: {
                MIN_LOWERCASE: false
            }
        })
    }

    // At least one number
    if (/[0-9]/.test(password)) {
        dispatch({
            type: MIN_NUMBERS,
            payload: {
                MIN_NUMBERS: true
            }
        })
    } else {
        dispatch({
            type: MIN_NUMBERS,
            payload: {
                MIN_NUMBERS: false
            }
        })
    }
  }, [password]);

  return (
    <View
      style={{
        marginVertical: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-around',
        }}>
        <PasswordSuggetion
          minState={minimum.MIN_LENGTH}
          suggetionTxt={'At least 8 characters'}
        />
        <PasswordSuggetion
          minState={minimum.MIN_NUMBERS}
          suggetionTxt={'Least one number'}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          width: '100%',
          justifyContent: 'space-around',
        }}>
        <PasswordSuggetion
          minState={minimum.MIN_UPPERCASE}
          suggetionTxt={'Uppercase (A-Z)'}
        />
        <PasswordSuggetion
          minState={minimum.MIN_LOWERCASE}
          suggetionTxt={'lowercase (a-z)'}
        />
      </View>
    </View>
  );
};

export default ValidatePassword;
