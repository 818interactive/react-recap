import * as Const from '../utils/constants';

const Messenger = (state={message:'This is a text message that will be displayed on the browser! :)'}, action)=> {
  switch (action.type) {
    case Const.SET_MESSAGE:
      return state;
    default:
      return state;
  }
}

export default Messenger;
