export const MIN_LENGTH = 'minLength';
export const MIN_LOWERCASE = 'minLowerCase';
export const MIN_UPPERCASE = 'minUpperCase';
export const MIN_NUMBERS = 'minNumbers';
export const MIN_SYMBOL = 'minUpperCase';

export const validateReducer = (state, action) => {
  switch (action.type) {
    case MIN_LENGTH:
      return {...state, MIN_LENGTH: action.payload.MIN_LENGTH};
    case MIN_LOWERCASE:
      return {
        ...state,
        MIN_LOWERCASE: action.payload.MIN_LOWERCASE,
      };
    case MIN_NUMBERS:
      return {
        ...state,
        MIN_NUMBERS: action.payload.MIN_NUMBERS,
      };
    case MIN_UPPERCASE:
      return {
        ...state,
        MIN_UPPERCASE: action.payload.MIN_UPPERCASE,
      };
    default:
      return state;
  }
};
