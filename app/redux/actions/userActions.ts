export const SET_USER_CURRENT_X = 'SET_USER_CURRENT_X';

export const setUserCurrentX = (x: number) => ({
  type: SET_USER_CURRENT_X,
  payload: x,
});

export const SET_CHARACTER_CURRENT_X = 'SET_CHARACTER_CURRENT_X';

export const setCharacterCurrentX = (x: number) => ({
  type: SET_CHARACTER_CURRENT_X,
  payload: x,
});
