import { connect } from 'react-redux';
import Messenger from '../../components/messenger/Messenger';

import { setMessage } from '../../actions/actions';

const mapStateToProps = (state)=> {
  return {
    messenger: state.messenger
  }
}

const mapDispatchToProps = (dispatch)=> {
  return{
    setMessage: (data)=> {
      dispatch(setMessage(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Messenger)
