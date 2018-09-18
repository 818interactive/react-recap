import * as Const from '../utils/constants';

export const setMessage = (data)=> {
  return {
    type: Const.SET_MESSAGE,
    data
  }
}
